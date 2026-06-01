import test,{expect} from "@playwright/test";

test('Go with Assertion',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    const enabled = page.getByPlaceholder('Babu Manickam')
    await expect.soft(enabled).toBeDisabled({timeout:10000})
    console.log('Assertion Passed')

})
test.only('non retry assertion',async({page})=>{
await page.goto('https://leafground.com/select.xhtml')
const pagetitlevalue=await page.title()
console.log(pagetitlevalue)
expect.soft(pagetitlevalue).toEqual('Select components')
console.log('Assertion Passed')
})