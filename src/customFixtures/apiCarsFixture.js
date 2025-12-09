import { baseCustomFixture as base } from "./baseCustomFixture.js";
import { request as playwrightRequest } from "@playwright/test";

export const apiCarsFixture = base.extend({
  client: async ({}, use) => {
    // ⚠️ ВАЖЛИВО: тут ми беремо request з модуля, а не з фікстури
    const client = await playwrightRequest.newContext({
      storageState: "state/userStorageState.json",
      // baseURL можна не ставити, бо в тестах будемо писати повний URL
    });

    await use(client);

    await client.dispose();
  },
});

