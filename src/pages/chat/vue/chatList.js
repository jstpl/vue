define([
    'pages/chat/model/chatModel',
    'text!pages/chat/view/chatList.html'
], function (
    chatModel,
    chatListTemplate
) {

    return {
        template: chatListTemplate,
            data: function () {
        return {
            items: chatModel.all()
        };
    }
    };

});