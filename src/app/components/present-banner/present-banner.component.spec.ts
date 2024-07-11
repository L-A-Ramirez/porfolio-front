import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentBannerComponent } from './present-banner.component';

describe('PresentBannerComponent', () => {
  let component: PresentBannerComponent;
  let fixture: ComponentFixture<PresentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
