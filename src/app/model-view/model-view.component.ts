import { Component, OnInit, Input } from '@angular/core';
import { requestIdleFrame } from "nativescript-idle";
import { DeviceType } from "ui/enums";
import { device, isAndroid, isIOS } from "platform";
import { Page } from 'tns-core-modules/ui/page/page';
export class Item {
    score: number;
}


@Component({
    selector: 'ns-model-view',
    templateUrl: './model-view.component.html',
    styleUrls: ['./model-view.component.css'],
    moduleId: module.id,
})
export class ModelViewComponent implements OnInit {

    //items = new ObservableArray();
    private items = new Array<Item>(
        { score: 0 },
        { score: 1 },
        { score: 2 },
        { score: 3 },
        { score: 4 },
        { score: 5 },
        { score: 6 }
    );

    selectedIndex: number;

    constructor(private page: Page) { }


    ngOnInit() {
        requestIdleFrame(() => {
            let msg = "preloading ";
            console.log(msg);
            let start = Date.now();
            // Task taking ~40ms.
            //load();
            //this.loadedPaths.push(route.path);
            let end = Date.now();
            console.log(msg + " in " + (end - start));




            if (isIOS) {
                console.log("*******************************", this.page);
                //this.page.className = "ios";
                
                this.page.addCssFile("~/app.ios.css");

            }

        });

    }

    public selectScore(i: any, score: number): void {
        this.selectedIndex = i;
        console.log('Selected Score:', score)
    }

}
