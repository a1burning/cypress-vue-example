"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var HomeView_vue_1 = require("../views/HomeView.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView_vue_1["default"]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/AboutView.vue'); }); }
    },
    {
        path: '/chai',
        name: 'chai',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/ChaiView.vue'); }); }
    }
];
var router = new vue_router_1["default"]({
    routes: routes
});
exports["default"] = router;
