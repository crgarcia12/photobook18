import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesViewerComponent } from './pictures-viewer.component';

describe('PicturesViewerComponent', () => {
  let component: PicturesViewerComponent;
  let fixture: ComponentFixture<PicturesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
