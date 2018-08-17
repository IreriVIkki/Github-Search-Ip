import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public userDetailsObj;

  constructor(public _user: UserService) {}

  ngOnInit() {
    this._user.getUserObject().subscribe(data => {
      this.userDetailsObj = data;
      // console.log(this.userDetailsObject.name);
      // console.log(this.userDetailsObject);
    });
  }
}
