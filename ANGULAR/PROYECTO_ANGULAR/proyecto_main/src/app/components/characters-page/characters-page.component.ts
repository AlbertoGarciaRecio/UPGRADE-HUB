import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent {
  currentPage = 1;
  totalPages = 42;
  characters: Character[] = []
  characterInLocalStorage = localStorage.getItem('characters')
  constructor(private charactersService: CharactersService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loadCharacters();
  }
  
  // loadCharacters(): void {
  //   if(!this.characterInLocalStorage?.length) {
  //     this.charactersService.getCharacters(this.currentPage). subscribe({next: (response: any) => {
  //       this.characters = response.results
  //       localStorage.setItem('characters', JSON.stringify(this.characters))
  //       console.log(this.characters)
  //     },
  //     error: (error) => {
  //     }
  //     }
  //     )
  //   } else {
  //     this.characters = JSON.parse(this.characterInLocalStorage!)
  //   }
  // }

  loadCharacters(): void {
      this.charactersService.getCharacters(this.currentPage). subscribe((response: any) => {
        this.characters = response.results;
        localStorage.setItem('characters', JSON.stringify(this.characters))
        console.log(this.characters)
      })
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        if(response === null) {
          sessionStorage.removeItem('token-characters')
          this.router.navigate(['login'])
        }
      },
      error: () => {}
    })
  }
  
}
