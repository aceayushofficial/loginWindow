import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoginPageComponent } from './navbar-login-page.component';

describe('NavbarLoginPageComponent', () => {
  let component: NavbarLoginPageComponent;
  let fixture: ComponentFixture<NavbarLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLoginPageComponent]
    });
    fixture = TestBed.createComponent(NavbarLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
