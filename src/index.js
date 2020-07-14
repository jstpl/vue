requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(), // отмена кэширования скриптов браузером
    baseUrl: "/src",
    paths: {
        module: '/spa/module',
        widget: '/spa/widget',
        app: '/src',

        jrails: '/src/vendor/jrails',
        jquery: '/src/vendor/jquery/jquery.min',
        text: '/src/vendor/text/text',
        axios: '/src/vendor/axios.min',
        bootstrap: '/src/vendor/bootstrap/bootstrap.min',
        backbone: '/src/vendor/backbone.min',
        underscore: '/src/vendor/underscore.min',
        lodash: '/src/vendor/lodash/lodash.min',
        storage: '/src/vendor/jstorage',
        json: '/src/vendor/json2',
        jszip: '/src/vendor/jszip/jszip',
        toastr: '/src/vendor/toastr/toastr.min',
        'crypto-js': '/src/vendor/crypto-js/crypto-js',
        jsencrypt: '/src/vendor/jsencrypt/jsencrypt',
        restClient: '/src/vendor/jrails/rest/clientAxiosDriver',

        director: '/src/vendor/director/director.min',
        redux: '/src/vendor/redux/redux.min',
        vue: '/src/vendor/vue/vue.min',
        vueRouter: '/src/vendor/vue-router/vue-router',
        bootstrapVue: '/src/vendor/bootstrap-vue/bootstrap-vue',
        polyfill: '/src/vendor/polyfill/polyfill.min',
        'jquery-ui': '/src/vendor/jquery-ui/jquery-ui.min'
    },
    shim: {
        'director': {
            exports: 'Router'
        },
        'underscore': {
            exports: '_'
        },
        'lodash': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'json': {
            exports: 'JSON'
        },
        'axios': {
            exports: 'axios'
        },
        'storage': {
            deps: ['json', 'jquery']
        },
        'vue': {
            exports: 'Vue'
        },
        'vueRouter': {
            exports: 'VueRouter',
            deps: ['vue']
        },
        'bootstrapVue': {
            deps: ['vue']
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps:["vue", "polyfill", "vueRouter"]
});

require([
    'vue',
    'vueRouter',
    'home/vue/index',
    'error/vue/notFound',
    'chat/vue/chatList',
    'chat/vue/chat'
], function (
    Vue,
    VueRouter,
    Home,
    NotFound,
    ChatList,
    Chat
) {

    Vue.use(VueRouter);

    // 0. Если используем модульную систему (например через vue-cli),
    // импортируем Vue и VueRouter и затем вызываем `Vue.use(VueRouter)`.

    // 1. Определяем компоненты для маршрутов.
    // Они могут быть импортированы из других файлов
    var Foo = {
        template: '<b-alert show> Hello {{ name }}! </b-alert>',
        data: function () {
            return {
                name: 'Sitepoint'
            }
        }
    };

    //var NotFound = {template: ''};
    //var Home = {template: '<p>главная</p>'};
    var User = {
        template: '<div>Пользователь {{ $route.params.id }}</div>',
        watch: {
            $route: function (to, from) {
                console.log(to, from);
                // обрабатываем изменение параметров маршрута...
            }
        }
    };

    // 2. Определяем несколько маршрутов
    // Каждый маршрут должен указывать на компонент.
    // "Компонентом" может быть как конструктор компонента, созданный
    // через `Vue.extend()`, так и просто объект с опциями компонента.
    // Мы поговорим о вложенных маршрутах позднее.
    var routes = [
        {path: '/', component: Home},
        {path: '/foo', component: Foo},
        {path: '/chat', component: ChatList},
        {path: '/chat/:id', component: Chat},
        {path: '/user/:id', component: User},
        {path: '*', component: NotFound}
    ];

    // 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
    // Вы можете передавать и дополнительные опции, но пока не будем усложнять.
    var router = new VueRouter({
        routes: routes // сокращённая запись для `routes: routes`
    });

    // 4. Создаём и монтируем корневой экземпляр приложения.
    // Убедитесь, что передали экземпляр маршрутизатора в опции
    // `router`, чтобы позволить приложению знать о его наличии.
    new Vue({
        el:"#app",
        router:router,
        created: function(){
            console.log('app created');
        }
    });

});
