import { calculatePrice, findProductById } from "./utils";

describe("calculatePrice", () => {
  it("should calculate total price and discounted price correctly", () => {
    const products = [
      { price: 10, quantity: 2, discountPercentage: 10 },
      { price: 20, quantity: 1, discountPercentage: 5 },
    ];

    const { totalPrice, discountedPrice } = calculatePrice(products);

    expect(totalPrice).toBe(40);
    expect(discountedPrice).toBe(37);
  });

  it("should handle products without discount correctly", () => {
    const products = [
      { price: 15, quantity: 3 },
      { price: 30, quantity: 2 },
    ];

    const { totalPrice, discountedPrice } = calculatePrice(products);

    expect(totalPrice).toBe(105);
    expect(discountedPrice).toBe(105);
  });

  it("should round up to two decimal places correctly", () => {
    const products = [
      { price: 19.99, quantity: 1, discountPercentage: 0.1 },
      { price: 29.95, quantity: 2, discountPercentage: 0.5 },
    ];

    const { totalPrice, discountedPrice } = calculatePrice(products);

    expect(totalPrice).toBe(79.89);
    expect(discountedPrice).toBe(79.58);
  });
});

describe("findProductById", () => {
  it("should find product by id correctly", () => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    const product = findProductById(products, 2);
    expect(product).toEqual({ id: 2, name: "Product 2" });
  });

  it("should return undefined if product not found", () => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    const product = findProductById(products, 3);
    expect(product).toBeUndefined();
  });

  it("should handle an empty product list", () => {
    const products = [];
    const product = findProductById(products, 1);
    expect(product).toBeUndefined();
  });
});
