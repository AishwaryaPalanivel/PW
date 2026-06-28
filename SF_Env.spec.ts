import test from '@playwright/test'
import dotenv from 'dotenv'


const value = dotenv.config({path:'Helper/SF_LoginQA.env'})
test(`SF Login ENV`,async({page})=>{
    let url=process.env.SF_Url as string
    let username=process.env.SF_Username as string
    let password=process.env.SF_Password as string
    await page.goto(url)
    await page.locator('#username').fill(username)
    await page.locator('#password').fill(password)
    await page.locator('#Login').click()
})