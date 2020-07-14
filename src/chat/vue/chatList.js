define([
    'chat/model/chatModel',
    'text!chat/view/chatList.html'
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