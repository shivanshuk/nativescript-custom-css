import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModelViewComponent } from './model-view/model-view.component';
import { GridViewModule } from "nativescript-grid-view/angular";
import { DeviceType } from "ui/enums";
import { device } from "platform";
import * as application from "application";
const fs = require("file-system");

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        GridViewModule
    ],
    declarations: [
        AppComponent,
        ModelViewComponent
    ],
    providers: [ModalDialogService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { 

    constructor() {
        if (device.deviceType === DeviceType.Phone) {
            let cssFileName = fs.path.join(fs.knownFolders.currentApp().path, "app.ios.css");
            console.log("*******",cssFileName);
            fs.File.fromPath(cssFileName).readText().then((result: string) => {
                application.addCss(result);
            });
        }
    }
}

