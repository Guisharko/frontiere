import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Parametres} from '../../shared/models/parametres';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  public collection: Observable<Parametres[]>;
  private itemsCollection: AngularFirestoreCollection<Parametres>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = this.afs.collection<Parametres>('parametres');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Parametres(obj);
        });
      })
    );
  }

  public update(id, parametres) {
    return this.itemsCollection.doc(id).update(parametres).catch((e) => {
      console.log(e);
    });
  }

  public getParametres(id: string): Observable<Parametres> {
    return this.itemsCollection.doc<Parametres>(id).valueChanges();
  }
}
