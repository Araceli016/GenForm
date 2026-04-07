export const validateHeaders = (headers: string[]): boolean => {
  const requiredHeaders = [
    'Nombres estudiante',
    'Apellidos estudiante',
    'Primaria/secundaria',
    'Curso',
    'Fecha de nacimiento',
  ];

  for (const header of requiredHeaders) {
    if (!headers.includes(header)) {
      return false;
    }
  }

  return true;
};
