import {Component} from "@angular/core";
import {Tab1Page} from "../tabs/tab1/tab1.component";
import {Tab2Page} from "../tabs/tab2/tab2.component";
import {Tab3Page} from "../tabs/tab3/tab3.component";
import {Router} from "@angular/router"

@Component({
    selector: "home-page",
    directives: [Tab1Page, Tab2Page, Tab3Page],
    templateUrl: "components/home/home.html",
    styleUrls: ["components/home/home-common.css", "components/home/home.css"]
})
export class HomePage {
    public selectedIndex:number;
    public items:Array<any> = [
        {title: "Strawberry"},
        {title: "Blueberry"},
        {title: "Raspberry"}
    ];

    constructor(private _router: Router) {
    }

    onSettingsTap() {
        console.log("On settings tapppp111");
        this._router.navigate(["/settings"]);
    }
}