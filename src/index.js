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
        'jquery-ui': '/src/vendor/jquery-ui/jquery-ui.min',
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
            exports: 'Vue',
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
    deps:["vue", "polyfill", "vueRouter"],
});

require([
    'vue',
    'vueRouter',
    'bootstrapVue',
    'polyfill'
], function (
    Vue,
    VueRouter,
    bootstrapVue,
    polyfill
) {

    Vue.use(VueRouter);

    //window.onload = function () {

    // 0. Если используем модульную систему (например через vue-cli),
    // импортируем Vue и VueRouter и затем вызываем `Vue.use(VueRouter)`.

    // 1. Определяем компоненты для маршрутов.
    // Они могут быть импортированы из других файлов
    const Foo = {
        template: '<b-alert show> Hello {{ name }}! </b-alert>',
        data: function () {
            return {
                name: 'Sitepoint'
            }
        },
    };

    var chatCollection = [
        {
            id: 1,
            name: 'Bob'
        },
        {
            id: 2,
            name: 'Alisa'
        },
        {
            id: 3,
            name: 'Jim'
        }
    ];


    var chatModel = {
        oneById: function (id) {
            id = parseInt(id);
            for (var k in chatCollection) {
                var chatEntity = chatCollection[k];
                if (chatEntity.id === id) {
                    return chatEntity;
                }
            }
            return null;
        }
    };

    const ChatList = {
        template: '<div><b-list-group-item v-for="item in items"><router-link :to="/chat/ + item.id">{{ item.name }}</router-link></b-list-group-item></div>',
        data: function () {
            return {
                items: chatCollection
            };
        },

    };

    const Chat = {
        template: '<div>Пользователь {{ chat.name }} (ID:{{ $route.params.id }})</div>',
        data() {
            var id = this.$route.params.id;
            return {
                chat: chatModel.oneById(id),
            }
        },
        watch: {
            $route(to, from) {
                console.log(to, from);
                // обрабатываем изменение параметров маршрута...
            }
        }
    };

    const NotFound = {template: '<p>Страница не найдена</p>'};
    const Home = {template: '<p>главная</p>'};
    const User = {
        template: '<div>Пользователь {{ $route.params.id }}</div>',
        watch: {
            $route(to, from) {
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
    const routes = [
        {path: '/', component: Home},
        {path: '/foo', component: Foo},
        {path: '/chat', component: ChatList},
        {path: '/chat/:id', component: Chat},
        {path: '/user/:id', component: User},
        {path: '*', component: NotFound},
    ];

    // 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
    // Вы можете передавать и дополнительные опции, но пока не будем усложнять.
    const router = new VueRouter({
        routes // сокращённая запись для `routes: routes`
    });

    // 4. Создаём и монтируем корневой экземпляр приложения.
    // Убедитесь, что передали экземпляр маршрутизатора в опции
    // `router`, чтобы позволить приложению знать о его наличии.
    const app = new Vue({
        router:router,
        created: function(){
            console.log('app created');
        },
        el:"#app",
    });

    //console.log(routes);
    //}
});
