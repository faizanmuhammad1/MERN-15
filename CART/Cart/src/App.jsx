import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState({});
  const products = [
    {
      id: 1,
      name: "Life Boy",
      category: "COSMETIC",
      price: 60,
      availability: 10,
    },
    {
      id: 2,
      name: "Tibbet",
      category: "COSMETIC",
      price: 90,
      availability: 10,
    },
    {
      id: 3,
      name: "Face Wash ",
      category: "COSMETIC",
      price: 10,
      availability: 10,
    },
    {
      id: 4,
      name: "Shan Biryani  ",
      category: "Grocery",
      price: 40,
      availability: 10,
    },
    {
      id: 5,
      name: "Tapal",
      category: "Grocery",
      price: 40,
      availability: 10,
    },
    {
      id: 6,
      name: "Marker",
      category: "STATIONARY",
      price: 120,
      availability: 10,
    },
  ];
  const discountedProducts = products.map((item) => {
    return {
      ...item,
      discount: 50,
      discountPrice: item.price * 0.5,
    };
  });
  const addToCart = (item) => {
    const cartCopy = { ...cart };
    if (cartCopy[item.id]) {
      cartCopy[item.id].qty++;
      cartCopy[item.id].unitPrice =
        cartCopy[item.id].qty * cartCopy[item.id].price;
    } else {
      cartCopy[item.id] = {
        id: item.id,
        qty: 1,
        name: item.name,
        price: item.price,
        discountPrice: item.discountPrice,
        unitPrice: 1 * item.price,
      };
    }
    setCart(cartCopy);

    //
  };
  return (
    <>
      <div className="text-center">Cart</div>
      <div className=" m-8 flex gap-4">
        {Object.keys(cart).map((KeyItem, index) => {
          return (
            <div key={index} className="">
              <img
                className="w-8 h-8 item-center"
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${cart[KeyItem].name}`}
              ></img>
              {cart[KeyItem].name}{" "}
              <span className="">
                {" "}
                {
                  <span
                    className="cursor-pointer "
                    onClick={() => {
                      const copyCart = { ...cart };
                      delete copyCart[KeyItem];
                      setCart(copyCart);
                    }}
                  >
                    🗑️{" "}
                  </span>
                }
              </span>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    const copyCart = { ...cart };
                    copyCart[KeyItem].qty++;
                    setCart(copyCart);
                  }}
                >
                  ➕
                </span>
                <span className="bg-slate-500 rounded-full text-white p-1">
                  {cart[KeyItem].qty}
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    const copyCart = { ...cart };
                    if (copyCart[KeyItem].qty > 1) {
                      copyCart[KeyItem].qty--;
                      setCart(copyCart);
                    } else {
                      delete copyCart[KeyItem];
                      setCart(copyCart);
                    }
                  }}
                >
                  ➖{" "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">Products</div>
      <div className="flex flex-wrap gap-2 mx-4">
        {discountedProducts.map((item, index) => (
          <div className="border-[1px] w-1/5  my-3 p-2 relative" key={index}>
            <div className="absolute right-[-10px] top-[-10px] border-[1px] bg-slate-300 rounded-full p-1">
              {item.discount}%
            </div>
            <div>
              <img
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${item.name}`}
              ></img>

              <div className="flex flex-col">
                <span>{item.name}</span>
                <span>{item.category}</span>
              </div>
              <div className="flex">
                <span>price: ${item.price}</span>
                <span>discounted : ${item.discountPrice}</span>
              </div>
            </div>
            <div className="flex items-center justify-evenly my-3 ">
              <div
                className="addToCart cursor-pointer"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <div className="addToCart cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>

            {/* {JSON.stringify(item)} */}
          </div>
        ))}
      </div>
    </>
  );
}
