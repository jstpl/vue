define([
    'text!pages/uiKit/view/index.html'
], function (
    template
) {

    return {
        template: template,
        data: function() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged: function(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert: function() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    };

});