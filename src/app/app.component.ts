import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myNumber;
  myObj;

  ngOnInit() {
    let myAr = [1, 2, 3, 4, 5];

    let myAr1 = myAr.filter(this.myFiler).map(this.myMapWithIndex);
    let myAr2 = myAr.map(this.myMapWithIndex);
    this.myNumber = myAr1;

    this.setObj();
  }

  myMap = n => n * 3;
  myFiler = n => n > 1;

  myMapWithIndex = (v, i) => v * i;

  setObj(): void {
    let tempObj = {
      v1: "aaa",
      v2: "bbb"
    };

    tempObj.v1 = "hhh";
    //this.myObj = { ...tempObj, v2: "ccc" };

    Object.entries(tempObj).map(([k, v]) => {
      v = v + " -- ttt";
      console.log(v);
      return v;
    });

    this.myObj = { ...tempObj, v2: "ccc" };
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
