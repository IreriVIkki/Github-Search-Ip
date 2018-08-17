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

  ngOnInit() {
    this._user.getUserObject().subscribe(data => {
      this.userDetailsObject = data;
      console.log(this.userDetailsObject.name);
      console.log(this.userDetailsObject);
    });
  }

  getRepositories(): any {
    this._user
      .getExtraApiData(this.userDetailsObject.repos_url)
      .subscribe(data => {
        this.userRepos = data;
        console.log(this.userRepos[0]);
      });
  }
}
