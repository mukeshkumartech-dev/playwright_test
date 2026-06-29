// 1. Amazon – Search History Validation 
// Viewport: 1366 × 768
// Launch Amazon.
// Set viewport.
// Enter "Laptop".
// Press Enter.
// Navigate back.
// Validate search box still contains "Laptop".
// Read search value.
// Assert value equals "Laptop".


// 2. Demo WebShop

// Set viewport to 1366 x 780
// Launch demowebshop application
// click on Digital downloads
// click on music 2  Having actual price of 10.00
// Verify that shopping cart was increased it's count or not
// Open the shopping cart
// target the quantity input field and change that 1 to 3
// Hit Enter button 
//  and verify that total price was changed to 30 or not price

// 3. Blinkit – Search and Clear
// Launch Blinkit.
// Enter "Chocolate".
// Validate value entered.
// Clear textbox.
// Validate textbox empty.
// Enter "Juice".
// Capture value.
// Assert value equals "Juice".



// 4. Blinkit – Keyboard Shortcut Scenario

// Enter "ButterMilk".
// Press Ctrl+A.
// Press Ctrl+X.
// Verify field empty.
// Press Ctrl+V.
// Verify text restored.
// Take screenshot.
// Assert value equals ButterMilk.
// Hit On Enter
// Add Slurrp Farm Banana Chocochip Pancake Mix to cart
// Add  Hershey's Hazelnut Syrup 
// validate that cart count was increased or not
// print the total cart price


// 5. Saucedemo validation
// Launch SauceDemo.
// Leave username empty.
// Leave password empty.
// Click Login.
// Capture error message.
// Verify error displayed.
// Verify message length > 5.
// Assert validation.
// Now Give Correct credentials and Login
//  Click Sauce Labs Fleece Jacket to add to cart using traversing



// import {expect, test} from "@playwright/test";

// test.use({
//     viewport:{
//         width:1366,
//         height:768
//     }
// })

// test("amazon",async({page})=>{
//   await page.setViewportSize({
//   width: 640,
//   height: 480,
// });
//     await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_8g2yck1fbx_e&adgrpid=1316117075550739&hvadid=82257647677724&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=116072&hvtargid=kwd-82258246510655:loc-90&hydadcr=14451_2461903&mcid=94da0048b1513895b9dcc63223dbf030");
//     await page.waitForTimeout(3000);
//     await page.locator(`//input[@placeholder="Search Amazon.in"]`).fill("Laptops");
//     await page.waitForTimeout(3000);
//     await page.keyboard.press("Enter");
//     await page.waitForTimeout(3000);
// await page.goBack();


//      let a=await page.locator(`//input[@placeholder="Search Amazon.in"]`).inputValue();
// expect(a).toBe("Laptops") 
// })
// Error: expect(received).toBe(expected) // Object.is equality

    // Expected: "Laptops"
    // Received: ""






//2

// test.use({
//     viewport:{
//         width:1366,
//         height:768
//     }
// })
// test("demo",async({page})=>{
//       await page.setViewportSize({
//   width: 1366,
//   height: 768,
// });
    
// await page.goto("https://demowebshop.tricentis.com/");
// await page.locator(`//ul[@class="top-menu"]/li[5]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`(//h2[@class="product-title"])[2]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`(//input[@value="Add to cart"])[1]`).click();
// await page.waitForTimeout(3000);
// let a=await page.locator(`//span[@class="cart-qty"]`).textContent();
// expect(a).toBe("(1)")
// await page.locator(`//span[text()="Shopping cart"]`).click();
// await page.waitForTimeout(3000);
// await page.locator(`//input[@value="1"]`).click();
// await page.keyboard.press("Control+A");
// await page.keyboard.press("Control+x");
// await page.locator(`//input[@value="1"]`).click()
// await page.keyboard.type("3");
// await page.keyboard.press("Enter")
// await page.waitForTimeout(3000);
// let b=await page.locator(`//span[@class="product-subtotal"]`).textContent();
// expect(b).toBe("30.00");


// })




// //3
// test("blinkit",async({page})=>{
//     await page.goto("https://blinkit.com/")
//    await page.locator(`//button[.="Detect my location"]`).click();

//    await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//          await page.waitForTimeout(2000);

//      await  page.locator('[placeholder="Search for atta dal and more"]').fill('Chocolate');
//     let a= await page.locator(`[placeholder="Search for atta dal and more"]`).inputValue();
//       await page.waitForTimeout(3000);

//     expect(a).toBe("Chocolate");
//     await page.waitForTimeout(3000);

//      await page.locator(`//input[@placeholder="Search for atta dal and more"]`).clear();
//      let b=await page.locator(`//input[@placeholder="Search for atta dal and more"]`).textContent();
//     await page.waitForTimeout(3000);
// expect(b).toBe("");
//  await page.locator(`//input[@placeholder="Search for atta dal and more"]`).fill("juice");
//  await page.screenshot({path:"screenshot/blinkit.jpg"});
//     await page.waitForTimeout(3000);
//  let c=await page.locator(`//input[@placeholder="Search for atta dal and more"]`).inputValue();

//  expect(c).toBe("juice");
//     await page.waitForTimeout(3000);
// })

// // Running 1 test using 1 worker
// //   1 passed (30.8s)




// //4

// test("fast",async({page})=>{
//     await page.goto("https://blinkit.com/");
// await page.locator(`//button[.="Detect my location"]`).click();

//       await page.locator('[class="SearchBar__AnimationWrapper-sc-16lps2d-1 iJnYYS"]').click();
//          await page.waitForTimeout(2000);

//      await  page.locator('[placeholder="Search for atta dal and more"]').fill('pancake');
//       await page.waitForTimeout(3000);
//       await page.keyboard.press("Control+A");
//       await page.keyboard.press("Control+x");
// let b=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(b).toBe("");
// await page.keyboard.press("Control+V");
// let r=await  page.locator('[placeholder="Search for atta dal and more"]').inputValue();
// expect(r).toBe("pancake");
// await page.screenshot({path:"screenshot/blink.jpg"});
// await  page.keyboard.press("Enter")
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[4]`).click();
// await page.locator(`(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[5]`).click();

// let x=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][1]`).textContent();
// expect(x).toBe( "2 items");
// let y=await page.locator(`//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][2]`).textContent();
// console.log(y);
// })

// //  ₹305
// //   1 passed (21.4s)



// //5
// test("souce",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator(`//input[@type="submit"]`).click();
//     await page.waitForTimeout(3000);
//     await page.screenshot({path:"screenshot/error.jpg"});
//    let a= await page.locator(`//h3[.="Epic sadface: Username is required"]`).textContent();
// expect(a).toBe("Epic sadface: Username is required");
// expect(a.length).toBeGreaterThan(5);
// await page.locator(`//input[@id="user-name"]`).fill("standard_user");
// await page.waitForTimeout(3000);
// await page .locator(`//input[@id="password"]`).fill("secret_sauce");
// await page.waitForTimeout(3000);
//     await page.locator(`//input[@type="submit"]`).click();

// // await page.locator('(//button[@class="btn btn_primary btn_small btn_inventory "])[4]').click();
// await page.locator("//div[text()='Sauce Labs Fleece Jacket']/ancestor::div[@class='inventory_item']//button").click();
// await page.waitForTimeout(3000);


// })
