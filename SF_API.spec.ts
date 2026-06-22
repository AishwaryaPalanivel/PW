import test from '@playwright/test'
let Access_token:any
let instance_Url:any
let Token_Type:any
let sf_id:any
test('SF E2E',async({request})=>{
    //generate token
    const tokenResponse= await request.post('https://login.salesforce.com/services/oauth2/token',{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
        },
        form:{
            "grant_type":"password",
            "client_secret":"EE7E666EF8204C869125AC8160C78B0F93277C544B84F8B89A0D59AD9FB3AD1C",
            "client_id":"3MVG9dAEux2v1sLs_5LgrWbWWJbMYKRgBajBibwGyik0pC_tXNFGsk6aV8h1owvGj6hsaxRWhzGX5WP1O87h5",
            "username":"manikandanleo4922@agentforce.com",
            "password":"India@2026"
        }
    })
    const response= await tokenResponse.json()
    console.log(response)
    Access_token=response.access_token
    instance_Url=response.instance_url
    Token_Type=response.token_type
    //post request=>account
    const accountResponse=await request.post(`${instance_Url}/services/data/v66.0/sobjects/Accounts`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${Token_Type} ${Access_token}`
        },
        data:{
            "name":"GoodDay Everyone"
        }

    })
const responseAccount= await accountResponse.json()
console.log(responseAccount)
sf_id=responseAccount.id
})
    