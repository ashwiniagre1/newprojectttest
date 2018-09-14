
import {Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { DeptlistComponent } from './components/deptlist/deptlist.component';
import { ChartuioneComponent } from './components/chartuione/chartuione.component';
import { GetstatesComponent } from './components/getstates/getstates.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
export const ROUTES: Routes = [
{
	    path: 'department', component: DepartmentComponent
},
{
	    path: 'deptlist', component: DeptlistComponent
},
{
	    path: 'chart-ui-one', component: ChartuioneComponent
},
{
	    path: 'getstates', component: GetstatesComponent
},
{
	    path: 'country-details', component: CountrydetailsComponent
},
];

