import { analiticaLoginInstance } from '../analitica.config';

export default analiticaLoginInstance.eventFactory('Login', {
  view: {
    /**
     * @analitica when load view
     */
    onLoad: function () {
      return {
        label: 'on-load-view-login',
      };
    },
  },
});
