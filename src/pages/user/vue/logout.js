define([
    'vue',
    'vuex',
    'pages/user/model/authModel',
], function (
    Vue,
    Vuex,
    AuthModel
) {

    //Vue.use(Vuex);

    return {
        //template: template,
        state: AuthModel,
        created: function () {
            console.info('logout');
            AuthModel.commit('logout');
            this.$router.push('/');
        },
        methods: {
            auth: function () {

            }
        }
    };

});