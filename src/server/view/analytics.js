export default () => {
  return `
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109842587-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-109842587-1');
    </script>   
  `;
};
