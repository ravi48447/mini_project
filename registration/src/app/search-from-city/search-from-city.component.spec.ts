import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFromCityComponent } from './search-from-city.component';

describe('SarchFromCityComponent', () => {
  let component: SearchFromCityComponent;
  let fixture: ComponentFixture<SearchFromCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFromCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFromCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
