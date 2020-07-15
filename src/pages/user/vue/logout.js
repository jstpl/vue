define([
    'pages/user/model/authModel'
], function (
    AuthModel
) {

    return {
        state: AuthModel,
        created: function () {
            console.info('logout');
            AuthModel.commit('logout');
            this.$router.push('/');
        }
    };

});