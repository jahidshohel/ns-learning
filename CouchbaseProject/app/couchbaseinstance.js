"use strict";
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseInstance = (function () {
    function CouchbaseInstance() {
    }
    CouchbaseInstance.prototype.init = function () {
        this.database = new nativescript_couchbase_1.Couchbase("jahid-database");
        this.database.createView("people", "1", function (document, emitter) {
            emitter.emit(document._id, document);
        });
    };
    CouchbaseInstance.prototype.getDatabase = function () {
        return this.database;
    };
    return CouchbaseInstance;
}());
exports.CouchbaseInstance = CouchbaseInstance;
//# sourceMappingURL=couchbaseinstance.js.map