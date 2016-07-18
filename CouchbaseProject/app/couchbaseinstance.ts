import {Couchbase} from "nativescript-couchbase";

export class CouchbaseInstance {
    private database:any;

    public constructor() {
    }

    public init() {
        this.database = new Couchbase("jahid-database");
        this.database.createView("people", "1", (document, emitter)=> {
            emitter.emit(document._id, document);
        });
    }

    public getDatabase() {
        return this.database;
    }
}