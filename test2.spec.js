// Scenario 1 : AMAZON.IN

// -> Launch amazon.in
// -> Search for rc cars 
// -> In suggestions click on rc cars drift
// -> click on 5th product
// -> click on quantity drop down
// -> change the quantity into 5
// ->click on ADD TO CART
// -> click on go to cart
// ->now click on (-) to delete one product 
// ->Print Final price



// Scenario 2: QSPIDERSDEMOAPP

// -> open : https://demoapps.qspiders.com/ui?scenario=1
// -> Click on Popups
// -> Click on Browser windows
// -> Click on view more of Laptops
// -> Click  on Add to Cart for 3 times
// -> Check whether the cart count was increased to 3 or not
// -> Click on Cart icon
// -> Print the length of cart and validate whether it is equal to 3 or not


// Scenario 2
//  -> Launch : https://demoqa.com/login
// -> Click on new user button
// -> fill first name, and copy the first name
// ->paste firstname in username
// ->Fill password (Note: In password use capital , small, special symbols also give atleat 10 letters)
// -> Click on login
// ->Now click on back to login
// -> validate whethrt the Books:  page opened or not
// -> validate whther the username accepted is same as you given or not
// ->Click on goto book store
// ->Click on Learning Java Script Design patterns books
// ->Print subtitle and total pages of it
// ->Click on logout 
// ->check whether the Welocome page displayed or not




// import {test} from "@playwright/test";

import { test, expect } from '@playwright/test';

test.only('Amazon RC Car Scenario', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    let searchBox = page.locator('[id="twotabsearchtextbox"]');
    await searchBox.fill('rc cars');
    await page.waitForTimeout(3000);
   for (let i = 0; i < 10; i++) {
        await page.keyboard.press('ArrowDown');
        let value = await searchBox.inputValue();
        if (value.toLowerCase() === 'rc cars drift') {
            await page.keyboard.press('Enter');
            break;
        }
    }
    await page.waitForTimeout(3000);
   
    let [page1]= await  Promise.all([page.waitForEvent('popup'), await page.locator('(//div[@data-component-type="s-search-result"])[5]').click()]);
    await page1.locator('(//span[@data-action="a-dropdown-button"])[1]').click();
    await page1.waitForTimeout(1000)
    await page1.locator('[id="quantity_4"]').click();
    await page.waitForTimeout(2000);
    await page1.locator('[id="add-to-cart-button"]').click();
    await page.waitForTimeout(2000);
    await page1.locator('[href="/cart?ref_=sw_gtc"]').click();
//     await page1.waitForEvent("load")
    await page1.locator('[data-a-selector="decrement-icon"]').click();
    await page1.waitForTimeout(3000);
   let a= await page1.locator('(//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap"])[2]').textContent();
   console.log(a);
});


test('QSPIDERSDEMOAPP',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.locator('//*[@id="root"]/div/div[2]/div/aside/div/div[2]/div/ul/li[3]').click()
    await page.locator('(//li[@class="no-use relative hover:bg-orange-50"])[3]').click();
    await page.waitForTimeout(2000);
    let [page1]= await  Promise.all([page.waitForEvent('popup'), await page.locator('(//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"])[2]').click()]);
    await page1.waitForTimeout(1000);
    await page1.locator('//button[text()="Add to Cart"]').click({clickCount:3})
    await page1.waitForTimeout(3000);
   let b= await page1.locator('//*[@id="root"]/section/section/article').textContent();
   expect(b).toBe("3")
   await page1.locator('[stroke="currentColor"]').click();
   await page1.waitForTimeout(3000);

let total=await page1.locator('//div[@class="flex items-center justify-between p-4 border rounded-lg"]').all()
    console.log(total.length);
    await expect(total.length).toBe(3)


})





test("qspiderdemo",async({page})=>{
    await page.goto("https://demoqa.com/login")
    await page.locator('//button[text()="New User"]').click()
    await page.locator('[id="firstname"]').fill("mukeshkumar")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.locator('[id="lastname"]').fill("SS")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.locator('[id="password"]').fill("Mukesh@2006")
    await page.locator('[id="register"]').click()
    await page.locator('[id="gotologin"]').click()
    await page.locator('[placeholder="UserName"]').fill("mukesh")
    await page.locator('[placeholder="Password"]').fill("Mukesh@2006")
    await page.locator('[id="login"]').click()
    await page.waitForTimeout(2000)
   let d = await page.locator('(//label[@id="userName-label"])[1]').textContent()
   expect(d).toBe("Books : ")
   await page.waitForTimeout(2000)
   let f = await page.locator('[id="userName-value"]').textContent()
   expect(f).toBe("mukesh")
    await page.waitForTimeout(2000)
    await page.click('[id="gotoStore"]')
    await page.click('//span[@id="see-book-Learning JavaScript Design Patterns"]/a')
    let a = await page.locator('(//div[@class="col-md-9 col-sm-12"])[2]').textContent();
    console.log(a);
    let b = (await page.locator('(//div[@class="col-md-9 col-sm-12"])[6]').textContent());
    console.log(b);
    await page.click('[id="submit"]')
    let c = await page.locator('//form[@id="userForm"]//h2').textContent()
    expect(c).toBe("Welcome,")
    await page.waitForTimeout(2000)
        
})