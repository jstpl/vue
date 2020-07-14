define([
    'vue',
    'text!pages/user/view/auth.html'
], function (
    Vue,
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
                console.log(this.entity.login);
            }
        }
    };

});