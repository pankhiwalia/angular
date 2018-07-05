import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobPartsComponent } from './mob-parts.component';

describe('MobPartsComponent', () => {
  let component: MobPartsComponent;
  let fixture: ComponentFixture<MobPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
