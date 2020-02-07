const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // All the default values will be compiled unless they are overridden below 
  theme: {
    // Extend (add to) the default theme in the `extend` key
    extend: {
      colors: {
        "primary-200": colors.indigo[200],
        "primary-500": colors.indigo[500],
        "primary-600": colors.indigo[600],
        "secondary-200": colors.gray[300],
        "secondary-500": colors.gray[600],
        "secondary-600": colors.gray[700],
        "success-200": colors.green[200],
        "success-500": colors.green[500],
        "success-600": colors.green[600],
        "warning-200": colors.yellow[200],
        "warning-500": colors.yellow[500],
        "warning-600": colors.yellow[600],
        "danger-200": colors.red[200],
        "danger-500": colors.red[500],
        "danger-600": colors.red[600],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '148': '37rem',
        '168': '42rem',
        '192': '48rem',
        '216': '54rem',
        '244': '61rem',
      }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      "sans": [
        '"Open Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    inset: {
      px: '1px',
      auto: 'auto',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      // 
      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-32': '-8rem',
      '-40': '-10rem',
      '-48': '-12rem',
      '-56': '-14rem',
      '-64': '-16rem',
      // 
      '25per': '25%',
      '50per': '50%',
      '75per': '75%',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],
    
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      // https://github.com/AndreaMinato/tailwind-heropatterns
      // https://www.heropatterns.com/
      patterns: ["polka-dots", "signal", "stripes"],
    
      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "blue-dark": "#000044"
      },
    
      // The foreground opacity
      opacity: {
        "10": "0.1",
        default: "0.4",
        "100": "1.0"
      }
    }),
  ],
} 