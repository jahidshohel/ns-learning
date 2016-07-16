import {Component} from "@angular/core";
import {HomePage} from "./components/home/home.component";
import {CouchbaseInstance} from "./components/db/couchbase-instance";


@Component({
    selector: "main",
    directives: [HomePage],
    template: "<home-page></home-page>"
})
export class AppComponent {

    constructor(couchbaseInstance: CouchbaseInstance) {
        couchbaseInstance.init();
    }
}
