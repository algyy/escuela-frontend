import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDetailComponent } from './inscripcion-detail.component';

describe('InscripcionDetailComponent', () => {
  let component: InscripcionDetailComponent;
  let fixture: ComponentFixture<InscripcionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
