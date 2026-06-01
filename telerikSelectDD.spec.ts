import test from "@playwright/test";

test('select DropDown',async({page})=>{
    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("select[name='DropdownListFieldController_0']",{label:'Renewal'})
    await page.selectOption("select[name='DropdownListFieldController']",{label:'Kendo UI'})
    await page.selectOption("select[name='DynamicListFieldController']",{label:'India'})
    await page.waitForTimeout(5000)
})