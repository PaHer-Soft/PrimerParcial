import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarPrincipalComponent } from './componentes/navbar-principal/navbar-principal.component';
import { IonicModule } from '@ionic/angular';
import { SidebarVideosComponent } from './componentes/sidebar-videos/sidebar-videos.component';
import { VideoCentralComponent } from './componentes/video-central/video-central.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPrincipalComponent,
    SidebarVideosComponent,
    VideoCentralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
