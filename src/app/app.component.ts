import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';
import {Project} from './project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects: Project[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.appService.getProjects().subscribe(data => this.projects = data);
  }
}
