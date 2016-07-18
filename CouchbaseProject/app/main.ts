// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {RouterConfig} from "@angular/router";
import {CouchbaseInstance} from "./couchbaseinstance";
import {nsProvideRouter} from "nativescript-angular/router";

import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";

export const AppRoutes:RouterConfig = [
    {path: "", component: ListComponent},
    {path: "create", component: CreateComponent}
];

nativeScriptBootstrap(AppComponent, [CouchbaseInstance, [nsProvideRouter(AppRoutes, {})]]);