import { validateTeacher } from '../services/teacher.service';

describe('Teacher validation', () => {
  it('should return false for invalid email', () => {
    const result = validateTeacher({
      fullName: 'Abby',
      email: 'correo-malo',
      institution: 'Colegio X',
    });

    expect(result).toBe(false);
  });

  it('should return true for valid email', () => {
    const result = validateTeacher({
      fullName: 'Abby',
      email: 'abby@gmail.com',
      institution: 'Colegio X',
    });

    expect(result).toBe(true);
  });
});
