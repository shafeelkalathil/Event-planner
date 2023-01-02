import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecarationComponent } from './decaration.component';

describe('DecarationComponent', () => {
  let component: DecarationComponent;
  let fixture: ComponentFixture<DecarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
