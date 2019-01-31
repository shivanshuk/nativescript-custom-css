"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_idle_1 = require("nativescript-idle");
var platform_1 = require("platform");
var page_1 = require("tns-core-modules/ui/page/page");
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var ModelViewComponent = /** @class */ (function () {
    function ModelViewComponent(page) {
        this.page = page;
        //items = new ObservableArray();
        this.items = new Array({ score: 0 }, { score: 1 }, { score: 2 }, { score: 3 }, { score: 4 }, { score: 5 }, { score: 6 });
    }
    ModelViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        nativescript_idle_1.requestIdleFrame(function () {
            var msg = "preloading ";
            console.log(msg);
            var start = Date.now();
            // Task taking ~40ms.
            //load();
            //this.loadedPaths.push(route.path);
            var end = Date.now();
            console.log(msg + " in " + (end - start));
            if (platform_1.isIOS) {
                console.log("*******************************", _this.page);
                //this.page.className = "ios";
                _this.page.addCssFile("~/app.ios.css");
            }
        });
    };
    ModelViewComponent.prototype.selectScore = function (i, score) {
        this.selectedIndex = i;
        console.log('Selected Score:', score);
    };
    ModelViewComponent = __decorate([
        core_1.Component({
            selector: 'ns-model-view',
            templateUrl: './model-view.component.html',
            styleUrls: ['./model-view.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ModelViewComponent);
    return ModelViewComponent;
}());
exports.ModelViewComponent = ModelViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCx1REFBcUQ7QUFFckQscUNBQW9EO0FBQ3BELHNEQUFxRDtBQUNyRDtJQUFBO0lBRUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLG9CQUFJO0FBV2pCO0lBZUksNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBYjlCLGdDQUFnQztRQUN4QixVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNaLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUNmLENBQUM7SUFJZ0MsQ0FBQztJQUduQyxxQ0FBUSxHQUFSO1FBQUEsaUJBd0JDO1FBdkJHLG9DQUFnQixDQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLHFCQUFxQjtZQUNyQixTQUFTO1lBQ1Qsb0NBQW9DO1lBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUsxQyxJQUFJLGdCQUFLLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELDhCQUE4QjtnQkFFOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7YUFFekM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSx3Q0FBVyxHQUFsQixVQUFtQixDQUFNLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUEvQ1Esa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQWdCNEIsV0FBSTtPQWZyQixrQkFBa0IsQ0FpRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlcXVlc3RJZGxlRnJhbWUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWlkbGVcIjtcbmltcG9ydCB7IERldmljZVR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IGRldmljZSwgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgICBzY29yZTogbnVtYmVyO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtbW9kZWwtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGVsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGVsLXZpZXcuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGVsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvL2l0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgICAgIHsgc2NvcmU6IDAgfSxcbiAgICAgICAgeyBzY29yZTogMSB9LFxuICAgICAgICB7IHNjb3JlOiAyIH0sXG4gICAgICAgIHsgc2NvcmU6IDMgfSxcbiAgICAgICAgeyBzY29yZTogNCB9LFxuICAgICAgICB7IHNjb3JlOiA1IH0sXG4gICAgICAgIHsgc2NvcmU6IDYgfVxuICAgICk7XG5cbiAgICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgcmVxdWVzdElkbGVGcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbXNnID0gXCJwcmVsb2FkaW5nIFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAvLyBUYXNrIHRha2luZyB+NDBtcy5cbiAgICAgICAgICAgIC8vbG9hZCgpO1xuICAgICAgICAgICAgLy90aGlzLmxvYWRlZFBhdGhzLnB1c2gocm91dGUucGF0aCk7XG4gICAgICAgICAgICBsZXQgZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyArIFwiIGluIFwiICsgKGVuZCAtIHN0YXJ0KSk7XG5cblxuXG5cbiAgICAgICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiLCB0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wYWdlLmNsYXNzTmFtZSA9IFwiaW9zXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFkZENzc0ZpbGUoXCJ+L2FwcC5pb3MuY3NzXCIpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0U2NvcmUoaTogYW55LCBzY29yZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBTY29yZTonLCBzY29yZSlcbiAgICB9XG5cbn1cbiJdfQ==