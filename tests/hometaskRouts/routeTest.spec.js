import { profileFixture } from "../../src/customFixtures/userProfileFixture.js";

const mockedProfile = {
  status: "ok",
  data: {
    name: "Bohdana",
    lastName: "ChelombytkoQA",
    photo: null,
  },
};

profileFixture.describe("Profile mock", () => {
  profileFixture(
    "Should mock /api/users/profile and verify UI",
    async ({ page, profilePage }) => {
      await page.route("**/api/users/profile", async (route) => {
        const original = await route.fetch();

        await route.fulfill({
          response: original,
          json: mockedProfile,
        });
      });

      await profilePage.navigate();

      const expectedFullName = `${mockedProfile.data.name} ${mockedProfile.data.lastName}`;
      await profilePage.assertProfileName(expectedFullName);
    }
  );
});
