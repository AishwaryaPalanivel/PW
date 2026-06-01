import test from "@playwright/test";

test('login page with css', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2")
    await page.locator("input[name='PASSWORD']").fill("crmsfa")
    await page.locator("input[class='decorativeSubmit']").click()
    // await page.waitForTimeout(5000)
    await page.locator(`text='CRM/SFA'`).click()

});