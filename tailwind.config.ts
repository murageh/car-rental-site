import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
        colors: {
            'primary': '#15131a',
            'secondary': '#F73838',
            'danger': '#F44336',
            'white': '#FFFFFF',
            'black': '#000000',
            'gray': '#bdbdbd',
            'blueBlack': '#181922',
        },
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        },
        boxShadow: {

        },
    },
  },
  plugins: [],
    safelist:[
        'hidden',
        {
            pattern: /(bg|text|border)-('primary'|'secondary'|'danger'|'white'|'black'|'gray'|'blueBlack')(-[1-9])?(00)?/,
            variants: ['hover', 'focus', 'active', 'group-hover'],
        },
        {
            pattern: /bg-url-.*$/,
        },
        {
            pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
        },
        {
            pattern: /flex-.*/
        },
        {
            pattern: /(bottom|right|top|left)-[0-9]+/
        },
        {
            pattern: /(w|h)-[0-9]+/
        },
        {
            pattern: /(w)-[0-9]{1,2}\/12/
        },
        {
            pattern: /(gap|gap-x|gap-y)-[0-9]+/
        },
        {
            pattern: /(border|border-r|border-l)-[0-9]+/
        },
        {
            pattern: /(rounded)-(none|sm|lg|xl|2xl|3xl)/
        },
        {
            pattern: /(shadow)-(none|normal|popular|button)/,
            variants: ['hover']
        },
        {
            pattern: /!?list-[a-z]+/
        }
    ],
}
export default config
