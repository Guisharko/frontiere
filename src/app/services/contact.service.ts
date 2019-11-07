import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Contact} from '../models/contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public collection: Observable<Contact[]>;
  private itemsCollection: AngularFirestoreCollection<Contact>;


  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = this.afs.collection<Contact>('contactMessage');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Contact(obj);
        });
      })
    );
  }

  public add(item: Contact): Promise<any> {
    const id = this.afs.createId();
    const date = new Date();
    const contact = {id, date, ...item};
    console.log(contact);
    return this.itemsCollection.doc(id).set(contact)
      .catch((e) => {
        console.log(e);
      });
  }
}
