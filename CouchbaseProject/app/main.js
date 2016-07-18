"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var couchbaseinstance_1 = require("./couchbaseinstance");
var router_1 = require("nativescript-angular/router");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
exports.AppRoutes = [
    { path: "", component: list_component_1.ListComponent },
    { path: "create", component: create_component_1.CreateComponent }
];
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [couchbaseinstance_1.CouchbaseInstance, [router_1.nsProvideRouter(exports.AppRoutes, {})]]);
//# sourceMappingURL=main.js.map