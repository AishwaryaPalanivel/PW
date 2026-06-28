import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

const readValue:any[]= parse(fs.readFileSync('Helper/SF_Login.csv'), {
    columns: true,
    skip_empty_lines: true,
});
for(let login of readValue){
test(`SF Login.${login.testID}`,async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill(login.username)
    await page.locator('#password').fill(login.password)
    await page.locator('#Login').click()
})
}