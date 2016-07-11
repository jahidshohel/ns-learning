import {Component} from "@angular/core";
import {ListItemComponent} from "./list-item/list-item.component";

@Component({
    selector: "tab1",
    directives: [ListItemComponent],
    templateUrl: "components/tabs/tab1/tab1.html",
    styleUrls: ["components/tabs/tab1/tab1-common.css", "components/tabs/tab1/tab1.css"],
})
export class Tab1Page {
    public items:Array<any> = [
        {title: "Bat Man"},
        {title: "Super Man"},
        {title: "Iron Man"}
    ];

    onBooTap(e:any, item:any){
        console.log("Item boooooooo: ", JSON.stringify(item));
    }
}