import test, { expect } from '@playwright/test'
import { request } from 'node:http'
let username='admin'
let pass='AupH4z@O+Hp5'
let login=`${username}:${pass}`
let loginValue=btoa(login)
console.log(loginValue)
let Sys_id:any
test('SN Create incident',async({request})=>{
    //pass end point url,header info
    const postResponse=await request.post('https://dev324532.service-now.com/api/now/table/incident',{
       headers: {
        //contenttype,authentication
        "Content-Type":"application/json",
        "Authorization":`Basic ${loginValue}`
       },
       //request body
       data:{
        "short_description":"Playwright with API Using Request Fixture"
       }
    })
    //validation
    let response= await postResponse.json()
    let Sys_id=response.result.sys_id
    console.log(Sys_id)
    
    console.log(postResponse.status())
    expect(postResponse.status()).toBe(201)

    //get request
    const getResponse = await request.get(`https://dev324532.service-now.com/api/now/table/incident/${Sys_id}`, {
       headers: {
        "Content-Type":"application/json",
        "Authorization":`Basic ${loginValue}`
       }
    })
    let response_get=await getResponse.json()
    console.log(response_get)

    expect(getResponse.status()).toBe(200)
    //patch-header,data->status
    const patchResponse=await request.patch('https://dev324532.service-now.com/api/now/table/incident/3df1487283e1cb54237b5ec6feaad321',{
       headers: {
        //contenttype,authentication
        "Content-Type":"application/json",
        "Authorization":`Basic ${loginValue}`
       },
       //request body
       data:{
        "short_description":"Using Request Fixture we are learning Playwright with API"
       }
       })
       let response_patch=await patchResponse.json()
    console.log(response_patch)
    expect(patchResponse.status()).toBe(200)
    //delete-header->status
        const deleteResponse=await request.delete('https://dev324532.service-now.com/api/now/table/incident/3df1487283e1cb54237b5ec6feaad321',{

      headers: {
        //contenttype,authentication
        "Content-Type":"application/json",
        "Authorization":`Basic ${loginValue}`
       }
      })
         let response_delete=await deleteResponse.json()
    console.log(response_delete)
})