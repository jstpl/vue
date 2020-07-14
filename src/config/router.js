define([
    'vueRouter',
    'home/vue/index',
    'error/vue/notFound',
    'chat/vue/chatList',
    'chat/vue/chat'
], function (
    VueRouter,
    Home,
    NotFound,
    ChatList,
    Chat
) {

    // Определяем несколько маршрутов
    // Каждый маршрут должен указывать на компонент.
    // "Компонентом" может быть как конструктор компонента, созданный
    // через `Vue.extend()`, так и просто объект с опциями компонента.
    // передаём маршруты в опции `routes`

    return {
        routes: [
            {path: '/', component: Home},
            {path: '/chat', component: ChatList},
            {path: '/chat/:id', component: Chat},
            {path: '*', component: NotFound}
        ],
        mode: 'history',
        linkActiveClass: 'active'
    };

});
