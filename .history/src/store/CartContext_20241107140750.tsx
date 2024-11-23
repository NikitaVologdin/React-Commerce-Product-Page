export const cartContext = createContext<ICartContext>({
  items: [{ title: "", price: 0, quantity: 0, discount: 0, id: "" }],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});
