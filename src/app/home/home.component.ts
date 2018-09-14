import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Department","routerLink":"newprojectttest/core/department","selected":false},{"text":"DeptList","routerLink":"newprojectttest/core/deptlist","selected":false},{"text":"Chart ui one","routerLink":"newprojectttest/core/chart-ui-one","selected":false},{"text":"GetStates","routerLink":"newprojectttest/core/getstates","selected":false},{"text":"Country details","routerLink":"newprojectttest/core/country-details","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
