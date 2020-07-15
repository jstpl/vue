define([
    'vue',
    'vuex'
], function (
    Vue,
    Vuex
) {

    Vue.use(Vuex);

    var identityStorage = {
        set: function (identity) {
            localStorage.setItem('authModelIdentity', JSON.stringify(identity));
        },
        get: function () {
            return JSON.parse(localStorage.getItem('authModelIdentity'));
        }
    };

    var store = new Vuex.Store({
        state: {
            identity: null
        },
        mutations: {
            auth: function (state) {
                state.identity = {
                    id: 1,
                    login: 'user11111'
                };
                identityStorage.set(state.identity);
                console.log(state.identity);
            },
            logout: function (state) {
                state.identity = null;
                identityStorage.set(state.identity);
            },
            init: function (state) {
                state.identity = identityStorage.get();
            }
        },
        getters: {
            getIdentity: function (state) {
                return state.identity;
            }
        }

    });

    store.commit('init');

    return store;

});