import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantDto } from '../restaurant-dto';
import { RestaurantServiceOperationsService } from '../restaurant-service-operations.service';

@Component({
  selector: 'app-restaurant-admin-view',
  templateUrl: './restaurant-admin-view.component.html',
  styleUrls: ['./restaurant-admin-view.component.css']
})
export class RestaurantAdminViewComponent 
{
  __restaurantService:RestaurantServiceOperationsService;
  router:Router;

  allRestaurants:RestaurantDto[]=[];
 
  showStatus:boolean=false;

  constructor(restaurantService:RestaurantServiceOperationsService,router:Router){
    this.__restaurantService=restaurantService;
    this.router=router;
  }

  addItem()
  {
    
    this.router.navigate(['launchitems']);
  }
  

  viewAllRestaurants(){
    this.__restaurantService.getAllRestaurants().subscribe(
       data=>{
        console.log("data:-"+data);
        this.allRestaurants=data;
        
       },err=>{
        console.log("error from spring",err);
        
       }
    )
  }


}
