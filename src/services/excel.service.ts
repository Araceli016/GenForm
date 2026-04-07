export const validateHeaders = (headers: string[]): boolean => {
  const requiredHeaders = new Set([
    'Nombres estudiante',
    'Apellidos estudiante',
    'Primaria/secundaria',
    'Curso',
    'Fecha de nacimiento',
  ]);
  return headers.some((h) => requiredHeaders.has(h));
};
