import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const initialState = {
  cartItems: [],
};

export const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== payload),
      };
    default:
      return state;
  }
};
