import * as dialogs from "tns-core-modules/ui/dialogs";
import { MockService } from "./app/model-view/mock.service";
import { RouterExtensions } from "nativescript-angular/router";

export class CustomAppDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];
    // public static ObjCExposedMethods = {
    //     "runOnBackground": { returns: interop.types.void }
    // };

    private timeBg;
    private timeActive;

    // constructor(private mockService: MockService,
    //     private routeExt: RouterExtensions,
    //     private self: UIView){super();}

    public applicationDidFinishLaunchingWithOptions(
        application: UIApplication, 
        launchOptions: NSDictionary<string, any>
        ): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + application.userActivity)

        return true;
    }

    public applicationDidEnterBackground(application: UIApplication) {
        console.log("Enter background");
        this.timeBg = new Date().getTime();
    }
    public applicationDidBecomeActive(application: UIApplication): void {
        this.timeActive = new Date().getTime();
        let diff = (this.timeActive - this.timeBg)/1000;
        console.log('~~~~~~~~~~ Difference ~~~~~~~~~~~~~~~~~~~~`:',diff.toFixed());
        if( parseInt(diff.toFixed()) > 10) {
            dialogs.alert("BOOM !! We kind did it").then(()=> {
                console.log("Dialog closed!");
            });
        }
    }

    public touchesBeganWithEvent(touches: NSSet<UITouch>, event: _UIEvent) {
      // Event to click anywhere !!
    }

    // private endBackgroundTask(): void {
    //     if (this.timer) {
    //         this.timer.invalidate();
    //         this.timer = null;
    //     }
    //     this.timerCounter = this.timer;
    //     UIApplication.sharedApplication.endBackgroundTask(this.bgTask);
    //     this.bgTask = UIBackgroundTaskInvalid;
    //     console.log("End of background task.");
    // }

    // public runOnBackground(): void {
    //     if (this.timerCounter <= 0) {
    //         this.endBackgroundTask();
    //         return;
    //     }
    //     console.log(`${this.timerCounter} (the app is on background)`);
    //     this.timerCounter--;
    // }
}
