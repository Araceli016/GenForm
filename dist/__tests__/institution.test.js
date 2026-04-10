'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const institution_service_1 = require('../services/institution.service');
describe('Institution service', () => {
  it('should return existing institutions', () => {
    const institutions = (0, institution_service_1.getInstitutions)();
    expect(institutions.length).toBeGreaterThan(0);
  });
  it('should find an existing institution', () => {
    const institution = (0, institution_service_1.findOrCreateInstitution)('Colegio A');
    expect(institution.name).toBe('Colegio A');
  });
  it('should create a new institution if not exists', () => {
    const institution = (0, institution_service_1.findOrCreateInstitution)(
      'Colegio Nuevo XYZ',
    );
    expect(institution.name).toBe('Colegio Nuevo XYZ');
  });
  it('should add new institution to the catalog', () => {
    (0, institution_service_1.findOrCreateInstitution)('Colegio Extra ABC');
    const institutions = (0, institution_service_1.getInstitutions)();
    const found = institutions.find((i) => i.name === 'Colegio Extra ABC');
    expect(found).toBeDefined();
  });
});
