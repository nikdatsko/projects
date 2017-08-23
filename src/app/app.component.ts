import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {AppService} from './app.service';
import {Project} from './project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  projects: Project[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getProjects().subscribe(data => this.projects = data);
  }

  onImgLoad(item: Project) {
    item.loaded = true;
  }

  onImgError(item: Project) {
    item.fail = true;
  }
}
