/**
 * Created by: 
 * Date: 14/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component(
{
	selector: 'deptlist',
	templateUrl: 'deptlist.component.html'
})
export class DeptlistComponent implements OnInit
{
	
	
	_rootpane:any;
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		
	}
	ngOnInit()
	{
		
		this.onLoad_rootpane();
	}
	
	onLoad_rootpane(){ 
		this.successMsgData.push('data loaded successfully!');
		
		
	} 
	
}

