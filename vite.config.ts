// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   base: '/Tailwind-CSS-Project/',  //tells Vite that your website is hosted under the Tailwind-CSS-Project repository path
//   plugins: [
//     tailwindcss(),
//   ],
// })


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Tailwindcss-project2/'
    : '/',
  plugins: [
    tailwindcss(),
  ],
}))
