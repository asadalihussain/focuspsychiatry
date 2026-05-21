import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.focuspsychiatry.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/uncategorized/appearance-guide':            '/services/suboxone/',
    '/uncategorized/perfectly-on-furniture':      '/conditions/addiction/',
    '/uncategorized/fat-son-how-smiling-natural': '/new-patients/',
    '/uncategorized':                             '/blog/',
    '/category/uncategorized':                    '/blog/',
    '/feed':                                      '/blog/',
    '/about':                                     '/our-team/',
    '/providers':                                 '/our-team/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
