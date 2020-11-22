import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //========================
  //data model section
  //========================
  myNumber;
  myObj;

  //========================
  //page event model section
  //========================
  ngOnInit() {
    this.testMapNumberArray();
    this.testMapObj();
  }

  //========================
  // function section
  //========================
  testMapObj(): void {
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

  myMap = n => n * 3;
  myMapWithIndex = (v, i) => v * i;
  myFiler = n => n > 1;
  testMapNumberArray(): void {
    let myAr = [1, 2, 3, 4, 5, 6];

    let myAr1 = myAr.filter(this.myFiler).map(this.myMapWithIndex);
    let myAr2 = myAr.map(this.myMapWithIndex);
    this.myNumber = myAr1;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
