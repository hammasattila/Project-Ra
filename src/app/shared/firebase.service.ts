import { Record } from './record';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  createRecord(r: Record) {
    return this.db.collection('records').add({
      type: r.type,
      value: r.value,
      name: r.name,
      from: r.from,
      comment: r.comment
    });
  }
}
