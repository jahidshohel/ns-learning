import {Component} from "@angular/core";

@Component({
    selector: "home-page",
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

    constructor() {
        this.selectedIndex = 0;
    }
}