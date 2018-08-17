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
  public userSearch: string;
  public ids: Array<number> = [];
  @Output()
  searchText: EventEmitter<String> = new EventEmitter<String>();

  getUser() {
    this.search = this.userSearch;
    // console.log(this.search);
    this.searchText.emit(this.search);
    // this._User.getUserSearchObject(this.search).subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    //   console.log(this.user.name);
    // });
  }

  ngOnInit() {}
}
