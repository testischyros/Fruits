import { Component, OnInit } from "@angular/core";

import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: "app.html",
  styleUrls: ["app.scss"]
})
export class MyApp implements OnInit {
  // Data dummy
  fruits = [
    { id: 1, name: "Strawberry", status: "red" },
    { id: 2, name: "Aple", status: "red" },
    { id: 3, name: "Tomato", status: "red" },
    { id: 4, name: "Banana", status: "yellow" },
    { id: 5, name: "Starfruit", status: "yellow" },
    { id: 6, name: "Lemon", status: "yellow" },
    { id: 7, name: "Blueberries", status: "blue" },
    { id: 8, name: "Blackberries", status: "blue" },
    { id: 9, name: "Elderberries", status: "blue" }
  ];

  // Array
  redList: any[] = [];
  yellowList: any[] = [];
  blueList: any[] = [];

  // data
  fruit: any[] = [];

  // rank
  demotionList: any[] = [];
  promotionList: any[] = [];

  // agent
  agentDemotion: any;
  agentPromotion: any;

  constructor() {}

  ngOnInit() {
    this.getRed();
    this.getYellow();
    this.getBlue();
  }

  getRed() {
    this.redList = this.fruits.filter(item => item.status === "red");
  }

  getYellow() {
    this.yellowList = this.fruits.filter(item => item.status === "yellow");
  }

  getBlue() {
    this.blueList = this.fruits.filter(item => item.status === "blue");
  }
}
