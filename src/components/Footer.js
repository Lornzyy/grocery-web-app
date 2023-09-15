import React from "react";
import "../Footer.css";

function Footer(){
    return (
      <>
        <div className="social--icons">
          <span>
            Instagram
            <a href="https://instagram.com/Lornzyy" class="fa fa-instagram"></a>
          </span>
          <span>
            Twitter
            <a href="https://twitter.com/Lornzyy" class="fa fa-twitter"></a>
          </span>
          {/* <span>
            Email
            <a href="#" class="fa fa-email"></a>
          </span> */}
          <span>
            Github
            <a href="https://github.com/Lornzyy" class="fa fa-github"></a>
          </span>
        </div>
      </>
    );
}

export default Footer;