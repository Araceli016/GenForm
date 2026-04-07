export interface Teacher {
  fullName: string;
  email: string;
  institution: string;
}

export interface Student {
  firstName: string;
  lastName: string;
  level: 'Primaria' | 'Secundaria';
  course: 1 | 2 | 3 | 4 | 5 | 6;
  birthDate: string;
}
