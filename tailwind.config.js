/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Ubantu': " Ubuntu, sans- serif",
        'sans': "Open Sans, sans- serif",
      },
      colors: {
        'redColor': 'rgb(229, 9, 20)',
        'hoverred': 'rgb(193,17,25)',
        'whiteColor': 'white',
        'mobileBorder': 'rgba(128,128,128,0.7)',
        'downloading': '#0071eb',
        'Question': 'rgb(45,45,45)',
        'QuestionHover': 'rgb(65,65,65)',
        'FooterLink': 'rgba(255,255,255,0.7)',
        'inputbg': 'rgba(15,15,15,0.7)',
        'moviePageBg': '#181818',
      },
      backgroundImage: {
        'banner': "url(assets/bannerimage.jpg)",
        'inputGradiant': 'linear-gradient(to right, rgb(118, 118, 118), rgb(133, 133, 133))',
        "opacity_layer_black": "linear-gradient(180deg, rgba(4, 21, 45, 0)0%, black 79.17%)",

      },
      backgroundColor: {
        'lightblack': 'rgba(0,0,0,0.5)',
        'vactorLine': 'rgb(35,35,35)'
      },
      screens: {
        'ims': '200px',
        'sms': '380px',
        'mms': '480px',
        'tablet': '640px',
        'md': '850px',
        'laptop': '1024px',
        'miniDesk': '1140px',
        'desktop': '1280px',
      },

      boxShadow: {
        "section": "rgba(0,0,0,0.2) 2px 2px 2px 7px",
        'search': "0px 0px 7px 4px rgba(0,0,0,0.5)"
      }

    },
  },
  plugins: [],
}

