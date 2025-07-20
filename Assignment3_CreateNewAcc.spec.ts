import test, { expect } from "@playwright/test";




test("Create a new lead",async({page})=>{
   await page.goto("https://login.salesforce.com/")
   await page.getByLabel("Username").fill("dilip@testleaf.com")
   await page.waitForTimeout(1000)
   await page.getByLabel("Password").fill("Leaf@123")
   await page.locator('//input[@id="Login"]').click()
   await page.waitForTimeout(2000)

   // const pageTitle1 = await page.title()
   // console.log(pageTitle1)
   // await page.waitForTimeout(2000)
   // const urlVal =await page.url()
   // console.log(urlVal)
   // await page.waitForTimeout(2000)

   // locate App Launcher

   await page.locator('//div[@class="slds-icon-waffle"]').click()
   await page.getByText("View All").click()
   await page.waitForLoadState("load",{timeout:5000})
   await page.getByPlaceholder("Search apps or items...").fill('Service')
   await page.waitForTimeout(5000)
   await page.locator('//p[contains(text(),"Manage customer service with accounts")]').click()
   await page.waitForTimeout(5000)
   await page.locator('//span[@class="slds-truncate"]').nth(3).click()
   await page.waitForTimeout(5000)
   await page.getByRole("button",{name:"New"}).click()
   await page.waitForTimeout(5000)
 //  await page.locator('//div[contains(@class,"-input-has-icon slds-input-has-icon_left")]').first().fill('Viji')
 await page.locator('//input[@class="slds-input"]').nth(1).fill('Viji')
 await page.waitForTimeout(2000)
 await page.locator('//button[text()="Save"]').click()

 await page.waitForTimeout(8000)

 expect(page.locator('//div[@class="pageLevelErrors"]')).toBeVisible()
 //expect(page.locator('//div[@class="pageLevelErrors"]')).toHaveText('storage limit exceeded')

 expect(page.locator('//li[text()="storage limit exceeded"]')).toHaveText('storage limit exceeded')

 await page.waitForTimeout(6000)

    
})