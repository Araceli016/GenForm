import { Teacher } from '../models/types';

export const validateTeacher = (teacher: Teacher): boolean => {
  // Validar correo
  const email = teacher.email;

  if (!email || email.trim() === '') {
    return false;
  }

  const hasAt = email.includes('@');
  const hasDot = email.includes('.');

  return hasAt && hasDot;
};
