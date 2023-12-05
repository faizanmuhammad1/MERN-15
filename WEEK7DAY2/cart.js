const arr = [
  {
    id: 1,
    name: "Battlefield",
  },
  {
    id: 2,
    name: "Red Redemption",
  },
];

const cart = {};

const addToCard = ({ id, name }) => {
  if (cart[id]) {
    card[id]++;
  } else {
    cart[id] = { id, name, qty: 1 };
  }
};

addToCard(arr[0]);

addToCard(arr[1]);

const removeFromCart = ({ id }) => {
  if (cart[id]) {
    delete cart[id];
  }
};

removeFromCart(arr[0]);

console.log(cart);
