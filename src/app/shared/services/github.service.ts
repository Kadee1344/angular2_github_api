import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GithubService {
  private username;

  constructor(private _http:Http) {
  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  updateUser(username) {
    this.username = username;
  }

}
