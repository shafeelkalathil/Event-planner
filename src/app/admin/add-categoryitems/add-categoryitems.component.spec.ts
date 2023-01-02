import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryitemsComponent } from './add-categoryitems.component';

describe('AddCategoryitemsComponent', () => {
  let component: AddCategoryitemsComponent;
  let fixture: ComponentFixture<AddCategoryitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
