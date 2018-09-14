import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';
import { DeptlistComponent } from './components/deptlist/deptlist.component';
import { ChartuioneComponent } from './components/chartuione/chartuione.component';
import { GetstatesComponent } from './components/getstates/getstates.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
import { DepartmentService } from './services/department.service';
import { ChartService } from './services/chart.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	  DepartmentComponent,
	  DeptlistComponent,
	  ChartuioneComponent,
	  GetstatesComponent,
	  CountrydetailsComponent,
	  ],
	  providers: [
	DepartmentService,
	ChartService,
	CountryService,
	StateService,
	  ]
})
export class CoreModule {
}
