export const initialState = {
  images: [],
  basket: [],
  favorites: [],
};

export const getBasketTotal = (basket) =>
  basket.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PHOTOS":
      return {
        ...state,
        images: action.data,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_TO_FAVORITE":
      let newFavorite = [...state.favorites];
      newFavorite = newFavorite.filter(
        (favorite) => favorite.id !== action.item.id
      );
      return {
        ...state,
        favorites: [...newFavorite, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      let basketIndex = newBasket.findIndex((item) => item.id === action.id);
      newBasket.splice(basketIndex, 1);
      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_FROM_FAVORITE":
      let newFavorites = [...state.favorites];
      let favIndex = newFavorites.findIndex((item) => item.id === action.id);
      newFavorites.splice(favIndex, 1);
      return {
        ...state,
        favorites: newFavorites,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
