import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Card} from '../../../shared/models/card';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminCardService {
  public collection: Observable<Card[]>;
  private itemsCollection: AngularFirestoreCollection<Card>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = this.afs.collection<Card>('card');
    console.log(this.itemsCollection);
    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Card(obj);
        });
      })
    );
  }

  public add(item: Card): Promise<any> {
    const id = this.afs.createId();
    const card = {id, ...item};
    return this.itemsCollection.doc(id).set(card)
      .catch((e) => {
        console.log(e);
      });
  }

  public update(id, card) {
    return this.itemsCollection.doc(id).update(card).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Card): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
      .catch((e) => {
        console.log(e);
      });
  }

  public getCard(id: string): Observable<Card> {
    return this.itemsCollection.doc<Card>(id).valueChanges();
  }
}
