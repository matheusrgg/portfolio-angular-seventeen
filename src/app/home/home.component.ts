import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
    private router: Router
  ) {
    this.translate.setDefaultLang("pt")
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }

  onAboutMe() {
    this.router.navigate(['/about'])
  }
}
