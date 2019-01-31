import { Component, ViewContainerRef, Output, EventEmitter, OnInit } from "@angular/core";
import { DeviceType } from "ui/enums";
import { device, isAndroid, isIOS } from "platform";
import { Page } from "ui/page";

export class ReaderDetails {
    name: string;
    rating: string;
}

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {

    poulateScore: boolean = true;
    readerData: ReaderDetails = new ReaderDetails();

    constructor(private page: Page) {
        this.readerData.name = 'Alexander Hamilton';
        this.readerData.rating = '2';


    }

    submit() { }
}
