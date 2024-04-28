import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLostPersonComponent } from './add-lost-person.component';

describe('AddLostPersonComponent', () => {
  let component: AddLostPersonComponent;
  let fixture: ComponentFixture<AddLostPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLostPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLostPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
