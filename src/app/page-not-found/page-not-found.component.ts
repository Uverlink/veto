import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <h1>404, cette page n'existe pas !</h1>
      <a routerLink="/animals" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
