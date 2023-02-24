import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminWorkComponent } from './restaurant-admin-work.component';

describe('RestaurantAdminWorkComponent', () => {
  let component: RestaurantAdminWorkComponent;
  let fixture: ComponentFixture<RestaurantAdminWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAdminWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
