import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PubpostComponent } from './pubpost.component';

describe('PubpostComponent', () => {
  let component: PubpostComponent;
  let fixture: ComponentFixture<PubpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubpostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PubpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
