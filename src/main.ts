import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

addGoogleMapApiKeyByEnvironment();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

function addGoogleMapApiKeyByEnvironment() {
  const head = document.getElementsByTagName('head')[0];
  const mapApiKey = environment.mapKey;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}`;
  head.appendChild(script);
}
