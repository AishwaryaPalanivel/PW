import test from "@playwright/test";
test.use({storageState:"Helper/SF_Login.json"})
test('Use Storage State',async({page})=>{
    
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
    await page.locator("(//span[text()='Accounts'])[1]").click()
})

test('Navigate to Contacts',async({page})=>{
    
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
    await page.locator("(//span[text()='Contacts'])[1]").click()
})
