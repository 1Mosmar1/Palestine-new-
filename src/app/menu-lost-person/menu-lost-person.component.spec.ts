import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLostPersonComponent } from './menu-lost-person.component';

describe('MenuLostPersonComponent', () => {
  let component: MenuLostPersonComponent;
  let fixture: ComponentFixture<MenuLostPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLostPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLostPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
