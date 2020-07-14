define([
    'chat/model/chatModel',
    'text!chat/view/chat.html'
], function (
    chatModel,
    chatTemplate
) {

    return {
        template: chatTemplate,
        data: function() {
            var id = this.$route.params.id;
            return {
                chat: chatModel.oneById(id)
            }
        },
        watch: {
            $route: function(to, from) {
                console.log(to, from);
                // обрабатываем изменение параметров маршрута...
            }
        }
    };

});