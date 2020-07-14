define([
    'vue',
    'pages/user/model/authModel',
    'text!pages/user/view/auth.html'
], function (
    Vue,
    AuthModel,
    template
) {

    return {
        template: template,
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
                AuthModel.auth(this.entity);
            }
        }
    };

});