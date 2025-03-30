import React, { Fragment, useEffect, useState } from "react";

const Footer = () => {
   const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);
  
  if (!isMounted) return null; 

  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
        @Surjava 2025
      </div>
    </Fragment>
  );
};

export default Footer;
