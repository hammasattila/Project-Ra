import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLogComponent } from './quick-log.component';

describe('QuickLogComponent', () => {
  let component: QuickLogComponent;
  let fixture: ComponentFixture<QuickLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
