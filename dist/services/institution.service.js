'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.findOrCreateInstitution = exports.getInstitutions = void 0;
const institutions = [{ name: 'Colegio A' }, { name: 'Colegio B' }];
const getInstitutions = () => {
  return institutions;
};
exports.getInstitutions = getInstitutions;
const findOrCreateInstitution = (name) => {
  const found = institutions.find((i) => i.name === name);
  if (found) return found;
  const newInstitution = { name };
  institutions.push(newInstitution);
  return newInstitution;
};
exports.findOrCreateInstitution = findOrCreateInstitution;
