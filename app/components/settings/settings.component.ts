import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "settings-component",
    templateUrl: "components/settings/settings.html",
    styleUrls: ["components/settings/settings-common.css", "components/settings/settings.css"]
})
export class SettingsComponent {

    constructor(private _router: Router){}
    onBackTap(){
        this._router.navigate([""]);
    }
}