import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected actualYear = (new Date( Date.now() )).getFullYear();
  protected pageTitle = `Repertórios de ${this.actualYear}`;
}
