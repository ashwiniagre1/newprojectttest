/**
 * Created by: 
 * Date: 14/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { Countrystates } from './../../models/countrystates.model'
@Component(
{
	selector: 'getstates',
	templateUrl: 'getstates.component.html'
})
export class GetstatesComponent implements OnInit
{
	
	countrystates: Countrystates;
	
	state_Data:any;
	successMsgData:any[]=[];
	
	constructor(private stateService: StateService, private router: Router)
	{
		this.countrystates = new Countrystates();
		
		this.state_Data=[];
	}
	ngOnInit()
	{
		
	}
	
	onSingleSelect_country(eventData:any)
	{ 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData:any){
		let response: any;
		this.stateService.findbycountryid(this.countrystates.country).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.findbycountryidBindResponse_1(response);
		});
	}
	private findbycountryidBindResponse_1(response: any)
	{
		this.state_Data=response.response;
	}
	 
	
}

