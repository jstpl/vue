define([
    'vue',
    'vuex',
    'pages/user/model/authModel',
    'text!pages/user/view/auth.html'
], function (
    Vue,
    Vuex,
    AuthModel,
    template
) {

    Vue.use(Vuex);

    return {
        template: template,
        state: AuthModel,
        data: function () {
            return {
                entity: {
                    login: '',
                    password: ''
                },
                errors: {}
            };
        },
        methods: {
            auth: function () {
                AuthModel.commit('auth');
                this.$router.push('/');
            }
        }
    };

});