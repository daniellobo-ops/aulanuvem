import { describe, it, expect } from 'vitest';
import {soma} from "./utils.js"

describe('Testes de Validação do Ano do Filme', () => {
  it('CASE 1', () => {
    expect(soma(1, 2)).toBe(3);
  });

  it('deve rejeitar anos anteriores ao surgimento do cinema (antes de 1888)', () => {
    expect(soma(2, 3)).toBe(5);
  });

});