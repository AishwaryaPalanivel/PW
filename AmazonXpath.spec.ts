import test from "@playwright/test";

test('learn amazon based xpath',async({page})=>{
    await page.goto("https://www.amazon.in")
    const search_tab=await page.locator("//input[@id='twotabsearchtextbox']")
    search_tab.fill('iphone')
   search_tab.press('Enter')
    await page.locator("//span[text()='512 GB & above']").click()
    await page.locator("(//button[text()='Add to cart'])[1]").click()
})