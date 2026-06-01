import test from "@playwright/test";
test("using page fixture",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(6000)
})