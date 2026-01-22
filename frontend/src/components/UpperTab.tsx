import React, { useEffect, useState } from "react";

function UpperTab() {
  const [search, setSearch] = useState("");
  //   let searchQuery = "";
  console.log(search);
  return (
    <div className="UpperTab">
      <img
        src="https://static.eneba.games/branding/v2/logoFull.svg"
        alt="eneba logo"
        width="155"
        // height="100"
      ></img>
      <span>Games, Gift Cards, Top-Ups & More | Best Deals</span>
      <form>
        <input
          placeholder="Search"
          //   onChange={(e) => {
          //     let searchQuery = e.target.value;
          //   }}
        ></input>
      </form>
    </div>
  );
}

export default UpperTab;
