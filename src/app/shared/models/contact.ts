export class Contact {
  id: string;
  nom: string;
  adresse: string;
  phone: string;
  email: string;
  message: string;
  vue: boolean;

  constructor(fields?: Partial<Contact>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
