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
      heading: 'IBM',
      Data: '07/10/2022 - Até o momento',
      img: '/projects/logo-ibm.png',
      description: 'ibm-description',
      tecnologia: 'Angular, Typescript e GraphQL',
      link: ""
    },
    {
      id: 2,
      heading: 'Ernst & Young',
      Data: '07/10/2022 - Até o momento',
      img: '/projects/logo-esy.png',
      description: 'Tive a oportunidade de trabalhar com na área de consultoria,como desenvolvedor Frontend  fui alocado em uma empresa de energia, onde desenvolvemos uma aplicação web, usando as seguintes tecnologias Angular, Typescript, Integrações de Api`s, Teste Unitário, Jasmine e Karma, Componentes Responsivos, Ionic, SonarQube, Sonar Scanner, OAuth2.0, JWT, SASS, Teste de Integração. Lembrei que tive a oportunidade tb de fazer uma apresentação da plataforma para o cliente',
      tecnologia: 'Angular, Typescript, IONIC',
      link: ""
    },


    {
      id: 3,
      heading: 'Ok Park',
      Data: '05/12/2019',
      img: '/projects/logookpark.png',
      description: 'Meu primeiro freela, tive a oportunidade de fazer um site para a empresa de estacionamento do meu tio, usando html, javascript e bootstrap! Foi muito bacana pq eu criei todo o design do site. Hoje olhando vejo q mudaria bastante coisa, más foi um ótimo começo.',
      tecnologia: 'HTML e Bootstrap',
      link: "http://www.okparkestacionamentos.com/"
    },
    {
      id: 4,
      heading: 'Metodo Consultoria',
      Data: '05/03/2021 - 10/05/2021',
      img: '/projects/metodoconsultoria.png',
      description: 'Foi uma plataforma web que fiz em Php e Wordpress para uma empresa de Treinamento ele tb foi totalmente customiza, elaboramos logo, icone , imagens e paleta de cores, totalmente novos. ALém disso com alguns plugins do wordpress fizemos algumas atividade para treinamento dinämico, ficou bem legal!',
      tecnologia: 'Wordpress, MySQL e Php',
      link: "https://metodoconsultoria.com/"
    },
    {
      id: 5,
      heading: 'Enertu',
      Data: '17/08/2023 - Até o momento',
      img: '/projects/logo.svg',
      description: 'Um projeto que comecei a trabalhar recentemente sobre gestão compartilhada de energia usando placa solar , tipo um buscapé com anúncios, bem interesssante.',
      tecnologia: 'React, Next e Node',
      link: ""
    },
    {
      id: 6,
      heading: 'Calculadora CDI',
      Data: '07/10/2022 - Até o momento',
      img: '',
      description: 'Aplicação que calcula a valorização do LCA',
      tecnologia: 'React e Next',
      link: "https://calculadora-cdi.vercel.app/"
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

