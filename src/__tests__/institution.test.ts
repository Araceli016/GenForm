import {
  getInstitutions,
  findOrCreateInstitution,
} from '../services/institution.service';

describe('Institution service', () => {
  it('should return existing institutions', () => {
    const institutions = getInstitutions();
    expect(institutions.length).toBeGreaterThan(0);
  });

  it('should find an existing institution', () => {
    const institution = findOrCreateInstitution('Colegio A');
    expect(institution.name).toBe('Colegio A');
  });

  it('should create a new institution if not exists', () => {
    const institution = findOrCreateInstitution('Colegio Nuevo XYZ');
    expect(institution.name).toBe('Colegio Nuevo XYZ');
  });

  it('should add new institution to the catalog', () => {
    findOrCreateInstitution('Colegio Extra ABC');
    const institutions = getInstitutions();
    const found = institutions.find((i) => i.name === 'Colegio Extra ABC');
    expect(found).toBeDefined();
  });
});
