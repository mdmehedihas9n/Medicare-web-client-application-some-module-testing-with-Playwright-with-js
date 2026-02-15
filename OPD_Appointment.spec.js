// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('Sign In Elements Tests', () => {

    test('Should login and navigate to Patient List successfully', async ({ page }) => {

        //  Navigate to the Medicare Web Client login page
        await page.goto('http://115.127.218.89:8787/medicare-web-client-v2/#/login');

        //  Login
        const usernameInput = page.locator("input[formcontrolname='userName']");
        const passwordInput = page.locator("input[formcontrolname='password']");
        const submitBtn = page.locator("button[type='submit']");

        await expect(usernameInput).toBeVisible();
        await usernameInput.fill('SQA2');
        await page.waitForTimeout(2000);

        await expect(passwordInput).toBeVisible();
        await passwordInput.fill('123456');

        await expect(submitBtn).toBeVisible();
        await submitBtn.click();
        console.log('✅ 1. Login successful');
        await page.waitForTimeout(2000); //  

        //  Click the Hospital Service card
        const hospitalCard = page.locator("//p[contains(text(),'Hospital')]");
        await expect(hospitalCard).toBeVisible();
        await hospitalCard.click();
        console.log('✅ 2. Hospital Service clicked');

        await page.waitForTimeout(2000);

        //  Click the Hospital Service nav button
        const hospitalNavBtn = page.locator("//button[contains(.,'Hospital Service')]");
        await expect(hospitalNavBtn).toBeVisible();
        await hospitalNavBtn.click();
        console.log('✅ 3. Hospital Service nav clicked');

        await page.waitForTimeout(2000);

        //  Click the Out Patient Department nav button
        const opdNavBtn = page.locator("//button[contains(.,'Out Patient')]");
        await expect(opdNavBtn).toBeVisible();
        await opdNavBtn.click();
        console.log('✅ 4. Out Patient Department nav clicked');

        await page.waitForTimeout(2000);

        //  Click the OPD Services nav button
        const opdServiceBtn = page.locator("//button[contains(.,'OPD Services')]");
        await expect(opdServiceBtn).toBeVisible();
        await opdServiceBtn.click();
        console.log('✅ 5. OPD Services nav clicked');

        await page.waitForTimeout(2000);

        //  Click the Receptions Rooms nav button
        const Receptions_Rooms = page.locator("(//div[@class='dropdown-container']//a)[1]");
        await expect(Receptions_Rooms).toBeVisible();
        await Receptions_Rooms.click();
        console.log('✅ 6. Receptions Rooms');
        await page.waitForTimeout(5000);

        //  Open the CVS Center
        const CVS_Center = page.locator("(//span[@class='departmentGo'])[1]");
        await expect(CVS_Center).toBeVisible();
        await CVS_Center.click();
        console.log('✅ 7. Open CVS Center');
        await page.waitForTimeout(2000); //

        // fileter the Patient Id
        const Patient_Id = page.locator("//div[contains(@class,'input-group mb-2')]//input[1]");
        await expect(Patient_Id).toBeVisible();
        await Patient_Id.fill('BD-2001');
        console.log('✅ 8. Type Patient Id');
        await page.waitForTimeout(2000); //

        // Click the Patient Profile
        const Profile = page.locator("//button[contains(@class,'dropdown-item active')]//h5[1]");
        await expect(Profile).toBeVisible();
        await Profile.click();
        console.log('✅ 9. Open Patient Profile');
        await page.waitForTimeout(5000); //

        //  Select a Opd Room dropdown
        const Opd_Room = page.locator("(//div[@class='input-group']//select)[1]");
        await expect(Opd_Room).toBeVisible();
        // Option select by visible text
        await Opd_Room.selectOption({ label: 'CVS Doctor Station' });
        console.log('✅ 10. service Category Select button clicked');
        await page.waitForTimeout(3000);

        //  Select a Priority dropdown
        const Priority = page.locator("(//div[@class='input-group']//select)[2]");
        await expect(Priority).toBeVisible();
        // Option select by visible text
        await Priority.selectOption({ label: 'Urgent' });
        console.log('✅ 11. service Category Select button clicked');
        await page.waitForTimeout(3000);

        // Click the  Add to Queue 
        const AddtoQueue = page.locator("//button[normalize-space(text())='Add to Queue']");
        await expect(AddtoQueue).toBeVisible();
        await AddtoQueue.click();
        console.log('✅ 12. Open Patient Profile');
        await page.waitForTimeout(2000); //

        // Click the  Pop-Up
        const Pop_Up = page.locator("//button[normalize-space(text())='Yes']");
        await expect(Pop_Up).toBeVisible();
        await Pop_Up.click();
        console.log('✅ 13. Open Patient Profile');
        await page.waitForTimeout(2000); //


        console.log('✅ Test completed');
        await page.close();


    });

});
