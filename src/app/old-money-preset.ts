import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export const OLD_MONEY_PRESET = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fdfaf5',
      100: '#f5f0e6',
      200: '#e8d9c2',
      300: '#d4b48c',
      400: '#c19a6b',
      500: '#a67c52',
      600: '#8b5e3a',
      700: '#6b4428',
      800: '#4a2e19',
      900: '#2e1a0d',
    },
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: '{primary.50}',
            borderColor: '{primary.400}',
          },
          item: {
            color: '{text.color}',
            focusBackground: '{primary.200}',
            focusColor: '{primary.700}',
            activeBackground: '{primary.300}',
            activeColor: '{primary.800}',
          }
        }
      }
    },
    dataview: {
      colorScheme: {
        light: {
          content: {
            background: '{primary.50}',
            borderColor: '{primary.400}',
            color: '{text.color}',
          }
        },
      }
    },
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.ground}',
            shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
          },
          body: {
            padding: '1.5rem',
          },
        },
      },
    }
  }
});
