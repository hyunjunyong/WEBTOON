import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#EF9A9A',
            secondary: '#EF6C00',
            accent: '#388E3C',
            error: '#F44336',
            my_color: '#ffffff',
          },
        },
    },
});
