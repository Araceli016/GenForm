import { Teacher } from '../models/types';

import { findOrCreateInstitution } from './institution.service';
import { sendNotification } from './notification.service';

export const validateTeacher = (teacher: Teacher): boolean => {
  if (!teacher.fullName || !teacher.email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(teacher.email);
};

export const registerTeacher = async (teacher: Teacher): Promise<boolean> => {
  const isValid = validateTeacher(teacher);
  if (!isValid) return false;
  findOrCreateInstitution(teacher.institution);
  await sendNotification(teacher.email);
  return true;
};
