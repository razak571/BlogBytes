import React from "react";

function Logo({ width = "100px", color }) {
  return (
    <>
      {/* <img src="/logo.svg" alt="alt" /> */}
      <div style={{ color: color }}>Logo</div>
    </>
  );
}

export default Logo;
