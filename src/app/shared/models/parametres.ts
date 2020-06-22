export class Parametres {
  id: string;
  nom1: string;
  nom2: string;
  phone: string;
  slogan: string;
  facebook: string;
  youtube: string;

  constructor(fields?: Partial<Parametres>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
