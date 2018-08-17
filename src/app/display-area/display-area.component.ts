import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-display-area",
  templateUrl: "./display-area.component.html",
  styleUrls: ["./display-area.component.css"]
})
export class DisplayAreaComponent implements OnInit {
  constructor(public _user: UserService) {}

  // declare gloabal variables
  public userDetailsObject;
  public userSearchObject;
  public userRepos: Array<object>;
  public userFollowers;
  public userFollowing;
  public searchString;
  public searchText;
  // public clearObj: = new Object();

  ngOnInit() {
    this._user.getUserObject().subscribe(data => {
      this.userDetailsObject = data;
      // console.log(this.userDetailsObject.name);
      // console.log(this.userDetailsObject);
    });
  }

  getSearchData(text: String) {
    this.searchText = text;
    console.log(this.searchText);
    this._user.getUserSearchObject(this.searchText).subscribe(data => {
      this.userDetailsObject = data;
      console.log(this.userSearchObject.name);
      // console.log(this.user.name);
    });
  }

  getRepositories(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.repos_url)
      .subscribe(data => {
        this.userRepos = data;
      });
  }

  getFollowers(): any {
    this.userRepos = 
    this._user
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
