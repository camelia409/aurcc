module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "bumblebee"],
  },
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'custom-gradient-start': theme('colors.blue.500'),
        'custom-gradient-end': theme('colors.green.500'),
      }),
    },
  },
};