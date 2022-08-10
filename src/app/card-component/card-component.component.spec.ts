import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentComponent } from './card-component.component';

describe('CardComponentComponent', () => {
  let component: CardComponentComponent;

  let fixture: ComponentFixture<CardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponentComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 @input data such as buyingType, manufacturerName, dataType, incomeData', () => {
    expect(component.buyingType).toEqual('');

    expect(component.manufacturerName).toEqual('');

    expect(component.dataType).toEqual('');

    expect(component.incomeData).toEqual({});
  });
});
