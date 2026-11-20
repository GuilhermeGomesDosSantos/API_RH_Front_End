import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColaboradorlistComponent } from './colaboradorlist.component';

describe('ColaboradorlistComponent', () => {
  let component: ColaboradorlistComponent;
  let fixture: ComponentFixture<ColaboradorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradorlistComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
