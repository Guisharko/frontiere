import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Carousel} from '../../../shared/models/carousel';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminCarouselService {
  public collection: Observable<Carousel[]>;
  private itemsCollection: AngularFirestoreCollection<Carousel>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = this.afs.collection<Carousel>('carousel');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          console.log(obj);

          return new Carousel(obj);
        });
      })
    );
  }

  public add(item: Carousel): Promise<any> {
    const id = this.afs.createId();
    const carousel = {id, ...item};
    return this.itemsCollection.doc(id).set(carousel)
      .catch((e) => {
        console.log(e);
      });
  }

  public update(id, carousel) {
    return this.itemsCollection.doc(id).update(carousel).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Carousel): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
      .catch((e) => {
        console.log(e);
      });
  }

  public getCarousel(id: string): Observable<Carousel> {
    return this.itemsCollection.doc<Carousel>(id).valueChanges();
  }
}
