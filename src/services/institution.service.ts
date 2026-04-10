export interface Institution {
  name: string;
}

const institutions: Institution[] = [{ name: 'Colegio A' }, { name: 'Colegio B' }];

export const getInstitutions = (): Institution[] => {
  return institutions;
};

export const findOrCreateInstitution = (name: string): Institution => {
  const found = institutions.find((i) => i.name === name);

  if (found) return found;

  const newInstitution = { name };
  institutions.push(newInstitution);

  return newInstitution;
};
