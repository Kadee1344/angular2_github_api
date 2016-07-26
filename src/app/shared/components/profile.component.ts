import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent{
user = [];
repos = [];
username = '';

  constructor(private _githubService: GithubService) {

  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
