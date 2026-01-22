import React, { useEffect, useState } from "react";

function GameList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/games")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>game_name</th>
          <th>image_ulr</th>
          <th>platform</th>
          <th>price</th>
          <th>region</th>
          <th>likes</th>
          <th>discount</th>
        </thead>
        <tbody>
          {data.map((d, index) => (
            // <img src={d.image_ulr}></img>
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.game_name}</td>
              <td>
                <img src={d.image_url} alt="image"></img>
              </td>
              <td>{d.platform}</td>
              <td>{d.price}</td>
              <td>{d.region}</td>
              <td>{d.likes}</td>
              <td>{d.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameList;
