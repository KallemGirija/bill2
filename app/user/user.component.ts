import { Component } from '@angular/core';
import { Bill } from '../bill';
import { BillingOperationsService } from '../billing-operations.service';
import { Router } from '@angular/router';
import { BillDTO } from '../bill-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent 
{

  __billService:BillingOperationsService;
  router:Router;

  allBills:Array<Bill>=[];
  bills:BillDTO[]=[];
  
  
  constructor(billService:BillingOperationsService,router:Router){
    this.__billService=billService;
    this.allBills=this.__billService.getBillArr();
    this.router=router;
  }

  viewAllBills(){
    this.__billService.getAllBills().subscribe(
      data=>{
        console.log("data:-"+data);
        this.bills=data;
      },err=>{
        console.log("error from spring",err);
      }
    )
}
}
