import { Teacher } from '../models/types';

export const validateTeacher = (teacher: Teacher): boolean => {
  return teacher.email.length > 0;
};
