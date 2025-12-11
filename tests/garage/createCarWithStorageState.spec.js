import { userFixture } from "../../src/customFixtures/userGaragePage.js";

userFixture.describe("Garage", () => {
  userFixture("Create car — simple test", async ({ garagePage }) => {

  const car = {
    brand: "Audi",
    model: "TT",
    mileage: "15000",
  };

  await garagePage.createCar(car);

  await garagePage.assertCarBrand({
    brand: car.brand,
    model: car.model,
    expected: car.brand,
  });

  await garagePage.assertCarModel({
    brand: car.brand,
    model: car.model,
    expected: car.model,
  });

  await garagePage.assertCarMileage({
    brand: car.brand,
    model: car.model,
    expected: car.mileage,
  });
});
});