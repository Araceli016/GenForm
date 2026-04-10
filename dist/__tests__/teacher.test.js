'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const teacher_service_1 = require('../services/teacher.service');
describe('Teacher registration', () => {
  it('should fail if email is invalid', async () => {
    const result = await (0, teacher_service_1.registerTeacher)({
      fullName: 'Abby Lopez',
      email: 'bad-email',
      institution: 'Colegio A',
    });
    expect(result).toBe(false);
  });
  it('should fail if name is empty', async () => {
    const result = await (0, teacher_service_1.registerTeacher)({
      fullName: '',
      email: 'abby@test.com',
      institution: 'Colegio A',
    });
    expect(result).toBe(false);
  });
  it('should create institution if not exists', async () => {
    const result = await (0, teacher_service_1.registerTeacher)({
      fullName: 'Abby Lopez',
      email: 'abby@test.com',
      institution: 'Nuevo Colegio',
    });
    expect(result).toBe(true);
  });
  it('should send notification and register teacher', async () => {
    const result = await (0, teacher_service_1.registerTeacher)({
      fullName: 'Abby Lopez',
      email: 'abby@test.com',
      institution: 'Colegio A',
    });
    expect(result).toBe(true);
  });
  it('should validate correct email format', () => {
    const result = (0, teacher_service_1.validateTeacher)({
      fullName: 'Abby Lopez',
      email: 'abby@test.com',
      institution: 'Colegio A',
    });
    expect(result).toBe(true);
  });
});
