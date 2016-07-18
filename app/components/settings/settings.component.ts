import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "settings-component",
    templateUrl: "components/settings/settings.html",
    styleUrls: ["components/settings/settings-common.css", "components/settings/settings.css"]
})
export class SettingsComponent {
    //https://github.com/jlooper/practice-buddy-mobile-app-2.0/blob/master/app/components/settings-detail/settings-detail.component.ts
    instruments = [];

    constructor(private _router:Router) {
        this.instruments = ['acoustic guitar', 'banjo', 'cello',
            'clarinet', 'elecric guitar', 'flute', 'french horn',
            'handbells', 'harp', 'mandolin', 'music', 'oboe', 'organ', 'percussion', 'piano', 'sax',
            'trombone', 'trumpet', 'violin', 'voice', 'xylophone'];
    }

    onBackTap() {
        this._router.navigate([""]);
    }
}