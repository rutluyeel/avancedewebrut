/*import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
});*/

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    options: {
        customProperties: true
    },
    theme: {
        themes: {
            light: {
            },
            dark: {
            }
        }
    }
});