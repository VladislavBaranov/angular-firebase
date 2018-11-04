import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Label } from '../models/label';

@Injectable({
  providedIn: 'root'
})
export class TabLabelService {
  private labelsCollection: AngularFirestoreCollection<Label>;
  
  constructor(db: AngularFirestore) { 
    this.labelsCollection = db.collection<Label>('labels');
  }

  load(): Observable<Label[]> {
    let labels = this.labelsCollection.valueChanges();

    return labels;
  }  
}
