import { userFixture } from "../../src/customFixtures/userGaragePage.js";
userFixture.describe("use storage state @my-label", () => {

    userFixture('Create car', async ({page, garagePage}) => {

        await userFixture.step("Verify created car details", async () => {
            await page.pause()
        })
    })
})