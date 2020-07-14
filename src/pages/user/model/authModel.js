define([

], function (

) {

    var identity = null;

    return {
        auth: function (form) {
            identity = {
                id: 1,
                login: form.login
            };
        },
        logout: function () {
            identity = null;
        },
        getIdentity: function () {
            return identity;
        }
    };

});