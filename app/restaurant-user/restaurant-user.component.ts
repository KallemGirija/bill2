import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantDto } from '../restaurant-dto';
import { RestaurantServiceOperationsService } from '../restaurant-service-operations.service';


@Component({
  selector: 'app-restaurant-user',
  templateUrl: './restaurant-user.component.html',
  styleUrls: ['./restaurant-user.component.css']
})
export class RestaurantUserComponent 
{
  __restaurantService:RestaurantServiceOperationsService;
  router:Router;

  allRestaurants:RestaurantDto[]=[];
 
 

  constructor(restaurantService:RestaurantServiceOperationsService,router:Router){
    this.__restaurantService=restaurantService;
   
    this.router=router;
  }

  viewDetailsofItems()
  {
    
    this.router.navigate(['viewItems']);
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

  viewAllRestuarantsByCity(city:string){
    this.__restaurantService.getAllRestaurantsByCity(city).subscribe(
      data=>{
       console.log("data:-"+data);
       this.allRestaurants=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )

  }
  
  viewAllRestuarantsByState(state:string){
    this.__restaurantService.getAllRestaurantsByState(state).subscribe(
      data=>{
       console.log("data:-"+data);
       this.allRestaurants=data;
       
      },err=>{
       console.log("error from spring",err);
       
      }
   )

  }

 

}
