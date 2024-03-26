import { analiticaInstance } from './analitica.config';

export default analiticaInstance.eventFactory('App', {
  view: {
    /**
     * @analitica when load view
     */
    onLoad: function () {
      return {
        label: 'on-load-view',
      };
    },
  },
});
