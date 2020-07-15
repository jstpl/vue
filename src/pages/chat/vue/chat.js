define([
    'pages/chat/model/chatModel',
    'text!pages/chat/view/chat.html'
], function (
    chatModel,
    template
) {

    return {
        template: template,
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