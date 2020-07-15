define([
    'pages/chat/model/chatModel',
    'text!pages/chat/view/chatList.html'
], function (
    chatModel,
    template
) {

    return {
        template: template,
            data: function () {
        return {
            items: chatModel.all()
        };
    }
    };

});