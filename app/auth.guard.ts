import {Injectable} from "@angular/core";
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router) {
    }

    canActivate() {
        return true;
        //if (Config.hasActiveToken()) {
        //    return true;
        //}
        //else {
        //    this.router.navigate(['login']);
        //    return false;
        //}
    }
}