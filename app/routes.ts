import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
import {HomePage} from "./components/home/home.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AuthGuard} from "./auth.guard";

export const Routes:RouterConfig = [
    {
        path: "",
        component: HomePage,
        canActivate: [AuthGuard]
    }, {
        path: "settings",
        component: SettingsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    AuthGuard,
    nsProvideRouter(Routes, {enableTracing: false})
];