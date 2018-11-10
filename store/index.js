import Vue from "vue";
import Vuex from "vuex";
import FIBOS from 'fibos.js'
import JSZip from 'jszip'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
FIBOS.compileCode = async code => {
    var jszip = new JSZip()
    jszip.file('index.js', code)
    return jszip.generateAsync({ type: 'binarystring' });
};
FIBOS.compileModule = files => {
    function append(files, jszip) {
        for (let fname in files) {
            let file = files[fname]
            if (typeof file === 'object') {
                append(file, jszip.folder(fname));
            } else if (typeof file === 'string') {
                jszip.file(fname, file)
            }
        }
        return jszip
    }
    return append(files, new JSZip()).generateAsync({ type: 'binarystring' });
};
const store = () =>
    new Vuex.Store({
        state: {
            files: {
                'abi.json': {
                    version: "eosio::abi/1.0",
                    types: [],
                    structs: [],
                    actions: [],
                    tables: []
                },
                'contract.js': `exports.hi = (user, content) => {
    console.log(action);

    if(!action.has_auth(user)){
        console.log('无权限')
    }

    if(!action.is_account(user)){
        console.log('请提供一个存在的帐号')
    }else{
        console.log('帐号存在')
    }
}`,
                'test.js': `(async () => {
    var res = await contract.hi('funis', '这是一个测试', {
        authorization: account
    });
    console.log(res.processed.action_traces[0].console)
    console.log(res);
})();`
            },
            fibosList: [],
            currentFibosIndex: 0,
            contractAcc: "",
            currentAcc: "",
            contractJS: "contract.js",
            contractABI: "abi.json",
            testJS: "test.js"
        },
        getters: {
            currentFibos: state => FIBOS(state.fibosList[state.currentFibosIndex]),
            currentContract: state => state.files[state.contractJS],
            currentABI: state => state.files[state.contractABI],
            currentTest: state => state.files[state.testJS]
        },
        mutations: {
            update: Object.assign,
            addFile(state, payload) {
                Object.assign(state.files, payload)
            },
            deleteFile(state, name) {
                delete state.files[name]
            },
            addFibosConfig(state, opt) {
                state.fibosList.push(opt)
            },
            removeFibosConfig(state, i) {
                state.fibosList.splice(i, 1)
            }
        },
        plugins: [new createPersistedState()]
    });

export default store;