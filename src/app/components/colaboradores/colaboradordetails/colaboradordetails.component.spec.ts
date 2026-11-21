import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColaboradordetailsComponent } from './colaboradordetails.component';

describe('ColaboradordetailsComponent', () => {
  let component: ColaboradordetailsComponent;
  let fixture: ComponentFixture<ColaboradordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradordetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradordetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
