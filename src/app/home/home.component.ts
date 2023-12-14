import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
