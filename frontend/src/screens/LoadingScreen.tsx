import React, { useEffect, useState } from 'react';
import '../styles.css'; // Import your CSS file

const LoadingScreen = () => {
   const [animate, setAnimate] = useState(false);
   const [dotCount, setDotCount] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setAnimate((prevAnimate) => !prevAnimate);
      }, 2000);

      return () => {
         clearInterval(timer);
      };
   }, []);

   useEffect(() => {
      const timer = setInterval(() => {
         setDotCount((prevCount) => (prevCount + 1) % 4);
      }, 500);

      return () => {
         clearInterval(timer);
      };
   }, []);

   const getLoadingText = () => {
      const dots = '.'.repeat(dotCount);
      return `Loading${dots}`;
   };

   return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
         <div className="loading-container">
            {animate ? (
               <div className="loading-text">{getLoadingText()}</div>
            ) : (
               <pre className="loading-logo">
                  {"╔═╗─╔╗\n"}
                  {"║║╚╗║║\n"}
                  {"║╔╗╚╝╠══╦═╦══╦╦══╦══╦╗╔╦══╗\n"}
                  {"║║╚╗║║╔╗║╔╣╔═╬╣══╣══╣║║║══╣\n"}
                  {"║║─║║║╔╗║║║╚═╣╠══╠══║╚╝╠══║\n"}
                  {"╚╝─╚═╩╝╚╩╝╚══╩╩══╩══╩══╩══╝\n\n\n\n"}
               </pre>
            )}
         </div>

         <pre className="absolute bottom-30 -mb-20" style={{ fontSize: '12px' }}>
            {`Developed by Mesan Tech`}
         </pre>
      </div>
   );
};

export default LoadingScreen;
