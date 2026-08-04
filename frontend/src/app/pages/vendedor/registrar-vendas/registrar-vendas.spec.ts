import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVendas } from './registrar-vendas';

describe('RegistrarVendas', () => {
  let component: RegistrarVendas;
  let fixture: ComponentFixture<RegistrarVendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarVendas],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarVendas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
