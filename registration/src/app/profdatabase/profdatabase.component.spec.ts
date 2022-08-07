import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfdatabaseComponent } from './profdatabase.component';

describe('ProfdatabaseComponent', () => {
  let component: ProfdatabaseComponent;
  let fixture: ComponentFixture<ProfdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfdatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
