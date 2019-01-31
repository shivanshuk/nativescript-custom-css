"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var model_view_component_1 = require("./model-view/model-view.component");
var angular_1 = require("nativescript-grid-view/angular");
var enums_1 = require("ui/enums");
var platform_1 = require("platform");
var application = require("application");
var fs = require("file-system");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    function AppModule() {
        if (platform_1.device.deviceType === enums_1.DeviceType.Phone) {
            var cssFileName = fs.path.join(fs.knownFolders.currentApp().path, "app.ios.css");
            console.log("*******", cssFileName);
            fs.File.fromPath(cssFileName).readText().then(function (result) {
                application.addCss(result);
            });
        }
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                angular_1.GridViewModule
            ],
            declarations: [
                app_component_1.AppComponent,
                model_view_component_1.ModelViewComponent
            ],
            providers: [modal_dialog_1.ModalDialogService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
        ,
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msa0VBQXVFO0FBQ3ZFLDBFQUF1RTtBQUN2RSwwREFBZ0U7QUFDaEUsa0NBQXNDO0FBQ3RDLHFDQUFrQztBQUNsQyx5Q0FBMkM7QUFDM0MsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRWxDLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQXVCbkY7SUFFSTtRQUNJLElBQUksaUJBQU0sQ0FBQyxVQUFVLEtBQUssa0JBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBYztnQkFDekQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQVZRLFNBQVM7UUFyQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQix3QkFBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWix5Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxpQ0FBa0IsQ0FBQztZQUMvQixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFOzs7T0FDVyxTQUFTLENBV3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IE1vZGVsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtdmlldy9tb2RlbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkVmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ3JpZC12aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IERldmljZVR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEdyaWRWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNb2RlbFZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW01vZGFsRGlhbG9nU2VydmljZV0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gRGV2aWNlVHlwZS5QaG9uZSkge1xuICAgICAgICAgICAgbGV0IGNzc0ZpbGVOYW1lID0gZnMucGF0aC5qb2luKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkucGF0aCwgXCJhcHAuaW9zLmNzc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKlwiLGNzc0ZpbGVOYW1lKTtcbiAgICAgICAgICAgIGZzLkZpbGUuZnJvbVBhdGgoY3NzRmlsZU5hbWUpLnJlYWRUZXh0KCkudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=