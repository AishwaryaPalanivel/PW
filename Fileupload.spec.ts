import { expect, test } from '@playwright/test';

test('upload file using input tag', async ({ page }) => {

    await page.goto('https://leafground.com/file.xhtml');

    await page.locator("(//input[@type='file'])[1]")
        .setInputFiles('./uploadfile/playwright_logo.png');
await page.waitForTimeout(5000)
await expect (page.locator('.ui-fileupload-filename')).toContainText('playwright_logo.png')
});

test.only('upload file w/o input tag using eventListner',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    //https://www.file.io/
    const chooser=page.waitForEvent('filechooser',{timeout: 5000})
    page.locator("//div[@id='drag-drop-upload']").click()
    const catchevent=await chooser
    await catchevent.setFiles("./uploadfile/playwright_logo.png")
    await page.waitForTimeout(5000)
    await expect (page.locator("(//div[@class='dz-filename']/span)[1]")).toContainText('playwright_logo.png')

})
