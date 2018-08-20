import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { Repos } from "../repos";
import { NumbersDirective } from "../numbers.directive";

@Component({
  selector: "app-display-area",
  templateUrl: "./display-area.component.html",
  styleUrls: ["./display-area.component.css"]
})
export class DisplayAreaComponent implements OnInit {
  constructor(public _user: UserService) {}

  // declare gloabal variables
  public userDetailsObject;
  public userRepos: Array<object>;
  public userFollowers;
  public userFollowing;
  public searchText;
  public reposObj;
  public newRepos: Array<object>;
  public userReposUrl = "";
  public userFollowersUrl = "";

  ngOnInit() {
    this._user.getUserObject();
    this.userDetailsObject = this._user.user;
    this.userReposUrl = this.userDetailsObject.repos_url;
    this.userFollowersUrl = this.userDetailsObject.followers_url;
  }

  getRepositories(): any {
    this.userReposUrl = this.userDetailsObject.repos_url;
  }

  getFollowers(): any {
    this.userFollowersUrl = this.userDetailsObject.followers_url;
  }

  getSearchData(text: String) {
    this.searchText = text;
    this._user.getUserSearchObject(this.searchText).subscribe(data => {
      this.userDetailsObject = data.items[0];
      console.log(this.userDetailsObject);
    });
    this._user.getRepoObject(this.searchText).subscribe(data => {
      this.reposObj = data;
    });
  }

  getFollowing(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.following_url)
      .subscribe(data => {
        this.userFollowing = data;
      });
  }
}
