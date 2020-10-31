import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-i18n',
  templateUrl: './my-i18n.component.html',
  // styleUrls: ['./my-i18n.component.css']
})
export class MyI18nComponent implements OnInit {
  // title:string="Welcome to i18n";
  langs = ['en', 'fr'];

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    let browserLang = this.translateService.getBrowserLang();
    let langToUse = "en";
    if(this.langs.indexOf(browserLang) != -1){
      langToUse = browserLang;
    }

    this.translateService.setDefaultLang(langToUse);
    this.translateService.use(langToUse);
  }

  useLanguage(lang:string):void{
    // this.translateService.langs
    // this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

}
