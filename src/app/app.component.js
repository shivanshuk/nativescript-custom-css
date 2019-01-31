"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var ReaderDetails = /** @class */ (function () {
    function ReaderDetails() {
    }
    return ReaderDetails;
}());
exports.ReaderDetails = ReaderDetails;
var AppComponent = /** @class */ (function () {
    function AppComponent(page) {
        this.page = page;
        this.poulateScore = true;
        this.readerData = new ReaderDetails();
        this.readerData.name = 'Alexander Hamilton';
        this.readerData.rating = '2';
    }
    AppComponent.prototype.submit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEY7QUFHMUYsZ0NBQStCO0FBRS9CO0lBQUE7SUFHQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNDQUFhO0FBVTFCO0lBS0ksc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDlCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVUsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUc1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFHakMsQ0FBQztJQUVELDZCQUFNLEdBQU4sY0FBVyxDQUFDO0lBWkgsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FNNEIsV0FBSTtPQUxyQixZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZXZpY2VUeXBlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBkZXZpY2UsIGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5leHBvcnQgY2xhc3MgUmVhZGVyRGV0YWlscyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJhdGluZzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwb3VsYXRlU2NvcmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHJlYWRlckRhdGE6IFJlYWRlckRldGFpbHMgPSBuZXcgUmVhZGVyRGV0YWlscygpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucmVhZGVyRGF0YS5uYW1lID0gJ0FsZXhhbmRlciBIYW1pbHRvbic7XG4gICAgICAgIHRoaXMucmVhZGVyRGF0YS5yYXRpbmcgPSAnMic7XG5cblxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHsgfVxufVxuIl19