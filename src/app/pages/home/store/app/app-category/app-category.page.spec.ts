import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryPage } from './app-category.page';

describe('AppCategoryPage', () => {
  let component: AppCategoryPage;
  let fixture: ComponentFixture<AppCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
