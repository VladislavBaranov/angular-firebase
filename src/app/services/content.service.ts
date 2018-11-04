import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentCollection: AngularFirestoreCollection<Content>;

  constructor(db: AngularFirestore) { 
    this.contentCollection = db.collection<Content>('contents');
  }

  load(contentId: number): Observable<Content> {
    return this.contentCollection.doc(contentId.toString()).valueChanges() as Observable<Content>;
  }
}
