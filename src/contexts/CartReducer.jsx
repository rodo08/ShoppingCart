export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase": {
      const indexIncrease = state.findIndex((p) => p.id === action.id);
      state[indexIncrease].quantity += 1;

      return [...state];
    }

    case "Decrease": {
      const indexDecrease = state.findIndex((p) => p.id === action.id);
      state[indexDecrease].quantity -= 1;

      return [...state];
    }

    default:
      return state;
  }
};

export default CartReducer;
