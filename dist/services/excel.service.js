'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.validateHeaders = void 0;
const validateHeaders = (headers) => {
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
exports.validateHeaders = validateHeaders;
