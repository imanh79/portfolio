import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__copyright container'>
          <Link href={"https://github.com/imanh79"} style={{ textDecoration: "none" }}>
            <i className='fa-brands fa-github' style={{ color: "white" }}></i>
            <p style={{ color: "white", display: "inline", marginLeft: "1rem" }}>
              Developed by Iman♡
            </p>{" "}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
