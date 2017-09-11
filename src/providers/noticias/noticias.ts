import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NoticiasProvider {
  public posts:any;
  public noticias:any[] = [];
  public lastKey:any;
  constructor(public fb: AngularFireDatabase) {

  }
  cargar(){
    return  new Promise((resolve,reject)=>{
      this.fb.list("/posts",{
     query: {
       limitToLast: 2,
      orderByKey: true,
      endAt: this.lastKey
     }}
   ).subscribe(posts=>{
      if (this.lastKey) {
          posts.pop(); // duplica
      }
      if (posts.length == 0) {
          console.log("No hay mas");
          resolve(false);
          return;
      }
      this.lastKey = posts[0].$key;
      for (let i = posts.length -1; i >= 0; i--) {
        let post =posts[i];
          this.noticias.push(post);
      }
      resolve(true);

     });

    });

  }
}
