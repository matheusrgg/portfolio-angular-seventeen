import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("pt");
  }

  isMenuCollapsed = true;

  toggleLanguage(event: any) {
    const isChecked = event.target.checked;
    const language = isChecked ? 'en' : 'pt';
    this.switchLanguage(language);
    console.log(`Language switched to: ${language}`);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
