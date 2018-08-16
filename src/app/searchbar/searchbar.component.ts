import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Key } from "protractor";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  constructor(public _User: UserService) {}

  public user;

  public search: string;
  public userSearch: string;
  public ids: Array<number> = [];

  getUser() {
    this.search = this.userSearch;
    console.log(event);
    this.user = this._User.getUserObject(this.search).subscribe(data => {
      this.user = data;
      console.log(this.user.name);
      console.log(this.ids);
    });
  }

  ngOnInit() {}
}
