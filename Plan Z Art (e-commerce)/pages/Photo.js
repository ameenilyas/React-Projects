import React, { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  FavoriteBorder,
  FavoriteOutlined,
  ShoppingBasketSharp,
} from "@material-ui/icons";
import "./Photo.css";
import { useStateValue } from "../StateProvider";

const Photo = forwardRef(
  ({ id, img, isFavorite, ButtonHide, addedFavorite }, ref) => {
    const [favorite, setFavorite] = useState(isFavorite || false);
    const [{ favorites }, dispatch] = useStateValue();

    const handleClick = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: { id, img, favorite, price },
      });
    };

    const handleDelete = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: { id, img, favorite, price },
      });
    };

    const handleFavorite = () => {
      !favorite
        ? dispatch({
            type: "ADD_TO_FAVORITE",
            item: { id, img, addedFavorite, price },
          })
        : dispatch({
            type: "REMOVE_FROM_FAVORITE",
            id,
          });
      setFavorite(!favorite);
    };

    const useStyles = makeStyles({
      root: {
        maxWidth: 400,
        width: "60vw",
      },
      media: {
        height: 180,
      },
    });

    const classes = useStyles();

    let price = 5.99;
    return (
      <div ref={ref} className="photo">
        <Card className={`${classes.root} photos__photo`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            {!ButtonHide ? (
              <>
                <IconButton
                  disabled={addedFavorite}
                  onClick={handleFavorite}
                  size="small"
                  color="default"
                >
                  {addedFavorite ? (
                    <FavoriteOutlined />
                  ) : favorite ? (
                    <FavoriteOutlined />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
                <IconButton onClick={handleClick} size="large" color="inherit">
                  <ShoppingBasketSharp />
                </IconButton>
                <h4>{price}$</h4>
              </>
            ) : (
              <Button className="photo__remove" onClick={handleDelete}>
                TRASH
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
);
export default Photo;
