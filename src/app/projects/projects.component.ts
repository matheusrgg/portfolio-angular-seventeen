import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any = [




    {
      id: 1,
      heading: 'Ok Park',
      Data: '05/12/2019',
      img: '../assets/okpark.png',
      description: 'Meu primeiro freela, tive a oportunidade de fazer um site para a empresa de estacionamento do meu tio, usando html, javascript e bootstrap! Foi muito bacana pq eu criei todo o design do site. Hoje olhando vejo q mudaria bastante coisa, más foi um ótimo começo.',
      tecnologia: 'HTML e Bootstrap',
      link: "http://www.okparkestacionamentos.com/"
    },
    {
      id: 2,
      heading: 'Metodo Consultoria',
      Data: '05/03/2021 - 10/05/2021',
      img: '../assets/metodoconsultoria.png',
      description: 'Foi uma plataforma web que fiz em Php e Wordpress para uma empresa de Treinamento ele tb foi totalmente customiza, elaboramos logo, icone , imagens e paleta de cores, totalmente novos. ALém disso com alguns plugins do wordpress fizemos algumas atividade para treinamento dinämico, ficou bem legal!',
      tecnologia: 'Wordpress, MySQL e Php',
      link: "https://metodoconsultoria.com/"
    },
    {
      id: 3,
      heading: 'Enertu',
      Data: '17/08/2023 - Até o momento',
      img: '../assets/enerty.png',
      description: 'Um projeto que comecei a trabalhar recentemente sobre gestão compartilhada de energia usando placa solar , tipo um buscapé com anúncios, bem interesssante.',
      tecnologia: 'React, Next e Node',
      link: ""
    },



  ]

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang("pt")
  }
  switchLanguage(language: string) {
    console.log("click")
    this.translate.use(language)

  }

  teste(c: any) {
    return console.log("cade", c);
  }
}

