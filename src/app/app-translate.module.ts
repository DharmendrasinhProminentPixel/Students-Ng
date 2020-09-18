import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslationLoaderFactory(http:HttpClient){
    return new TranslateHttpLoader(http);
}

export const APP_TRANSLATE_MODULE = TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: TranslationLoaderFactory,
      deps: [HttpClient]
    }
});
