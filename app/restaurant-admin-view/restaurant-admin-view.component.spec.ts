import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminViewComponent } from './restaurant-admin-view.component';

describe('RestaurantAdminViewComponent', () => {
  let component: RestaurantAdminViewComponent;
  let fixture: ComponentFixture<RestaurantAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
