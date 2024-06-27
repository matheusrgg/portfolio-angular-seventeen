import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any = [];

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('pt');
    this.loadProjects();
  }

  switchLanguage(language: string) {
    console.log('click');
    this.translate.use(language);
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        id: 0,
        heading: this.translate.instant('PROJECTS.HEADING_0'),
        data: this.translate.instant('PROJECTS.DATA_0'),
        img: '../assets/ibm-website.png',
        description: this.translate.instant('PROJECTS.DESCRIPTION_0'),
        tecnologia: this.translate.instant('PROJECTS.TECNOLOGIA_0'),
        link: 'https://www.ibm.com/'
      },
      {
        id: 1,
        heading: this.translate.instant('PROJECTS.HEADING_1'),
        data: this.translate.instant('PROJECTS.DATA_1'),
        img: '../assets/metodoconsultoria.png',
        description: this.translate.instant('PROJECTS.DESCRIPTION_1'),
        tecnologia: this.translate.instant('PROJECTS.TECNOLOGIA_1'),
        link: 'https://metodoconsultoria.com/'
      },
      {
        id: 2,
        heading: this.translate.instant('PROJECTS.HEADING_2'),
        data: this.translate.instant('PROJECTS.DATA_2'),
        img: '../assets/okpark.png',
        description: this.translate.instant('PROJECTS.DESCRIPTION_2'),
        tecnologia: this.translate.instant('PROJECTS.TECNOLOGIA_2'),
        link: 'http://www.okparkestacionamentos.com/'
      },
      {
        id: 3,
        heading: this.translate.instant('PROJECTS.HEADING_3'),
        data: this.translate.instant('PROJECTS.DATA_3'),
        img: '../assets/enerty.png',
        description: this.translate.instant('PROJECTS.DESCRIPTION_3'),
        tecnologia: this.translate.instant('PROJECTS.TECNOLOGIA_3'),
        link: ''
      },
    ];
  }
}
