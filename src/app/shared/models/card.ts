export class Card {
  id: string;
  titre: string;
  descriptionCourte: string;
  descriptionLongue: string;
  image: File;
  url: string;


  constructor(fields?: Partial<Card>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
