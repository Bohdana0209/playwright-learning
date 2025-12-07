import {test as setup} from "@playwright/test"
import MainPage from "../../src/pageObjects/main/MainPage.js";

setup("Login as user", async ({page, context}) => {
    const userCredentials = {
        email: "bohdanatest@gmail.com",
        password: "Password1!"
    }

    const mainPage = new MainPage(page)
    await mainPage.navigate()
    await mainPage.loginWithCredentials(userCredentials)

    await context.storageState({
        path: 'state/userStorageState.json'
    })
})