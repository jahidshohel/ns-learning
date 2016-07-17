import {Component, ElementRef, ViewChild} from "@angular/core";
import {TextField} from "ui/text-field";

@Component({
    selector: "tab2",
    templateUrl: "components/tabs/tab2/tab2.html",
    styleUrls: ["components/tabs/tab2/tab2-common.css", "components/tabs/tab2/tab2.css"],
})
export class Tab2Page {
    firstName:string = "Jhon";
    lastName:string = "Doe";

    @ViewChild("firstNameTextField")
    firstNameTextField:ElementRef;

    constructor() {
    }

    insert(e:any) {
        let fnTextField = <TextField>this.firstNameTextField.nativeElement;
        fnTextField.focus();
        //fnTextField.dismissSoftInput();
        console.log("insertttt");
    }

    select(e:any) {
        console.log("selecttt");
    }
}