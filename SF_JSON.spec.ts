import test from "@playwright/test";
import logindata from "../../Helper/SF.json"
// for(let SFLogin of logindata){
let SFLogin=logindata[0]
test(`SF Login.${SFLogin.TestId}`,async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill(SFLogin.username)
    await page.locator('#password').fill(SFLogin.password)
    await page.locator('#Login').click()
})
// }