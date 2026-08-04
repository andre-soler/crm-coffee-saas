import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosClientes } from './todos-clientes';

describe('TodosClientes', () => {
  let component: TodosClientes;
  let fixture: ComponentFixture<TodosClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
