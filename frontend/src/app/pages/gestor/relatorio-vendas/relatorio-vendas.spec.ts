import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioVendas } from './relatorio-vendas';

describe('RelatorioVendas', () => {
  let component: RelatorioVendas;
  let fixture: ComponentFixture<RelatorioVendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioVendas],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioVendas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
