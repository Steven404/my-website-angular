import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRtdbService {

  constructor(private db: AngularFireDatabase) { }

  getObjectFromRTDB(url: string){
  return this.db.object(url).valueChanges()
  }

  getListFromRTDB(url: string){
    return this.db.list(url).valueChanges()
  }

}
