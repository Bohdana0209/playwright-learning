import { expect } from "@playwright/test";
import { apiCarsFixture as apiCars } from "../../src/customFixtures/apiCarsFixture.js";

apiCars.describe.only("POST /api/cars", () => {
  apiCars("Should create car with valid data", async ({ client }) => {
    const response = await client.post(
      "https://qauto.forstudy.space/api/cars",
      {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 122,
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.status).toBe("ok");
    expect(body.data).toMatchObject({
      carBrandId: 1,
      carModelId: 1,
      mileage: 122,
    });
  });

  apiCars("Should NOT create car without carBrandId", async ({ client }) => {
    const response = await client.post(
      "https://qauto.forstudy.space/api/cars",
      {
        data: {
          carModelId: 1,
          mileage: 100,
        },
      }
    );

    expect(response.status()).toBe(400);
  });

  apiCars("Should NOT create car with invalid mileage", async ({ client }) => {
    const response = await client.post(
      "https://qauto.forstudy.space/api/cars",
      {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: -10, 
        },
      }
    );

    expect(response.status()).toBe(400);
  });
});
