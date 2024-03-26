/**
 * If you prefer, you can move this to a shared module
 * and reuse this configuration in whole project.
 *
 * Just check journey shared module generator.
 */
import {
  Analitica,
  AnaliticaPluginInterface,
  RichEvent,
} from '@stone-payments/analitica';

import packageJson from '../../../package.json';

class MyPlugin implements AnaliticaPluginInterface {
  name = 'MY_PLUGIN';

  sendEvent(event: RichEvent) {
    console.log(`[${this.name}]`, event);
  }
}

export const analiticaInstance = new Analitica(
  {
    app: {
      env: 'production',
      version: packageJson.version,
    },
  },
  [new MyPlugin()],
  { dryRun: false }
);
