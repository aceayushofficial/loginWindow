import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRegisterPageComponent } from './navbar-register-page.component';

describe('NavbarRegisterPageComponent', () => {
  let component: NavbarRegisterPageComponent;
  let fixture: ComponentFixture<NavbarRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarRegisterPageComponent]
    });
    fixture = TestBed.createComponent(NavbarRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
