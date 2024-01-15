import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharactersResponse, Character } from 'src/app/models/characters';
import { CharactersService } from 'src/app/services/characters.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', animate('1000ms ease-in')),
    ]),
  ],
})
export class CharactersComponent implements OnInit {
  loading = false;
  response: CharactersResponse = {
    akatsuki: [],
    currentPage: 0,
    pageSize: 0,
    totalCharacters: 0,
  };

  constructor(
    private charactersService: CharactersService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loaderService.getLoading().subscribe((loading) => {
      this.loading = loading;

      if (loading) {
        console.log('Cargando...');
      } else {
        console.log('Carga completa.');
      }
      this.cdr.detectChanges();
    });
    this.charactersService
      .getAllCharacters()
      .subscribe((response: CharactersResponse) => {
        this.response = response;
      });
  }
}
