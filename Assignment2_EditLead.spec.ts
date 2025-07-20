import test, { expect } from '@playwright/test'
//import { TIMEOUT } from 'dns'
/**
 *Assignment: 1 Create a Lead
 * 1. Navigate to the url http://leaftaps.com/opentaps/control/main
 * 2. Enter the username as ‘Demosalesmanager’
 * 3. Enter the password as ‘crmsfa’
 * 4. Click the Login button
 * 5. Click CRM/SFA
 * 6. Click Leads
 * 7. Click Create Lead
 * 8. Fill the Company Name
 * 9. Fill the First Name
 * 10. Fill the Last Name
 * 11. Fill the Salutation
 * 12. Fill the Title
 * 13. Fill the Annual Revenue
 * 14. Fill the Department
 * 15. Fill the Phone number
 * 16. Click Create Lead button
 * 17. Verify the company name, first name, last name and the status
 * 18. Get the page title
 */

test.fixme("Assignment: 2 Edit a Lead", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('//input[@id="username"]').fill("Demosalesmanager")
    await page.locator('//input[@id="password"]').fill("crmsfa")
    await page.waitForTimeout(2000)
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.waitForTimeout(2000)
    page.getByText("CRM/SFA").click()
    await page.waitForTimeout(5000)
    //check lead is present
    // await expect(page.getByRole('link', { name: 'Leads' })).toBeVisible()
    await expect(page.locator('//a[contains(@href,"leadsMain")]')).toBeVisible()
    await page.waitForTimeout(2000)
    await page.locator('//a[contains(@href,"leadsMain")]').click()
    await page.waitForTimeout(2000)
    await page.locator('//a[contains(@href,"createLeadForm")]').click()
    await page.waitForLoadState('load', { timeout: 2000 })
    await page.locator('#createLeadForm_companyName').fill("CompanyName")
    await page.waitForTimeout(3000)
    await page.locator('#createLeadForm_firstName').fill('Vijayalakshmi')
    await page.waitForLoadState('load', { timeout: 3000 })
    await page.locator('#createLeadForm_lastName').fill("K")
    await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_departmentName').fill("Testing")
    await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("1234567890")
    await page.waitForTimeout(2000)
    await page.locator('//input[@name="submitButton"]').click()

    await expect(page.locator('//span[@id="viewLead_companyName_sp"]')).toHaveText('CompanyName')
    expect(page.locator('//span[text() ="Vijayalakshmi"]')).toHaveText('Vijayalakshmi')
    expect(page.locator('//span[@id="viewLead_lastName_sp"]')).toHaveText('K')
    expect(page.locator('//span[@id="viewLead_statusId_sp"]')).toBeVisible()
    const pageTitle = await page.title()
    console.log("The Page title is: ",pageTitle)
    await page.waitForTimeout(5000)


})