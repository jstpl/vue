define([
    'pages/home/vue/index',
    'pages/error/vue/notFound',
    'pages/chat/vue/chatList',
    'pages/chat/vue/chat',
    'pages/rsa/vue/generator',
    'pages/uiKit/vue/index',
    'pages/user/vue/auth'
], function (
    Home,
    NotFound,
    ChatList,
    Chat,
    RsaGenerator,
    UiKitIndex,
    UserAuth
) {

    // Определяем несколько маршрутов
    // Каждый маршрут должен указывать на компонент.
    // "Компонентом" может быть как конструктор компонента, созданный
    // через `Vue.extend()`, так и просто объект с опциями компонента.
    // передаём маршруты в опции `routes`

    var routes = [
        {path: '/', component: Home},
        {path: '/rsa/generator', component: RsaGenerator},
        {path: '/ui-kit', component: UiKitIndex},
        {path: '/auth', component: UserAuth},
        {path: '/chat', component: ChatList},
        {path: '/chat/:id', component: Chat},
        {path: '*', component: NotFound}
    ];

    return {
        //mode: 'history',
        linkActiveClass: 'active',
        routes: routes
    };

});
