import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCategoryComponent } from './movies-category.component';

describe('MoviesCategoryComponent', () => {
  let component: MoviesCategoryComponent;
  let fixture: ComponentFixture<MoviesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesCategoryComponent]
    });
    fixture = TestBed.createComponent(MoviesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
