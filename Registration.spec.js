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

    //await page.waitForTimeout(2000);

    //  Click the Hospital Service nav button
    const hospitalNavBtn = page.locator("//button[contains(.,'Hospital Service')]");
    await expect(hospitalNavBtn).toBeVisible();
    await hospitalNavBtn.click();
    console.log('✅ 3. Hospital Service nav clicked');

    //await page.waitForTimeout(2000);

    //  Click the Out Patient Department nav button
    const opdNavBtn = page.locator("//button[contains(.,'Out Patient')]");
    await expect(opdNavBtn).toBeVisible();
    await opdNavBtn.click();
    console.log('✅ 4. Out Patient Department nav clicked');

    //await page.waitForTimeout(2000);

    //  Click the OPD Services nav button
    const opdServiceBtn = page.locator("//button[contains(.,'OPD Services')]");
    await expect(opdServiceBtn).toBeVisible();
    await opdServiceBtn.click();
    console.log('✅ 5. OPD Services nav clicked');

    //await page.waitForTimeout(2000);

    //  Click the Patient List nav button
    const patientListLink = page.locator("//a[normalize-space(text())='Patient List']");
    await expect(patientListLink).toBeVisible();
    await patientListLink.click();
    console.log('✅ 6. Patient List nav clicked');

    //await page.waitForTimeout(2000);

    const addBtn = page.locator("(//div[@class='btnAllRow btnAllRow-bg']//button)[2]");
    await expect(addBtn).toBeVisible();  // ensure it's visible
    await addBtn.click();
    console.log('✅ 7. Add button clicked');
    //await page.waitForTimeout(2000);

    //  Select a value from Service Category dropdown
    const serviceCategorySelect = page.locator("(//div[@class='row required']//select)[1]");
    await expect(serviceCategorySelect).toBeVisible();
    // Option select by visible text
    await serviceCategorySelect.selectOption({ label: 'Student' });
    console.log('✅ 8. service Category Select button clicked');
    //await page.waitForTimeout(3000);

    //  Select Prefix -> N/A
    const prefixInput = page.locator("(//div[@class='ng-input']//input)[1]");
    await prefixInput.click();
    const prefixOption = page.locator("//span[text()='N/A']");
    await prefixOption.click();
    console.log('✅ 9. Prefix selected: N/A');
    //await page.waitForTimeout(2000);


    //  Select Rank "N/A"
    const rankInput = page.locator("(//div[@class='ng-input']//input)[2]");
    await rankInput.click();
    const rankOption = page.locator("//span[text()='AFMC Student']");
    await rankOption.click();
    console.log('✅ 10. Rank selected: AFMC Student');
    //await page.waitForTimeout(2000);

    //  Personal No
    const personalNo1 = page.locator("(//div[contains(@class,'row required')]//input)[3]");
    const personalNo2 = page.locator("//input[contains(@class,'form-control col-md-2')]/following-sibling::input[1]");

    await expect(personalNo1).toBeVisible();
    await personalNo1.fill('Student');
    await expect(personalNo2).toBeVisible();
    await personalNo2.fill('109');
    console.log('✅ 11. Rank selected: AFMC Student');
    await page.waitForTimeout(1000);

    //  Name
    const Name = page.locator("(//div[@class='row required']//input)[1]");
    await expect(Name).toBeVisible();
    await Name.fill('Mehedi Hasan');
    console.log('✅ 12. Rank selected: AFMC Student');
    await page.waitForTimeout(1000);

    //  Select Units"
    const Unit = page.locator("(//div[@class='ng-input']//input)[3]");
    await Unit.click();
    const UnitOption = page.locator("//span[text()='AFD']");
    await UnitOption.click();
    console.log('✅ 13. Rank selected: AFD');
    await page.waitForTimeout(1000);

    //  Select Eligibility Status"
    const eligibilityStatusSelect = page.locator("(//div[@class='row required']//select)[2]");
    // wait until visible
    await expect(eligibilityStatusSelect).toBeVisible();
    // select by visible text
    await eligibilityStatusSelect.selectOption({ label: 'Others' });
    console.log('✅ 14. Eligibility Status selected: Others');
    await page.waitForTimeout(1000);

    //  Select Category of Person Status"
    const categoryofPerson = page.locator("//div[text()='Select person category']/following-sibling::div");
    await categoryofPerson.click();
    const categoryofPersonOption = page.locator("//span[text()='SKS']");
    await categoryofPersonOption.click();
    console.log('✅ 15. Rank selected: SKS');
    await page.waitForTimeout(1000);

    //  Select Branch Status"
    const Branch = page.locator("//div[text()='Select corps']/following-sibling::div");
    await Branch.click();
    const BranchOption = page.locator("//span[text()='Med']");
    await BranchOption.click();
    console.log('✅ 15. Rank selected: Med');
    await page.waitForTimeout(1000);

    // ✅ 16 Set Joining Date
    const joiningDateInput = page.locator("(//div[@class='row required']//input)[2]");
    await expect(joiningDateInput).toBeVisible();

    // format: YYYY-MM-DD (most common)
    await joiningDateInput.fill('2024-01-01');
    console.log('✅ 16. Joining Date selected: 2024-01-01');
    await page.waitForTimeout(2000);

    // ✅ 17 Date of Birth
    const dateofBirth = page.locator("(//div[@class='row required']//input)[3]");
    await expect(dateofBirth).toBeVisible();

    // format: YYYY-MM-DD (most common)
    await dateofBirth.fill('2001-06-09');
    console.log('✅ 17. Joining Date selected: 2024-01-01');
    await page.waitForTimeout(2000);

    // ✅ 18 Select Gender (Radio)
    const genderRadio = page.locator("(//label[contains(@class,'radio-inline col-md-3')]//input)[1]");
    await expect(genderRadio).toBeVisible();

    // select radio button
    await genderRadio.check();
    console.log('✅ 18. Gender radio selected');
    await page.waitForTimeout(2000);

    // ✅ 19 NID No
    const NID = page.locator("//label[text()='National ID']/following-sibling::input");
    await expect(NID).toBeVisible();
    await NID.fill('88888810000');
    console.log('✅ 19. NID No');
    await page.waitForTimeout(2000);


    // ✅ 20 Select Nationality
    const NationalitySelect = page.locator("(//div[@class='row']//select)[3]");
    // wait until visible
    await expect(NationalitySelect).toBeVisible();
    // select by visible text
    await NationalitySelect.selectOption({ label: 'Bangladeshi' });
    console.log('✅ 20. Nationality Status selected: Bangladeshi');
    await page.waitForTimeout(1000);

    // ✅ 21 Select Blood Group
    const BloodGroupSelect = page.locator("//label[text()='Blood Group']/following-sibling::select");
    // wait until visible
    await expect(BloodGroupSelect).toBeVisible();
    // select by visible text
    await BloodGroupSelect.selectOption({ label: 'B+' });
    console.log('✅ 21. Blood Group Status selected: B+');
    await page.waitForTimeout(1000);

    // ✅ 22 Select Marital Status
    const MaritalStatusSelect = page.locator("(//div[@class='row required']//select)[3]");
    // wait until visible
    await expect(MaritalStatusSelect).toBeVisible();
    // select by visible text
    await MaritalStatusSelect.selectOption({ label: 'Unmarried' });
    console.log('✅ 22. Marital Status Status selected: Unmarried');
    await page.waitForTimeout(1000);

    // ✅ 23 Select Religion Status
    const ReligionSelect = page.locator("//label[text()='Religion']/following-sibling::select");
    // wait until visible
    await expect(ReligionSelect).toBeVisible();
    // select by visible text
    await ReligionSelect.selectOption({ label: 'Islam' });
    console.log('✅ 23. Marital Status Status selected: Islam');
    await page.waitForTimeout(1000);

    // ✅ 24 Identity Mark
    const IdentityMark = page.locator("(//label[normalize-space(text())='Identity Mark']/following::input)[1]");
    await expect(IdentityMark).toBeVisible();
    await IdentityMark.fill('Yes');
    console.log('✅ 24. Identity Mark');
    await page.waitForTimeout(2000);

    // ✅ 25 Select Medical Category Status
    const MedicalCategorySelect = page.locator("//label[text()='Medical Category']/following-sibling::select");
    // wait until visible
    await expect(MedicalCategorySelect).toBeVisible();
    // select by visible text
    await MedicalCategorySelect.selectOption({ label: 'B' });
    console.log('✅ 25. Medical Category Status Status selected: B');
    await page.waitForTimeout(1000);


    // ✅ 26 Extension
    //const usernameInput = page.locator("input[formcontrolname='userName']");
    const Extension = page.locator("(//li[@class='yearMonthLi']//input)[1]");
    await expect(Extension).toBeVisible();
    await Extension.fill('1');

    const Extension1 = page.locator("(//li[@class='yearMonthLi']//input)[2]");
    await expect(Extension1).toBeVisible();
    await Extension1.fill('6');
    console.log('✅ 26. Extension');
    await page.waitForTimeout(2000); // 

    // ✅ 27 Click the Early retirement
    await page.click("//div[contains(@class,'form-group form-check')]//input[1]");
    await page.waitForTimeout(2000);
    console.log('✅ 27. Early retirement');

    // ✅ 28 Dt. retirement.
    const DateRetirement = page.locator("(//span[normalize-space(text())='Month']/following::input)[2]");
    await expect(DateRetirement).toBeVisible();
    await DateRetirement.fill('6');
    console.log('✅ 28. Extension');
    await page.waitForTimeout(2000); // 


    // ✅ 29 Click the Present Address
    const PresentAddress = page.locator("(//div[@class='row']//textarea)[1]");
    await expect(PresentAddress).toBeVisible();
    await PresentAddress.fill('Shewrapara Mirpur, Dhaka');
    await page.waitForTimeout(2000);
    console.log('✅ 29. Early retirement');

    // ✅ 30 Select Present District
    const PresentDistrict = page.locator("(//div[text()='Select District']/following-sibling::div)[1]");
    await PresentDistrict.click();
    const PresentDistrictOption = page.locator("//span[text()='Dhaka']");
    await PresentDistrictOption.click();
    console.log('✅ 30. Present District selected: Dhaka');
    await page.waitForTimeout(2000);

    // ✅ 31 Same as Present
    await page.click("//div[contains(@class,'form-check form-check-inline')]//input[1]");
    await page.waitForTimeout(2000);
    await page.click("//div[contains(@class,'form-check form-check-inline')]//input[1]");
    await page.waitForTimeout(2000);
    console.log('✅ 31. Same as Present');


    // ✅ 32 Select Permanent Address
    const PermanentAddress = page.locator("//div[contains(@class,'row marginRight0')]//textarea[1]");
    await expect(PermanentAddress).toBeVisible();
    await PermanentAddress.fill('Baliatali Union, Barguna Sadar, Barguna');
    await page.waitForTimeout(2000);
    console.log('✅ 32. Permanent Address');


    // ✅ 33 Select Permanent District
    const PermanentDistrict = page.locator("(//div[text()='Select District']/following-sibling::div)[3]");
    await PermanentDistrict.click();
    const PermanentDistrictOption = page.locator("//span[text()='Barguna']");
    await PermanentDistrictOption.click();
    console.log('✅ 30. Present District selected: Barguna');
    await page.waitForTimeout(2000);


    // ✅ 34 Select Contact No
    const ContactNo = page.locator("//label[text()='Contact No']/following-sibling::input");
    await expect(ContactNo).toBeVisible();
    await ContactNo.fill('01616060242');
    await page.waitForTimeout(2000);
    console.log('✅ 34. ContactNo');

    // ✅ 35 Select Contact No
    const ContactNo2 = page.locator("//label[text()='Contact No2']/following-sibling::input");
    await expect(ContactNo2).toBeVisible();
    await ContactNo2.fill('01725385333');
    await page.waitForTimeout(2000);
    console.log('✅ 35. ContactNo');

    // ✅ 36 Select Email
    const Email = page.locator("//div[@class=' row']//input[1]");
    await expect(Email).toBeVisible();
    await Email.fill('mdmehedihas9n@gmail.com');
    await page.waitForTimeout(2000);
    console.log('✅ 36. Email');

    // ✅ 37 Select NOK Relation Status
    const NOK_Relation = page.locator("//label[text()='NOK Relation']/following-sibling::select");
    // wait until visible
    await expect(NOK_Relation).toBeVisible();
    // select by visible text
    await NOK_Relation.selectOption({ label: 'Father' });
    console.log('✅ 37. NOK Relation Status selected: Father');
    await page.waitForTimeout(1000);

    // ✅ 38 Select NOK Name
    const NOK_Name = page.locator("//label[text()='NOK Name']/following-sibling::input");
    await expect(NOK_Name).toBeVisible();
    await NOK_Name.fill('Md Panna Mia');
    await page.waitForTimeout(2000);
    console.log('✅ 38. NOK Name');

    // ✅ 39 Select NOK_Address
    const NOK_Address = page.locator("(//div[@class='row']//textarea)[3]");
    await expect(NOK_Address).toBeVisible();
    await NOK_Address.fill('Baliatali Union, Barguna Sadar');
    await page.waitForTimeout(1000);
    console.log('✅ 39. NOK Address');

    // ✅ 40 Select NOK Contact
    const NOK_Contact = page.locator("//label[text()='NOK Contact']/following-sibling::input");
    await expect(NOK_Contact).toBeVisible();
    await NOK_Contact.fill('01725385333');
    console.log('✅ 40. NOK Contact');

    // ✅ 41 🖼️ Picture upload using Select button
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.locator("//button[contains(.,'Select')]").click()
    ]);

    await fileChooser.setFiles(
      'C:/Users/mh295/Downloads/Mehedi Hasan (1).jpg'
    );

    console.log('✅41. Picture uploaded successfully from Downloads');


    // ✅ 42  Delete 
    const  DeleteBtn = page.locator("//button[normalize-space(text())='Delete']");
    await expect(DeleteBtn).toBeVisible();
    await DeleteBtn.click();
    console.log('✅ 42. Delete successful');

    //   ✅ 43 Save  
    const  SaveBtn = page.locator("//button[normalize-space(text())='Save']");
    await expect(SaveBtn).toBeVisible();
    await SaveBtn.click();
    console.log('✅ 1. SaveBtn successful');

    console.log('✅ Test completed');
    await page.close();


  });

});
