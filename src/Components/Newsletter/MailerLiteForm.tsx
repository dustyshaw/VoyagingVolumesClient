// import React, { useEffect } from 'react';

// const MailerLiteForm = () => {
//   useEffect(() => {
//     // Dynamically add the MailerLite script
//     const script = document.createElement('script');
//     script.src = 'https://assets.mailerlite.com/js/universal.js';
//     script.async = true;
//     script.onload = () => {
//       window.ml('account', 'XXXXX');
//     };
//     document.body.appendChild(script);

//     return () => {
//       // Clean up the script when the component is unmounted
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="ml-embedded" data-form="XXXXX"></div>
//     </div>
//   );
// };

// export default MailerLiteForm;
