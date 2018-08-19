import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { UserService } from "../user.service";
import { Repos } from "../repos";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"]
})
export class ReposComponent implements OnInit, OnChanges {
  @Input()
  reposUrl;
  public userRepos;

  constructor(public _user: UserService) {}

  check() {
    console.log(this.reposUrl);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.reposUrl);
    this._user.getExtraApiData(this.reposUrl).subscribe(data => {
      this.userRepos = data;
    });
  }

  ngOnInit() {
    this._user.getExtraApiData(this.reposUrl).subscribe(data => {
      this.userRepos = data;
    });
    console.log(this.reposUrl);

    console.log(this.userRepos);
  }
}
