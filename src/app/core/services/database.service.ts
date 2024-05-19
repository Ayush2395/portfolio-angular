import { Injectable, inject } from '@angular/core';
import { DocumentData, Firestore, QuerySnapshot, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private firestore = inject(Firestore);

  public getSkills = async () => {
    const storeRef = collection(this.firestore, "skills");
    const data = await getDocs(storeRef);
    return new Observable<QuerySnapshot<DocumentData, DocumentData>>(observed => observed.next(data));
  };
}
