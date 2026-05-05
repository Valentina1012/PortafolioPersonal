import type { Preview } from '@storybook/react-vite';
import '../src/App.css';           // Estilos de la app
import '../src/styles/base/reset.css';
import '../src/styles/primitives/colour.css';
import '../src/styles/utilities/breakpoint.css';
import '../src/styles/utilities/colour.css';
import '../src/styles/utilities/radius.css';
import '../src/styles/utilities/spacing.css';
import '../src/styles/utilities/stroke.css';
import '../src/styles/utilities/typography.css';
import '../src/styles/utilities/custom/typography.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
