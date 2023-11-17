import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosComponent } from './listarProdutos.component';

describe('ListarprodutosComponent', () => {
  let component: ListarProdutosComponent;
  let fixture: ComponentFixture<ListarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
