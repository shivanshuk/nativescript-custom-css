"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs = require("tns-core-modules/ui/dialogs");
var CustomAppDelegate = /** @class */ (function (_super) {
    __extends(CustomAppDelegate, _super);
    function CustomAppDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(private mockService: MockService,
    //     private routeExt: RouterExtensions,
    //     private self: UIView){super();}
    CustomAppDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
        console.log("applicationWillFinishLaunchingWithOptions: " + application.userActivity);
        return true;
    };
    CustomAppDelegate.prototype.applicationDidEnterBackground = function (application) {
        console.log("Enter background");
        this.timeBg = new Date().getTime();
    };
    CustomAppDelegate.prototype.applicationDidBecomeActive = function (application) {
        this.timeActive = new Date().getTime();
        var diff = (this.timeActive - this.timeBg) / 1000;
        console.log('~~~~~~~~~~ Difference ~~~~~~~~~~~~~~~~~~~~`:', diff.toFixed());
        if (parseInt(diff.toFixed()) > 10) {
            dialogs.alert("BOOM !! We kind did it").then(function () {
                console.log("Dialog closed!");
            });
        }
    };
    CustomAppDelegate.prototype.touchesBeganWithEvent = function (touches, event) {
        // Event to click anywhere !!
    };
    CustomAppDelegate.ObjCProtocols = [UIApplicationDelegate];
    return CustomAppDelegate;
}(UIResponder));
exports.CustomAppDelegate = CustomAppDelegate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tQXBwRGVsZWdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDdXN0b21BcHBEZWxlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF1RDtBQUl2RDtJQUF1QyxxQ0FBVztJQUFsRDs7SUE0REEsQ0FBQztJQW5ERyxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLHNDQUFzQztJQUUvQixvRUFBd0MsR0FBL0MsVUFDSSxXQUEwQixFQUMxQixhQUF3QztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVyRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0seURBQTZCLEdBQXBDLFVBQXFDLFdBQTBCO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNNLHNEQUEwQixHQUFqQyxVQUFrQyxXQUEwQjtRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBQyxJQUFJLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0saURBQXFCLEdBQTVCLFVBQTZCLE9BQXVCLEVBQUUsS0FBZTtRQUNuRSw2QkFBNkI7SUFDL0IsQ0FBQztJQXRDYSwrQkFBYSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQTJEMUQsd0JBQUM7Q0FBQSxBQTVERCxDQUF1QyxXQUFXLEdBNERqRDtBQTVEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSBcIi4vYXBwL21vZGVsLXZpZXcvbW9jay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXBwRGVsZWdhdGUgZXh0ZW5kcyBVSVJlc3BvbmRlciBpbXBsZW1lbnRzIFVJQXBwbGljYXRpb25EZWxlZ2F0ZSB7XG4gICAgcHVibGljIHN0YXRpYyBPYmpDUHJvdG9jb2xzID0gW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV07XG4gICAgLy8gcHVibGljIHN0YXRpYyBPYmpDRXhwb3NlZE1ldGhvZHMgPSB7XG4gICAgLy8gICAgIFwicnVuT25CYWNrZ3JvdW5kXCI6IHsgcmV0dXJuczogaW50ZXJvcC50eXBlcy52b2lkIH1cbiAgICAvLyB9O1xuXG4gICAgcHJpdmF0ZSB0aW1lQmc7XG4gICAgcHJpdmF0ZSB0aW1lQWN0aXZlO1xuXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBtb2NrU2VydmljZTogTW9ja1NlcnZpY2UsXG4gICAgLy8gICAgIHByaXZhdGUgcm91dGVFeHQ6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgLy8gICAgIHByaXZhdGUgc2VsZjogVUlWaWV3KXtzdXBlcigpO31cblxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkRpZEZpbmlzaExhdW5jaGluZ1dpdGhPcHRpb25zKFxuICAgICAgICBhcHBsaWNhdGlvbjogVUlBcHBsaWNhdGlvbiwgXG4gICAgICAgIGxhdW5jaE9wdGlvbnM6IE5TRGljdGlvbmFyeTxzdHJpbmcsIGFueT5cbiAgICAgICAgKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb25XaWxsRmluaXNoTGF1bmNoaW5nV2l0aE9wdGlvbnM6IFwiICsgYXBwbGljYXRpb24udXNlckFjdGl2aXR5KVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkRpZEVudGVyQmFja2dyb3VuZChhcHBsaWNhdGlvbjogVUlBcHBsaWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyIGJhY2tncm91bmRcIik7XG4gICAgICAgIHRoaXMudGltZUJnID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkRpZEJlY29tZUFjdGl2ZShhcHBsaWNhdGlvbjogVUlBcHBsaWNhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVBY3RpdmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSAodGhpcy50aW1lQWN0aXZlIC0gdGhpcy50aW1lQmcpLzEwMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCd+fn5+fn5+fn5+IERpZmZlcmVuY2Ugfn5+fn5+fn5+fn5+fn5+fn5+fn5gOicsZGlmZi50b0ZpeGVkKCkpO1xuICAgICAgICBpZiggcGFyc2VJbnQoZGlmZi50b0ZpeGVkKCkpID4gMTApIHtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJCT09NICEhIFdlIGtpbmQgZGlkIGl0XCIpLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvdWNoZXNCZWdhbldpdGhFdmVudCh0b3VjaGVzOiBOU1NldDxVSVRvdWNoPiwgZXZlbnQ6IF9VSUV2ZW50KSB7XG4gICAgICAvLyBFdmVudCB0byBjbGljayBhbnl3aGVyZSAhIVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgZW5kQmFja2dyb3VuZFRhc2soKTogdm9pZCB7XG4gICAgLy8gICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRpbWVyLmludmFsaWRhdGUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMudGltZXJDb3VudGVyID0gdGhpcy50aW1lcjtcbiAgICAvLyAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5lbmRCYWNrZ3JvdW5kVGFzayh0aGlzLmJnVGFzayk7XG4gICAgLy8gICAgIHRoaXMuYmdUYXNrID0gVUlCYWNrZ3JvdW5kVGFza0ludmFsaWQ7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRW5kIG9mIGJhY2tncm91bmQgdGFzay5cIik7XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIHJ1bk9uQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICAvLyAgICAgaWYgKHRoaXMudGltZXJDb3VudGVyIDw9IDApIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZW5kQmFja2dyb3VuZFRhc2soKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnRpbWVyQ291bnRlcn0gKHRoZSBhcHAgaXMgb24gYmFja2dyb3VuZClgKTtcbiAgICAvLyAgICAgdGhpcy50aW1lckNvdW50ZXItLTtcbiAgICAvLyB9XG59XG4iXX0=