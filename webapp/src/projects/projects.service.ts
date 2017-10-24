import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Project } from './project.model'

@Injectable()
export class ProjectsService {
	constructor(private http: HttpClient) {}

	getProjects() {
		console.log('Getting projects!')
		return this.http.get('https://6moz6gxf6k.execute-api.us-east-1.amazonaws.com/prod/projects')
	}
}
