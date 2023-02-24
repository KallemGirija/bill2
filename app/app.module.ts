import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemAdminWorkComponent } from './item-admin-work/item-admin-work.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { RestaurantAdminViewComponent } from './restaurant-admin-view/restaurant-admin-view.component';
import { RestaurantUserComponent } from './restaurant-user/restaurant-user.component';
import { RestaurantAdminWorkComponent } from './restaurant-admin-work/restaurant-admin-work.component';




const allLinks:Routes=[
  
  {path:'createbill',component:AdminWorkComponent},
  {path:'viewbill',component:UserComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    HeaderComponent,
    ItemAdminWorkComponent,
    ItemViewComponent,
    RestaurantAdminViewComponent,
    RestaurantUserComponent,
    RestaurantAdminWorkComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule,HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
