import {Component} from "@angular/core";
import {CouchbaseInstance} from "../../db/couchbase-instance";

@Component({
    selector: "tab2",
    templateUrl: "components/tabs/tab2/tab2.html",
    styleUrls: ["components/tabs/tab2/tab2-common.css", "components/tabs/tab2/tab2.css"],
})
export class Tab2Page {
    private database:any;
    firstName:string="Jhon";
    lastName:string="Doe";

    constructor(couchInstance: CouchbaseInstance) {
        this.database=couchInstance.getDatabase();
        this.database.addDatabaseChangeListener(changes=>{
            console.log("Received changes", changes);
        });
        console.log("This.dtabase1 is", this.database);
    }

    insert(e:any){
        console.log("This.database2 is", Object.keys(this.database.context));
        this.database.createDocument({
            "firstName": this.firstName,
            "lastName": this.lastName
        });
        console.log("insertttt");
    }

    select(e:any){
        console.log("selecttt");
    }
}