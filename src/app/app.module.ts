import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Páginas
import { AboutPage,HomePage,TabsPage,AcercaPage,PredicasPage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Plugins
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SocialSharing } from '@ionic-native/social-sharing';
//Config
import {firebaseConfig} from '../config/firebase';
import { NoticiasProvider } from '../providers/noticias/noticias';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    AcercaPage,
    PredicasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    AcercaPage,
    PredicasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    BackgroundMode,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider
  ]
})
export class AppModule {}
