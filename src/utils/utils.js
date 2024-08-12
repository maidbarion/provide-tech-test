const calculatePrice = (products) => {
  const totalPriceBeforeDiscount = products.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
  );

  const totalPriceAfterDiscount = products.reduce(
    (total, { price, quantity, discountPercentage = 0 }) => {
      const itemTotal = price * quantity;
      const itemDiscount = itemTotal * (discountPercentage / 100);
      return total + (itemTotal - itemDiscount);
    },
    0,
  );

  const roundUpToTwoDecimalPlaces = (num) => {
    return Math.ceil(num * 100) / 100;
  };

  const totalPrice = roundUpToTwoDecimalPlaces(totalPriceBeforeDiscount);
  const discountedPrice = roundUpToTwoDecimalPlaces(totalPriceAfterDiscount);

  return { totalPrice, discountedPrice };
};

const findProductById = (products, id) => {
  return products.find((product) => product.id === id);
};

export { calculatePrice, findProductById };
