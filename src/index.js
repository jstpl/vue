requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(), // отмена кэширования скриптов браузером
    //baseUrl: "/src",
    paths: {
        pages: '/src/pages',
        app: '/src/app',

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
        vuex: '/src/vendor/vuex/vuex',
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
        'vuex': {
            exports: 'Vuex',
            deps: ['vue']
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
    deps: [
        "vue",
        //"polyfill",
        "vueRouter", 'bootstrapVue'
    ]
});

require([
    'vue',
    'vuex',
    'vueRouter',
    'config/router',
    'bootstrapVue',
    'text!app/view/navbar.html',
    'pages/user/model/authModel'
], function (
    Vue,
    Vuex,
    VueRouter,
    routerConfig,
    BootstrapVue,
    navbarTemplate,
    AuthModel
) {

    //console.log(Vuex);
    Vue.use(Vuex);
    Vue.use(VueRouter);
    Vue.use(BootstrapVue);

    // Создаём экземпляр маршрутизатора
    var router = new VueRouter(routerConfig);

    // Создаём корневой экземпляр приложения.
    // Убедитесь, что передали экземпляр маршрутизатора в опции
    // `router`, чтобы позволить приложению знать о его наличии.
    new Vue({
        el: "#app",
        router: router,
        created: function () {
            console.info('app created');
        }
    });

    console.log(AuthModel);

    new Vue({
        el: "#app-navbar",
        router: router,
        template: navbarTemplate,
        state: AuthModel,
        created: function () {
            console.info('navbar created');
        },
        computed: {
            user: function () {
                return AuthModel.state.user;
            }
        }
    });

});
