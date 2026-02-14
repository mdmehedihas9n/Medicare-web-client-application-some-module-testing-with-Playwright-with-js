# Medicare-web-client-application-some-module-testing-with-Playwright-with-js
On this website, I have worked on Authentication, Registration, OPD Appointment, and General Prescription, and tested them with automation scripts.

# Playwright Automation Testing Project

This repository contains end-to-end automation test scripts written using **Playwright**.  
The project focuses on testing core healthcare workflows with proper reporting.

## 🛠️ Tech Stack

- **Automation Tool:** Playwright
- **Language:** JavaScript
- **IDE:** Visual Studio Code (VS Code)
- **Test Runner:** Playwright Test
- **Reporting:** Playwright HTML Report

## 📦 Playwright Setup

### 1️⃣ Prerequisites
Make sure the following are installed on your machine:
- Node.js 
- npm
- Visual Studio Code

Install dependencies:
- npm install

Install Playwright browsers:

- npx playwright install


💻 Using Visual Studio Code (VS Code)

Recommended VS Code extensions:

- Playwright Test for VS Code

- JavaScript (ES6) code snippets

- Prettier (optional)

Open project in VS Code:


🧪 Test Modules Covered

- Automation scripts are written for the following modules:

✅ 1. Authentication

- Login functionality

- Valid and invalid credential scenarios

- Navigation after successful login

✅ 2. Registration

- Patient registration form automation

- Dropdowns, radio buttons, date picker

- Picture upload from local machine

- Form validation and submission

✅ 3. OPD Appointment

- OPD service navigation

- Appointment creation

- Patient selection and scheduling

- Appointment confirmation

✅ 4. General Prescription

- Prescription creation

- Medicine selection

- Diagnosis and notes

- Save and verification

Run all tests:

- npx playwright test

Run tests in headed mode:

- npx playwright test --headed

📊 Test Report

After test execution, generate and view the HTML report:

- npx playwright show-report


The report includes:

- Passed / Failed test cases

- Screenshots on failure

- Execution time

- Detailed logs

📁 Project Structure

project-root/

│

├─ tests/

│      ├─ authentication/

│      ├─ registration/

│      ├─ opd-appointment/

│      ├─ prescription/

│

├─ playwright.config.js

├─ package.json

└─ README.md

🚀 Purpose of This Project

- Practice real-world automation testing using Playwright

- Cover complete healthcare workflow automation

- Improve test reliability and reporting

- Follow industry-standard automation practices

👤 Author

Md. Mehedi Hasan

QA / SQA Engineer

Automation Testing with Playwright
