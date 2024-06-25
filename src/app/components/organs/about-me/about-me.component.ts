import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  technologies = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Node" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "MySql" },
    { skill: "Postgress" },
    { skill: "Angular" },
    { skill: "Wordpress" },
    { skill: "Karma & Jasmine" },
    { skill: "Php" },
    { skill: "Graphql" },
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
}
