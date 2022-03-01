import { Injectable, Type } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ContactInfo } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private db: AngularFireDatabase) { }

  getContactInfo(url: string): any{
    this.db.object(url)
    .valueChanges()
    .subscribe((res: ContactInfo) =>{
      return res;
    })
  }
}
