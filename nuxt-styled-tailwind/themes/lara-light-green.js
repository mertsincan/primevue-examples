import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';

const MyPreset = definePreset(Lara, {
    // custom preset tokens
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.p-dark',
        cssLayer: {
           name: 'primevue',
           order: 'tailwind-base, primevue, tailwind-utilities'
       }
    }
};