import { fileURLToPath } from 'url';
import typography from '@tailwindcss/typography';

const componentsDir = fileURLToPath(new URL('./components', import.meta.url));

export default {
  content: [`${componentsDir}/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        serif: ['SpaceGrotesk', 'serif'],
      },
    },
  },
  plugins: [typography],
};
