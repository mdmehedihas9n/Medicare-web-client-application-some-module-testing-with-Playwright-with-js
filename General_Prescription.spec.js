// tests/Text Box.spec.js
import { test, expect } from '@playwright/test';

test.describe('Sign In Elements Tests', () => {

    test('Should login and navigate to Patient List successfully', async ({ page }) => {

        //  Navigate to the Medicare Web Client login page
        await page.goto('http://115.127.218.89:8787/medicare-web-client-v2/#/login');
        await page.waitForTimeout(2000);

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
        const hospitalCard = page.locator("//p[normalize-space(text())='Hospital Service']");
        await expect(hospitalCard).toBeVisible();
        await hospitalCard.click();
        console.log('✅ 2. Hospital Service clicked');
        await page.waitForTimeout(2000);

        //  Click the  Prescription System  nav button
        const PrescriptionSystem = page.locator("//button[normalize-space(text())='Prescription System']");
        await expect(PrescriptionSystem).toBeVisible();
        await PrescriptionSystem.click();
        console.log('✅ 3. Prescription System nav clicked');
        await page.waitForTimeout(2000);

        //  Click the  Prescription nav button
        const Prescription = page.locator("//button[normalize-space(text())='Prescription']");
        await expect(Prescription).toBeVisible();
        await Prescription.click();
        console.log('✅ 4.  Prescription nav clicked');
        await page.waitForTimeout(2000);

        //  Click the  Prescription nav button
        const PrescriptionList = page.locator("//a[normalize-space(text())='Prescription']");
        await expect(PrescriptionList).toBeVisible();
        await PrescriptionList.click();
        console.log('✅ 5.  Prescription nav clicked');
        await page.waitForTimeout(2000);

        //  Click the  Room nav button
        const Rooms = page.locator("//a[normalize-space(text())='Isolation Room - 02 (LT COL ALAMGIR RASHID)']");
        await expect(Rooms).toBeVisible();
        await Rooms.click();
        console.log('✅ 6. Room click');
        await page.waitForTimeout(2000);

        //  Click the work list button
        const workList = page.locator("//a[normalize-space(text())='Work List']");
        await expect(workList).toBeVisible();
        await workList.click();
        console.log('✅ 7. work list');
        await page.waitForTimeout(2000);


        //  Click the Quick Appt button
        const Quick_Appt = page.locator("//button[@tooltip='Quick Appointment']");
        await expect(Quick_Appt).toBeVisible();
        await Quick_Appt.click();
        console.log('✅ 8. Room click');
        await page.waitForTimeout(2000);

        //  Click the Patient Id filed
        const PatientId = page.locator("//div[contains(@class,'input-group mb-2')]//input[1]");
        await expect(PatientId).toBeVisible();
        await PatientId.fill('BD-2001'); 
        console.log('✅ 9. Patient Id');
        await page.waitForTimeout(2000);

        //  Click the Profile Id filed
        const ProfileId = page.locator("//button[@class='dropdown-item active']//h5[1]");
        await expect(ProfileId).toBeVisible();
        await ProfileId.click(); 
        console.log('✅ 10. Profile Id filed');
        await page.waitForTimeout(2000);

        //  Click the  Add to Queue 
        const  AddtoQueue = page.locator("//button[normalize-space(text())='Add to Queue']");
        await expect(AddtoQueue).toBeVisible();
        await AddtoQueue.click(); 
        console.log('✅ 11.  Add to Queue ');
        await page.waitForTimeout(2000);

        //  Click the  Pop-up button
        const  Pop_up = page.locator("//button[normalize-space(text())='Yes']");
        await expect(Pop_up).toBeVisible();
        await Pop_up.click(); 
        console.log('✅ 11. Pop-up button');
        await page.waitForTimeout(5000);

        console.log('✅ Test completed');
        await page.close();


    });

});