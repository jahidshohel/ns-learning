import {Component, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {CouchbaseInstance} from "../../couchbaseinstance";

@Component({
    selector: "list",
    templateUrl: "component/list/list.component.html"
})

export class ListComponent {
    private database:any;
    private router:Router;
    public personList:Array<Object>;
    private ngZone:NgZone;


    constructor(router:Router, location:Location, couchbaseInstance:CouchbaseInstance, ngZone:NgZone) {
        this.router = router;
        this.ngZone = ngZone;
        this.database = couchbaseInstance.getDatabase();
        this.personList = [];

        this.database.addDatabaseChangeListener(changes=> {
            let changeIndex = -1;
            for (let i = 0; i < changes.length; i++) {
                let documentId = changes[i].getDocumentId();
                changeIndex = this.indexOfObjectId(documentId, this.personList);
                if (changeIndex == -1) {
                    this.ngZone.run(()=> {
                        this.personList.push(document);
                    });
                } else {
                    this.ngZone.run(()=> {
                        this.personList[changeIndex] = document;
                    });

                }
            }
        });

        location.subscribe(path=> {
            this.refresh()
        });
        this.refresh();
    }

    public create() {
        this.router.navigate(["create"]);
    }

    private refresh() {
        this.personList = [];
        let rows = this.database.executeQuery("people");
        for (let i = 0; i < rows.length; i++) {
            this.personList.push(rows[i]);
        }
    }

    private indexOfObjectId(needle:string, haystack:any) {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] != undefined && haystack[i].hasOwnProperty("_id")) {
                if (haystack[i]._id == needle) {
                    return i;
                }
            }
        }
        return -1;
    }
}