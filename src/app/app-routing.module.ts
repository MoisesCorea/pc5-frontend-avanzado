import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './componets/characters/characters.component';
import { CharacterComponent } from './componets/character/character.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: '**', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
