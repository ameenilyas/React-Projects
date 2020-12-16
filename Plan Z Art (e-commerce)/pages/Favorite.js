import React from "react";
import "./Cart.css";
import FlipMove from "react-flip-move";
import Photo from "./Photo";
import { useStateValue } from "../StateProvider";

function Favorites() {
  const [{ favorites }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <FlipMove>
        {favorites.length > 0 ? (
          favorites?.map((favorite) => (
            <Photo
              key={favorite?.id}
              id={favorite?.id}
              img={favorite?.img}
              //   isFavorite={favorite?.isFavorite}
              addedFavorite
            />
          ))
        ) : (
          <h1>Choose Your Favourite Pictures To Add On Gallery</h1>
        )}
      </FlipMove>
    </div>
  );
}

export default Favorites;
