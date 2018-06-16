import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineItemComponent } from './offline-item.component';

describe('OfflineItemComponent', () => {
  let component: OfflineItemComponent;
  let fixture: ComponentFixture<OfflineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
