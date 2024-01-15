import { Component } from '@angular/core';
import { Character, Debut } from 'src/app/models/characters';
import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  character!: Character;
  showAllDetails = false;
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier-->', id);

    this.charactersService.getCharacterById(id).subscribe((character) => {
      if (!character) {
        return null; // O cualquier valor predeterminado que sea apropiado
      }

      this.character = character;
      console.log('Image --> ', this.character);
      return this.character; // Devuelve la imagen si existe
    });
  }
}
