export const initialState = {
  basket: [],
  income: 50000,
};

export let income = 0,
  expense = 0;

export const TotalExpense = (basket) => {
  let e = 0,
    i = 0;
  basket.map((item) => {
    console.log(item.amount, "amount");
    if (item.amount >= 0) {
      i += Number(item.amount);
      return (income = i);
    } else {
      e += Number(item.amount);
      expense = e;
    }
  });
  console.log(income, expense);
  return basket?.reduce((amount, item) => Number(item.amount) + amount, 0);
};

const reducer = (state, action) => {
  console.log(state, "State");
  console.log(action, "Action");
  switch (action.type) {
    case "EXPENSE":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let basket = [...state.basket];
      const newBasket = basket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

// const reducer = (state, action) => {
//   console.log(state);
//   switch (action.type) {
//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         basket: [],
//       };
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };
//     case "REMOVE_FROM_BASKET":
//       const index = state.basket.findIndex((data) => data.id === action.id);
//       let newBasket = [...state.basket];
//       newBasket.splice(index, 1);
//       console.log(newBasket, "newBasket");
//       return {
//         ...state,
//         basket: newBasket,
//       };
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
