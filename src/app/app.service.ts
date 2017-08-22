import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Project} from "./project.model";

@Injectable()
export class AppService {


  constructor(private http: Http) {
  }

  getProjects(): Observable<Project[]> {
    return this.http
      .get('/assets/data/projects.json')
      .map((res: Response) => res.json());
  }

}
