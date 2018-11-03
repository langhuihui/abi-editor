import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = () =>
    new Vuex.Store({
        state: {
            files: {
                default: {
                    version: "eosio::abi/1.0",
                    types: [],
                    structs: [],
                    actions: [],
                    tables: []
                }
            }
        },
        mutations: {
            update: Object.assign,
            addFile(state, payload) {
                Object.assign(state.files, payload)
            },
            deleteFile(state, name) {
                delete state.files[name]
            }
        }
    });

export default store;