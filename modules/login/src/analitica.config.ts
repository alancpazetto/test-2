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

class MyPlugin implements AnaliticaPluginInterface {
  name = 'MY_PLUGIN_Login';

  sendEvent(event: RichEvent) {
    console.log(`[${this.name}]`, event);
  }
}

export const analiticaLoginInstance = new Analitica(
  {
    app: {
      env: 'production',

      version: '0.0.1',
    },
  },
  [new MyPlugin()],
  { dryRun: false }
);
