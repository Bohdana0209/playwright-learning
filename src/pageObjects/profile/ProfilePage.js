import BasePage from "../main/BasePage.js";
import { expect } from "@playwright/test";

export default class ProfilePage extends BasePage {
  constructor(page) {
    super(page, "/panel/profile");
    this.page = page;

    this.profileName = page.locator("p.profile_name.display-4");
  }

  async assertProfileName(expected) {
    await expect(this.profileName).toHaveText(expected);
  }
}
