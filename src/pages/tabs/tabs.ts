import { Component } from '@angular/core';
//Páginas
import { AboutPage,HomePage,AcercaPage,PredicasPage} from '../pages';
//Plugins
import { BackgroundMode } from '@ionic-native/background-mode';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AcercaPage;
  tab4Root = PredicasPage;
  public audio = new Audio();
  public  reproduciendo:boolean;
  constructor(private backgroundMode: BackgroundMode) {
    this.reproduciendo =  true;
    this.reproducir();
  }
  public pausar(){
    this.audio.pause();
    this.reproduciendo = false;
    this.backgroundMode.disable();
  }
  reproducir(){
    this.audio.src = "http://5.199.169.190:8131/stream";
    this.audio.load();
    this.audio.play();
    this.reproduciendo = true;
    this.backgroundMode.enable();
  }
  fondo(){
    this.backgroundMode.moveToBackground();
  }
}
