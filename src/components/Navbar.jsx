import React from "react";

export default function Navbar() {
   return (
      <nav className="navbar navbarStyle py-3 border-bottom-1">
         <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">
               <img src="/images/profile.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top ms-5 me-2 " />
               portfolio.rp
            </a>
         </div>
      </nav>
   )
}