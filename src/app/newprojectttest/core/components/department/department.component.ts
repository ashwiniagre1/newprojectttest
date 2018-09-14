/**
 * Created by: 
 * Date: 14/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from './../../models/department.model'
@Component(
{
	selector: 'department',
	templateUrl: 'department.component.html'
})
export class DepartmentComponent implements OnInit
{
	
	department: Department;
	
	successMsgData:any[]=[];
	
	constructor(private departmentService: DepartmentService, private router: Router)
	{
		this.department = new Department();
		
	}
	ngOnInit()
	{
	}
	
	onClick_btn(eventData:any)
	{ 
		this.save(eventData);
	}
	private save(eventData:any){
		let response: any;
		
		this.departmentService.save(this.department).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.saveBindResponse_1(response);
		});
	}
	private saveBindResponse_1(response: any)
	{
		this.router.navigate(['newprojectttest/core/deptlist']);
	}
	 
	
}

