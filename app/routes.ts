import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
import {HomePage} from "./components/home/home.component"
import {AuthGuard} from "./auth.guard";

export const Routes:RouterConfig = [
    {path: "", component: HomePage, canActivate: [AuthGuard]},
];

export const APP_ROUTER_PROVIDERS = [
    AuthGuard,
    nsProvideRouter(Routes, {enableTracing:false})
];