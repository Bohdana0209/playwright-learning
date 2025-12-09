import { profileFixture } from "../../src/customFixtures/userProfileFixture.js";

profileFixture.describe("Profile mock", () => {
  profileFixture("Should mock /api/users/profile and verify UI", async ({ page, profilePage }) => {
      await page.route("**/api/users/profile", async (route) => {
        const original = await route.fetch(); 

        const mockedJson = {
          status: "ok",
          data: {
            name: "Bohdana",
            lastName: "ChelombytkoQA",
            photo: null,
          },
        };

        await route.fulfill({
          response: original,
          json: mockedJson,
        });
      });

      await profilePage.navigate();

      await profilePage.assertProfileName("Bohdana ChelombytkoQA");
    }
  );
});
