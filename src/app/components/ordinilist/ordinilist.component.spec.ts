import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinilistComponent } from './ordinilist.component';

describe('OrdinilistComponent', () => {
  let component: OrdinilistComponent;
  let fixture: ComponentFixture<OrdinilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinilistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
