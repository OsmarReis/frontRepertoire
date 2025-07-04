import { Component } from '@angular/core';

@Component({
  selector: 'app-repertoire-container',
  imports: [],
  templateUrl: './repertoire-container.html',
  styleUrl: './repertoire-container.css'
})
export class RepertoireContainer {
  public day_of_the_Lord = "Dia do Senhor"
  public repertoire_date = "06/04"
  public liturgy_col = "Liturgia"
  public songs_col = "Músicas"
  public repertoire = [
    {
      liturgy: [
        "Invocação","Contrição","Cânticos","Família"
      ],
      songs: [
        "Hino Invocação","Hino Contrição", `Cântico 1/nCântico 2`, "Cântico Família"
      ]
    },
  ]
}
