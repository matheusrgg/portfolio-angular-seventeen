import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
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
