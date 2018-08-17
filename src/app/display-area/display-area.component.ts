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
  public userRepos: Array<object>;
  public userFollowers;
  public userFollowing;

  ngOnInit() {
    this._user.getUserObject().subscribe(data => {
      this.userDetailsObject = data;
      // console.log(this.userDetailsObject.name);
      // console.log(this.userDetailsObject);
    });
  }

  getRepositories(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.repos_url)
      .subscribe(data => {
        this.userRepos = data;
        // console.log(this.userRepos[0]);
      });
  }

  getFollowers(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.followers_url)
      .subscribe(data => {
        this.userFollowers = data;
        // console.log(this.userFollowers);
      });
  }
  getFollowing(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.following_url)
      .subscribe(data => {
        this.userFollowing = data;
        console.log(this.userFollowing);
      });
  }
}
