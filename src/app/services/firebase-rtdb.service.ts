import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HotToastService } from '@ngneat/hot-toast';
import { first, OperatorFunction } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FirebaseRtdbService {

  firstTime: boolean = true;

  constructor(
    private db: AngularFireDatabase,
    private toast: HotToastService
  ) { }

  showToast(){
    return this.toast.observe({
      loading: 'Retrieving data...',
      success: 'Data retrieved!',
      error: 'Error: Could not load data. Please download my resume from the home page or contact me at stefanosmichelakis@gmail.com for more information.',
    })
  }

  getObjectFromRTDB(url: string){
    if (this.firstTime){
      this.firstTime = false;
      return this.db.object(url).valueChanges().pipe(
        this.showToast()
      );
    } else {
      return this.db.object(url).valueChanges();
    }
  }

  getListFromRTDB(url: string){
    if (this.firstTime){
      this.firstTime = false;
      return this.db.list(url).valueChanges().pipe(
        this.showToast() 
      );
    } else {
      return this.db.list(url).valueChanges();
    }
  }

}
