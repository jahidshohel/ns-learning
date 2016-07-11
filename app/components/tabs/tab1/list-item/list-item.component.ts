import {Component, Input} from "@angular/core";

@Component({
    selector: "list-item-component",
    templateUrl: "components/tabs/tab1/list-item/list-item.html",
    styleUrls: ["components/tabs/tab1/list-item/list-item-common.css", "components/tabs/tab1/list-item/list-item.css"],
})
export class ListItemComponent {
    @Input() item: any;
}