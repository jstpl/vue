define([
    'vue',
    'vuex'
], function (
    Vue,
    Vuex
) {

    Vue.use(Vuex);

    var Storage = {
        set: function (user) {
            localStorage.setItem('appUser', JSON.stringify(user));
        },
        get: function () {
            return JSON.parse(localStorage.getItem('appUser'));
        }
    };

    var store = new Vuex.Store({
        state: {
            user: null
        },
        mutations: {
            auth: function (state) {
                state.user = {
                    id: 1,
                    login: 'user11111'
                };
                Storage.set(state.user);
            },
            logout: function (state) {
                state.user = null;
                Storage.set(state.user);
            },
            init: function (state) {
                state.user = Storage.get();
            }
        },
        getters: {
            getUser: function (state) {
                return state.user;
            }
        }
    });

    store.commit('init');

    return store;

});