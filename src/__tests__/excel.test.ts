import { validateHeaders } from '../services/excel.service';

describe('Excel validation', () => {
  it('should return false if headers are incorrect', () => {
    const headers = ['Nombre', 'Apellido'];

    const result = validateHeaders(headers);

    expect(result).toBe(false);
  });

  it('should return true if headers are correct', () => {
    const headers = [
      'Nombres estudiante',
      'Apellidos estudiante',
      'Primaria/secundaria',
      'Curso',
      'Fecha de nacimiento',
    ];

    const result = validateHeaders(headers);

    expect(result).toBe(true);
  });
});
