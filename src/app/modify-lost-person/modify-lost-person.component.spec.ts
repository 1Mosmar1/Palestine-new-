import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLostPersonComponent } from './modify-lost-person.component';

describe('ModifyLostPersonComponent', () => {
  let component: ModifyLostPersonComponent;
  let fixture: ComponentFixture<ModifyLostPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyLostPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyLostPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
