import test from "@playwright/test";
test.use({storageState:"Helper/Leaftaps_Login.json"})
test('Navigate to home page', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.getByRole('link', { name: 'CRM/SFA' }).click()
});