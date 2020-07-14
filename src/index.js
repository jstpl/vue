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
    deps: ["vue", "polyfill", "vueRouter"]
});

require([
    'vue',
    'vueRouter',
    'config/router'
], function (
    Vue,
    VueRouter,
    routerConfig
) {

    Vue.use(VueRouter);

    // Создаём экземпляр маршрутизатора
    var router = new VueRouter(routerConfig);

    // Создаём корневой экземпляр приложения.
    // Убедитесь, что передали экземпляр маршрутизатора в опции
    // `router`, чтобы позволить приложению знать о его наличии.
    new Vue({
        el: "#app",
        router: router,
        created: function () {
            console.log('app created');
        }
    });

});
