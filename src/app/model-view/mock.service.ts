import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class MockService {

    constructor(private routeExt: RouterExtensions){}

    exitApp() {
        this.routeExt.navigate(['/login'])
    }
}
