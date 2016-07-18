"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var couchbaseinstance_1 = require("../../couchbaseinstance");
var ListComponent = (function () {
    function ListComponent(router, location, couchbaseInstance, ngZone) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.database = couchbaseInstance.getDatabase();
        this.personList = [];
        this.database.addDatabaseChangeListener(function (changes) {
            var changeIndex = -1;
            for (var i = 0; i < changes.length; i++) {
                var documentId = changes[i].getDocumentId();
                changeIndex = _this.indexOfObjectId(documentId, _this.personList);
                if (changeIndex == -1) {
                    _this.ngZone.run(function () {
                        _this.personList.push(document);
                    });
                }
                else {
                    _this.ngZone.run(function () {
                        _this.personList[changeIndex] = document;
                    });
                }
            }
        });
        location.subscribe(function (path) {
            _this.refresh();
        });
        this.refresh();
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["create"]);
    };
    ListComponent.prototype.refresh = function () {
        this.personList = [];
        var rows = this.database.executeQuery("people");
        for (var i = 0; i < rows.length; i++) {
            this.personList.push(rows[i]);
        }
    };
    ListComponent.prototype.indexOfObjectId = function (needle, haystack) {
        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] != undefined && haystack[i].hasOwnProperty("_id")) {
                if (haystack[i]._id == needle) {
                    return i;
                }
            }
        }
        return -1;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "component/list/list.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, couchbaseinstance_1.CouchbaseInstance, core_1.NgZone])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map