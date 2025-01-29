import React from "react";

function Footer() {
  return (
    <footer className="py-4 border-t border-zinc-800">
      <div className="container mx-auto px-4 text-center text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} Fahim Shahriyer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
