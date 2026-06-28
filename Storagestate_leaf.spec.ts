import test from "@playwright/test";

test('implement Storagestate for leaftaps',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("democsr")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    //storagestate
    await page.context().storageState({path:"Helper/Leaftaps_Login.json"})
})