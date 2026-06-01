import test from "@playwright/test";

test("learn Xpath",async({page})=>{
     await page.goto("https://leaftaps.com/opentaps/control/main");
     await page.locator("//input[@id='username']").fill("democsr2")
     await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
     await page.locator("//input[@class='decorativeSubmit']").click()
     await page.locator(`text='CRM/SFA'`).click()
})
