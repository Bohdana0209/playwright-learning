import BasePage from "../main/BasePage.js";
import { expect, test } from "@playwright/test";

export default class GaragePage extends BasePage {
  _carCardSelector = "div.car";

  constructor(page) {
    super(page, "/panel/garage");
    this.page = page;

    this.addCarBtn = page.getByRole("button", { name: "Add Car" });

    this.addCarPopupContainer = page.locator(".modal-content");
    this.brandSelect = this.addCarPopupContainer.getByLabel("Brand");
    this.modelSelect = this.addCarPopupContainer.getByLabel("Model");
    this.mileageInput = this.addCarPopupContainer.getByRole("spinbutton", {
      name: "Mileage",
    });
    this.submitAddCarBtn = this.addCarPopupContainer.getByRole("button", {
      name: "Add",
    });
  }


  _getCarCard({ brand, model }) {
    return this.page
      .locator(this._carCardSelector, { hasText: brand })
      .filter({ hasText: model });
  }

  _getCarMileageInput(cardLocator) {
    return cardLocator.locator('[name="miles"]');
  }


  async openAddCarPopup() {
    await this.addCarBtn.click();
    await expect(this.addCarPopupContainer).toBeVisible();
  }

  async fillAddCarForm({ brand, model, mileage }) {
    await test.step(
      `Create a new car (Brand: ${brand}, Model: ${model})`,
      async () => {
        await this.brandSelect.selectOption(brand);
        await this.modelSelect.selectOption(model);
        await this.mileageInput.fill(mileage);
      }
    );
  }

  async createCar({ brand, model, mileage }) {
    await this.openAddCarPopup();
    await this.fillAddCarForm({ brand, model, mileage });
    await this.submitAddCarBtn.click();
  }

  async assertCarBrand({ brand, model, expected }) {
    const card = this._getCarCard({ brand, model }).last();
    await expect(card, "Car should have valid brand").toContainText(expected);
  }

  async assertCarModel({ brand, model, expected }) {
    const card = this._getCarCard({ brand, model }).last();
    await expect(card, "Car should have valid model").toContainText(expected);
  }

  async assertCarMileage({ brand, model, expected }) {
    const card = this._getCarCard({ brand, model }).last();
    const mileageInput = this._getCarMileageInput(card);
    await expect(
      mileageInput,
      "Mileage should be valid"
    ).toHaveValue(expected);
  }
}