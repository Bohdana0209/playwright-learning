import { baseCustomFixture as base } from "./baseCustomFixture.js";
import ProfilePage from "../pageObjects/profile/ProfilePage.js";

export const profileFixture = base.extend({
  page: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: "state/userStorageState.json",
    });

    const page = await context.newPage();
    await use(page);

    await context.close();
  },

  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);
    await use(profilePage);
  },
});
