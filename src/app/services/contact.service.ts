import {Injectable} from '@angular/core';
import {Contact} from '../shared/models/contact';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
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
    contact.vue = false;
    return this.itemsCollection.doc(id).set(contact)
      .catch((e) => {
        console.log(e);
      });
  }

  public getDevis(id: string): Observable<Contact> {
    return this.itemsCollection.doc<Contact>(id).valueChanges();
  }

  public updateStatus(item: Contact, status): Promise<any> {
    const contact = {...item};
    if (status === 'true') {
      contact.vue = true;
    } else {
      contact.vue = false;
    }
    console.log(item);
    return this.update(item.id, contact);
  }

  public update(id, contact) {
    return this.itemsCollection.doc(id).update(contact).catch((e) => {
      console.log(e);
    });
  }
}
