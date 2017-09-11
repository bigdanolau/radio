import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import  {TabsPage} from "../pages";
//Plugins
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SocialSharing } from '@ionic-native/social-sharing';

//providers
import {NoticiasProvider} from "../../providers/noticias/noticias";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lectura:boolean = false;

  public tabs:TabsPage;
  public paginacion:any = 2;
public mas:boolean = true;
  posts: FirebaseListObservable<any[]>;
  constructor(public _noticias:NoticiasProvider,private socialSharing: SocialSharing,private backgroundMode: BackgroundMode,private tts: TextToSpeech,public fb: AngularFireDatabase,public navCtrl: NavController) {
    this._noticias.cargar();
  }

  escuchar(texto){
    this.pausar();
    this.lectura = true;
    this.tts.speak({text:texto,locale: 'es-Es'})
  .then(() => {
    this.lectura = false;
  })
  .catch((reason: any) => console.log(reason));
  }
  pausar(){
    this.tts.speak({text:"",locale: 'es-Es'})
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
    this.tts.stop();
    this.lectura = false;
  }
  compartir(noticia){
    this.socialSharing.share("Obten este y muchos más devocionales con nuestra App o desde nuestra página web",noticia.titulo,noticia.imagen,"http://radioesperanza1140.com");
  }
  infinito(infiniteScroll){
    this._noticias.cargar().then((mas)=>{
    infiniteScroll.complete();
    if (!mas) {
        this.mas = false;
    }
    
  })
  }

}
