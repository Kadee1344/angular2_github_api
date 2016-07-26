import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ProfileComponent } from './shared/components/profile.component';
import { GithubService } from './shared/services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProfileComponent],
  providers: [GithubService, HTTP_PROVIDERS]
})
export class AppComponent {

}
