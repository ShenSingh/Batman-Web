import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeComponent } from './life/life.component';
import { FightComponent } from './fight/fight.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeComponent,
    FightComponent,
    FooterComponent,
    HeaderComponent,
    WallpaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
