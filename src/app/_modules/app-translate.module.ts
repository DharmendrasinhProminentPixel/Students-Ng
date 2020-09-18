import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/** Module for Internationalization (i18n), multi language support */
export const APP_TRANSLATE_MODULE = TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: TranslationLoaderFactory,
      deps: [HttpClient]
    }
});

/*export*/ function TranslationLoaderFactory(http:HttpClient){
    return new TranslateHttpLoader(http);
}
