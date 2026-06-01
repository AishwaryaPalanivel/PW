import test from "@playwright/test";

test("Login to SalesForce Application",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator("input[name='pw']").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(12000)
    const pagetitle=await page.title()
    const pageURL=await page.url()
    await page.locator("div[class='slds-icon-waffle']").click()
    console.log("Title of the page is:=>"+pagetitle)
    console.log("Current URL is:=>"+pageURL)
    
})
