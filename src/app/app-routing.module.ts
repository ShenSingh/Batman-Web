import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FightComponent } from './fight/fight.component';
import { HomeComponent } from './home/home.component';
import { LifeComponent } from './life/life.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'fight',
    component:FightComponent
  },
  {
    path:'life',
    component:LifeComponent
  },
  {
    path:'wallpaper',
    component:WallpaperComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
