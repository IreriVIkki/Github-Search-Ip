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

  ngOnChanges(changes: SimpleChanges) {
    this._user.getExtraApiData(this.reposUrl).subscribe(data => {
      this.userRepos = data;
    });
  }

  ngOnInit() {
    this._user.getExtraApiData(this.reposUrl).subscribe(data => {
      this.userRepos = data;
    });
  }
}
