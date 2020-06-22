export class Carousel {
  id: string;
  image: File;
  url: string;


  constructor(fields?: Partial<Carousel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
