import {Component} from "@angular/core";
import {HomePage} from "./components/home/home.component";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES, ROUTER_DIRECTIVES],
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
}
