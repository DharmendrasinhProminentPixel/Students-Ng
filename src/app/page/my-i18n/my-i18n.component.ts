import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-i18n',
  templateUrl: './my-i18n.component.html',
  styleUrls: ['./my-i18n.component.css']
})
export class MyI18nComponent implements OnInit {
  // title:string="Welcome to i18n";
  langs = ['en', 'fr'];

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
   let browserLang = this.translateService.getBrowserLang();
    if(this.langs.indexOf(browserLang) != -1){
      this.translateService.setDefaultLang(browserLang);
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

  useLanguage(lang:string):void{
    // this.translateService.langs
    this.translateService.setDefaultLang(lang);
  }

}
