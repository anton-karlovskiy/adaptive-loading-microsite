
const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, monospace'
  },
  colors: {
    text: '#fff',
    background: '#202124'
  },
  logo: {
    src: '/images/icons/f-analytics.svg',
    alt: 'green analytics graph'
  },
  linkHoveringEffect: `
    transition: color .1s cubic-bezier(.4,0,.2,1);
  `,
  imageHoveringEffect: `
    box-shadow: 0 0 0 1px rgba(255,255,255,.16);
    transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
  `
};

export default theme;
