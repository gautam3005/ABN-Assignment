const { test } = require('@playwright/test');
const path = require('path');

// Test data
const jdata = require('../abn_assignment_testdata/assignmentData.json');
const wdata = require('../abn_assignment_testdata/assignmentData_negative.json');

// Page Object Models
const LoginPage = require('../ABN_Assignment_Pages/loginpage');
const HomePage = require('../ABN_Assignment_Pages/homePage');

let loginPage;
let homePage;

test.beforeEach(async ({ page }, testInfo) => {
  // Navigate to local HTML file before every test
  await page.goto(`file://${__dirname}/../index.html`);

  // Initialize POMs only for login tests
  if (testInfo.title.includes('Single Page')) {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  }
});

test.afterEach(async ({ page }) => {
  // Example cleanup: clear storage or cookies
  await page.evaluate(() => localStorage.clear());
});

test('Single Page HTML Application', async ({ page }) => {
  await loginPage.verifyLoginPage();
  await loginPage.incorrectLoginCreds(wdata.user, wdata.pwd);
  await loginPage.loginToApplication(jdata.user, jdata.pwd);
  await homePage.verifyHomePage();
  await homePage.logoutofapplication();
});

test('Check broken external links in local HTML file', async ({ page }) => {
  const links = await page.$$('a');

  for (const link of links) {
    const url = await link.getAttribute('href');

    if (url && url.startsWith('http')) {
      const status = await page.evaluate(async (url) => {
        try {
          const res = await fetch(url);
          return res.status;
        } catch {
          return 'FETCH_ERROR';
        }
      }, url);

      console.log(`Checked: ${url} → Status: ${status}`);
      console.assert(status === 200, `❌ Broken link: ${url}`);
    }
  }
});
