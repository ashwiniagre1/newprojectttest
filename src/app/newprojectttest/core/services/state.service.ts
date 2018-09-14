/**
 * 
 * Date: 14/09/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Responsbean } from '../models/responsbean.model';

@Injectable()
export class StateService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	public findbycountryid(id: String): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid/'+id);
	}
	
	
}

