import {Couchbase} from "nativescript-couchbase";

export class CouchbaseInstance {

    private database: any;
    private pull: any;
    private push: any;

    constructor() { }

    init() {
        console.log("init invokeeddddddd");
        this.database = new Couchbase("nraboy-database");

        //this.database.createView("people", "1", (document, emitter) => {
        //    emitter.emit(JSON.parse(document)._id, document);
        //});
    }

    getDatabase() {
        return this.database;
    }
}