/**
 * 
 * Date: 14/09/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Chartrespons } from '../models/chartrespons.model';

@Injectable()
export class ChartService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	public getPiechart(): Observable<any> {
		return this.httpClient.get('https://api.myjson.com/bins/9ykpy/');
	}
	
	public getAreachart(): Observable<any> {
		return this.httpClient.get('https://api.myjson.com/bins/pi5hw/');
	}
	
	
}

