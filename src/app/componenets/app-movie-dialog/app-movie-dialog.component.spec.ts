import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieDialogComponent } from './app-movie-dialog.component';

describe('AppMovieDialogComponent', () => {
  let component: AppMovieDialogComponent;
  let fixture: ComponentFixture<AppMovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMovieDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
