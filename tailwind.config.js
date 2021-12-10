// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
          colors: {
            'liono-green': '#b6d5d0',
            'liono-blue': '#85d7ef',
            'liono-yellow': '#fdcd33',
          }
        }
      }
}
