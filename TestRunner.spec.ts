import test from "@playwright/test";

test('Test Methods',async({page})=>{
await page.goto("https://www.linkedin.com/")
const title=await page.title()
console.log(title)
})
// test.only('Test Method',async({page})=>{
// await page.goto("https://www.facebook.com/")
// const title=await page.title()
// console.log(title)
// })
test.skip('Test skip',async({page})=>{
await page.goto("https://www.facebook.com/")
const title=await page.title()
console.log(title)
})
test.fail(`SF Login`,async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
})
test.fixme('login page with css fix me', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2")
    await page.locator("input[name='PASSWORD']").fill("crmsfa")
    await page.locator("input[class='decorativeSubmit']").click()
    // await page.waitForTimeout(5000)
    await page.locator(`text='CRM/SFA'`).click()

});
test('Test info', async ({ page }) => {
    test.info().annotations.push({type:'Testing',description:"smoke testing"},{type:'author',description:"dilip"})
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2")
    await page.locator("input[name='PASSWORD']").fill("crmsfa")
    await page.locator("input[class='decorativeSubmit']").click()
    // await page.waitForTimeout(5000)
    await page.locator(`text='CRM/SFA'`).click()

});