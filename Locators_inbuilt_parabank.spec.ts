import test from "@playwright/test";

test("Pw inbuilt Locator",async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.html")
    await page.getByRole('link',{name:'Forgot login info?'}).click()
    await page.getByText('Forgot login info?').click()
    await page.waitForTimeout(3000)
    await page.getByAltText("ParaBank").click()
    await page.getByTitle('ParaBank').click()
    await page.waitForTimeout(3000)
    await page.getByText('Locations').first().click()
 
})