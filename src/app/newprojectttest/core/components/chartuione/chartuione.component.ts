/**
 * Created by: 
 * Date: 14/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from '../../services/chart.service';
@Component(
{
	selector: 'chartuione',
	templateUrl: 'chartuione.component.html'
})
export class ChartuioneComponent implements OnInit
{
	
	
	_rootpane:any;
	areachartLocalData:any;
	barchartLocalData:any;
	piechartLocalData:any;
	donutchartLocalData:any;
	successMsgData:any[]=[];
	
	constructor(private chartService: ChartService, private router: Router)
	{
		
	}
	ngOnInit()
	{
		
		this.onLoad_rootpane();
		
		
		
		
	}
	
	onLoad_rootpane(){ 
		this.getAreachart();
		this.getPiechart();
	}
	private getAreachart(){
		let response: any;
		this.chartService.getAreachart().subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.getAreachartBindResponse_1(response);
		});
	}
	private getAreachartBindResponse_1(response: any)
	{
		this.areachartLocalData=response.data;
		this.barchartLocalData=response.data;
	}
	
	private getPiechart(){
		let response: any;
		this.chartService.getPiechart().subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.getPiechartBindResponse_1(response);
		});
	}
	private getPiechartBindResponse_1(response: any)
	{
		this.piechartLocalData=response.data;
		this.donutchartLocalData=response.data;
	}
	 
	
}

