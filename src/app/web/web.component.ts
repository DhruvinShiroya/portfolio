import { Component } from "@angular/core";
import { ProjectCardData } from "../projectCardData";

@Component({
  selector: "app-web",
  templateUrl: "./web.component.html",
  styleUrls: ["./web.component.css"],
})
export class WebComponent {
  showDetail: boolean;
  selectedId: number;
  showDescription(show: boolean, id: number) {
    if (show) {
      this.showDetail = show;
      this.selectedId = id;
    } else {
      this.showDetail = show;
      this.selectedId = -1;
    }
  }

  projectCard = ProjectCardData;

  constructor() {
    this.selectedId = -1;
    this.showDetail = false;
  }
}
