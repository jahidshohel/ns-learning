import {Component} from "@angular/core";
import {HomePage} from "./components/home/home.component";


@Component({
    selector: "main",
    directives: [HomePage],
    template: "<home-page></home-page>"
})
export class AppComponent {
}
