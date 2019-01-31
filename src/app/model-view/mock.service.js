"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MockService = /** @class */ (function () {
    function MockService(routeExt) {
        this.routeExt = routeExt;
    }
    MockService.prototype.exitApp = function () {
        this.routeExt.navigate(['/login']);
    };
    MockService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MockService);
    return MockService;
}());
exports.MockService = MockService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNEQUErRDtBQUcvRDtJQUVJLHFCQUFvQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFFLENBQUM7SUFFakQsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBTlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdxQix5QkFBZ0I7T0FGckMsV0FBVyxDQU92QjtJQUFELGtCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlRXh0OiBSb3V0ZXJFeHRlbnNpb25zKXt9XG5cbiAgICBleGl0QXBwKCkge1xuICAgICAgICB0aGlzLnJvdXRlRXh0Lm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgfVxufVxuIl19