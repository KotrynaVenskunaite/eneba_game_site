import { useEffect, useState } from "react";
import Fuse from "fuse.js";

function GameComponent(props: any) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://enebaapi.emoking.lol/games")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const fuse = new Fuse(data, {
    keys: ["game_name_search"],
    threshold: 0.5,
    includeScore: true,
  });

  const fuseResult = fuse.search(props.query);

  function calculatePrice(originalPrice: any, percentage: any) {
    let price = originalPrice - originalPrice * (percentage / 100);

    return Math.round(price * 100) / 100;
  }

  let searchResult = props.query
    ? fuseResult.map((fuseResult) => fuseResult.item)
    : data;

  let searchNumber = props.query ? fuseResult.length : -1;
  console.log(searchNumber);

  function imageSource(platform: any) {
    switch (platform) {
      case "Steam":
        return "https://products.eneba.games/drms/v1/steam.svg";
      case "Riot Games":
        return "https://products.eneba.games/products/Riot Games-1678098507.svg";
      case "Rockstar Games Launcher":
        return "https://products.eneba.games/products/rockstar_social_club-1687431187.svg";
      case "Xbox Live":
        return "https://products.eneba.games/drms/v1/xbox.svg";
    }
  }

  return (
    <>
      <div className="ResultsFound">
        {fuseResult.length > 0 && (
          <span>Results found: {fuseResult.length}</span>
        )}
      </div>
      <div className="gameContainer">
        {searchResult.map((d, index) => (
          <div key={index} className="mainGameFrame">
            <div className="gameImage">
              <img src={d.image_url} alt="image"></img>
            </div>

            <div className="infoFrame">
              {d.is_cashback === 1 ? (
                <div className="cashbackFrame">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#svg-18cf84541850d46718ea7beaaffdc9fc__a)">
                      <path
                        d="M6.55768 14.5095C8.12445 14.8566 9.76387 14.6269 11.1749 13.8626C12.586 13.0983 13.674 11.8506 14.2392 10.3487C14.8044 8.84672 14.8088 7.1913 14.2517 5.68633C13.6946 4.18137 12.6134 2.92785 11.2065 2.15593C9.79954 1.384 8.1614 1.14548 6.59277 1.48414C5.02415 1.8228 3.6303 2.71594 2.66718 3.99953C1.70407 5.28313 1.23625 6.87109 1.34969 8.47182C1.46308 10.0726 2.15012 11.5787 3.28463 12.7137L4.37371 13.8028M1.47198 13.8013H4.37233V10.901"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 5.33398V8.00065V10.6673"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M5.33301 8H10.6663"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="svg-18cf84541850d46718ea7beaaffdc9fc__a">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div>CASHBACK</div>
                </div>
              ) : null}

              <div className="platformFrame">
                <img
                  src={imageSource(d.platform)}
                  alt="platform image"
                  height="15"
                  style={{ marginRight: 5 }}
                ></img>
                <span className="platformText">{d.platform}</span>
              </div>
              <div className="bottomFrame">
                <div className="gameInfo">
                  <span className="gameName">{d.game_name}</span>
                  <span className="gameRegion">{d.region}</span>
                </div>
                <div className="priceInfo">
                  <div className="discountFrame">
                    <span>From </span>
                    {d.discount > 0 && (
                      <span>
                        <span className="priceOld"> {d.price}€</span>
                        <span className="discountColor"> -{d.discount}%</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="finalPrice">
                      {calculatePrice(d.price, d.discount)}€
                    </span>
                  </div>
                  <div className="cashbackInfo">
                    {d.is_cashback === 1 && (
                      <span>Cashback: {d.cashback_price}€</span>
                    )}
                  </div>
                </div>
                <div className="likes">
                  <svg
                    viewBox="0 0 24 24"
                    height="50"
                    width="50"
                    // xmlns="http://www.w3.org/2000/svg"
                    // strokeWidth="1.5"
                    className="heartIcon"
                    // display="none"
                  >
                    <path
                      d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
                      fill="none"
                      stroke="gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="likeNumber">{d.likes}</span>
                </div>
                <div className="hoverNote">
                  <span>{d.hover_note}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GameComponent;
