import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInitialPageComponent } from './template-initial-page.component';

describe('TemplateInitialPageComponent', () => {
  let component: TemplateInitialPageComponent;
  let fixture: ComponentFixture<TemplateInitialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateInitialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateInitialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
