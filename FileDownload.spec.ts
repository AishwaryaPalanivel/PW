import { test } from "@playwright/test";
import path from "path";

test('Learn File Download', async ({ page }) => {
    await page.goto('https://leafground.com/file.xhtml');

    const [temp] = await Promise.all([
        page.waitForEvent('download', { timeout: 10000 }),
        page.locator("//span[text()='Download']").click()
    ]);

    await temp.saveAs(
        path.join("uploadfile", temp.suggestedFilename())
    );

    console.log("Downloaded:", temp.suggestedFilename());
});