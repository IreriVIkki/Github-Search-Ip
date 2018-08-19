import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { Repos } from "../repos";

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
  // public clearObj: = new Object();

  ngOnInit() {
    this._user.getUserObject();
    this.userDetailsObject = this._user.user;
    this.userReposUrl = this.userDetailsObject.repos_url;
  }

  getRepositories(): any {
    console.log(this.userDetailsObject.repos_url);
    this.userReposUrl = this.userDetailsObject.repos_url;
    // this._user
    //   .getExtraApiData(this.userDetailsObject.repos_url)
    //   .subscribe(data => {
    //     this.userRepos = data;
    //   });
  }

  getSearchData(text: String) {
    this.searchText = text;
    // console.log(this.searchText);
    this._user.getUserSearchObject(this.searchText).subscribe(data => {
      this.userDetailsObject = data;
    });
    this._user.getRepoObject(this.searchText).subscribe(data => {
      this.reposObj = data;
      // console.log(this.reposObj);
    });
  }

  getFollowers(): any {
    this.userRepos = this._user
      .getExtraApiData(this.userDetailsObject.followers_url)
      .subscribe(data => {
        this.userFollowers = data;
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
