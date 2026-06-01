import test, { chromium, webkit } from "@playwright/test";

test("Launch multiple-browsers",async()=>{
    const edgebrowser = await chromium.launch({ channel: 'msedge', headless: false });
    const edgecontext = await edgebrowser.newContext();
    const edgepage = await edgecontext.newPage();
    await edgepage.goto("https://www.redbus.in/");
    await edgepage.waitForTimeout(5000);
    // Get title and URL
    const redBusTitle = await edgepage.title();
    const redBusURL = edgepage.url();

    console.log('----- RED BUS (EDGE) -----');
    console.log('Title:', redBusTitle);
    console.log('URL:', redBusURL);
    console.log("======================");

    //Webkit
    const webkitBrowser = await webkit.launch({ headless: false });
    const webkitcontext = await webkitBrowser.newContext();
    const webkitpage=await webkitcontext.newPage();
    await webkitpage.goto("https://www.flipkart.com/")
    const flipkartTitle=await webkitpage.title()
    const flipkartUrl=webkitpage.url()
    console.log('----- FLIPKART (Webkit) -----');
    console.log('Title:', flipkartTitle);
    console.log('URL:', flipkartUrl);
    
})