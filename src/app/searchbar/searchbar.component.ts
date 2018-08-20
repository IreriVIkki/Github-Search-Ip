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
  public resultsA: Array<string>;
  public results: Array<string>;
  @Output()
  searchText: EventEmitter<String> = new EventEmitter<String>();

  getUser() {
    this.search = this.userSearch;
    this.searchText.emit(this.search);
    this._user.getUserSearchObject(this.search).subscribe(data => {
      this.results = [];
      this.searchUsers = data;
      for (let i = 0; i < 5; i++) {
        this.results.push(this.searchUsers.items[i].login);
      }
      // this.results = this.resultsA;
      console.log(this.results);
    });
    this._user.getReposSearchObject(this.search).subscribe(data => {
      this.searchRepos = data;
      console.log(this.searchRepos);
    });
  }

  ngOnInit() {}
}
