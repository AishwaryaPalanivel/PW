import test from "@playwright/test";

test('Learn Select Dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    //select tag with option
    await page.selectOption('.ui-selectonemenu',{label:'Playwright'})
    await page.waitForTimeout(5000)
    //non select tag with option
    await page.locator("label[class='ui-selectonemenu-label ui-inputfield ui-corner-all']").first().click()
    await page.locator("li[data-label='USA']").click()
    await page.waitForTimeout(5000)
})