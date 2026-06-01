import test,{expect} from "@playwright/test";

test('Go with Assertion',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    const enabled = page.getByPlaceholder('Babu Manickam')
    await expect.soft(enabled).toBeDisabled({timeout:10000})
    console.log('Assertion Passed')

})