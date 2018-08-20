import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { Key } from "protractor";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  constructor(public _user: UserService) {}

  public search: string = "";
  public userSearch: string;
  public searchUsers;
  public searchRepos;
  @Output()
  searchText: EventEmitter<String> = new EventEmitter<String>();

  getUser() {
    this.search = this.userSearch;
    this.searchText.emit(this.search);
    this._user.getUserSearchObject(this.search).subscribe(data => {
      this.searchUsers = data;
      // console.log(this.searchUsers.items[0].login);
      // console.log(this.searchUsers.items[1].login);
      // console.log(this.searchUsers.items[2].login);
      // console.log(this.searchUsers.items[3].login);
      // console.log(this.searchUsers.items[4].login);
    });
    this._user.getReposSearchObject(this.search).subscribe(data => {
      this.searchRepos = data;
      console.log(this.searchRepos);
    });
  }

  ngOnInit() {}
}
