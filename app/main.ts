// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router";
import {Routes, APP_ROUTER_PROVIDERS} from "./routes";
import {AuthGuard} from "./auth.guard";

nativeScriptBootstrap(AppComponent,
    [
        nsProvideRouter(Routes, {enableTracing: true}),
        AuthGuard
    ],
    {startPageActionBarHidden: false}
);