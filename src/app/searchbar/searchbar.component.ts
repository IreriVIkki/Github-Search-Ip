import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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
  public Search: string;
  public ids: Array<number> = [];
  @Output()
  userSearch: EventEmitter<any> = new EventEmitter<any>();

  getUser() {
    this.search = this.Search;
    // console.log(event);
    console.log(this.user);
    this._User.getUserSearchObject(this.search).subscribe(data => {
      this.user = data;
      this.userSearch.emit(data);
      console.log(this.user.name);
    });
  }

  ngOnInit() {}
}
