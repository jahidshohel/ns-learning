import {Component} from "@angular/core";

@Component({
    selector: "tab2",
    templateUrl: "components/tabs/tab2/tab2.html",
    styleUrls: ["components/tabs/tab2/tab2-common.css", "components/tabs/tab2/tab2.css"],
})
export class Tab2Page {
    firstName:string="Jhon";
    lastName:string="Doe";

    insert(e:any){
        console.log("insertttt");
    }

    select(e:any){
        console.log("selecttt");
    }
}