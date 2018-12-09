import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MspcpComponent } from './mspcp.component';

describe('MspcpComponent', () => {
  let component: MspcpComponent;
  let fixture: ComponentFixture<MspcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MspcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MspcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
