import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {CouchbaseInstance} from "./couchbaseinstance";

@Component({
    selector: "my-app",
    template: "<page-router-url></page-router-url>",
    directives: [NS_ROUTER_DIRECTIVES]
})
export class AppComponent {

    public constructor(couchbaseInstance: CouchbaseInstance) {
        couchbaseInstance.init();
    }
}
