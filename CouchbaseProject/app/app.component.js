"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var couchbaseinstance_1 = require("./couchbaseinstance");
var AppComponent = (function () {
    function AppComponent(couchbaseInstance) {
        couchbaseInstance.init();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-url></page-router-url>",
            directives: [router_1.NS_ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [couchbaseinstance_1.CouchbaseInstance])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map