const {test} = require('@playwright/test')
const { log } = require('console')

//reading test data from json files
const jdata = require('../abn_assignment_testdata/assignmentData.json')
const wdata = require('../abn_assignment_testdata/assignmentData_negative.json')

//calling page as objects
const loginpage = require('../ABN_Assignment_Pages/loginpage')
const homepage = require('../ABN_Assignment_Pages/homePage')

//function to verify pages and login and log out of single page application using POM and data driven concepts.
test("Single Page HTML Application", async function ({page}) 
{
    await page.goto("file:///Users/gautamprasad/Downloads/testautomation-web/index.html")
    const loginPage=new loginpage(page)
    await loginPage.verifyLoginPage()
    await loginPage.incorrectLoginCreds(wdata.user,wdata.pwd)
    await loginPage.loginToApplication(jdata.user,jdata.pwd)
    const homePage=new homepage(page)
    await homePage.verifyHomePage()
    await homePage.logoutofapplication()
})

// check-broken-links
const path = require('path');

test('Check broken external links in local HTML file', async ({ page }) => {
  const filePath = path.resolve(__dirname, 'file:///Users/gautamprasad/Downloads/testautomation-web/index.html'); 
  await page.goto('file:///Users/gautamprasad/Downloads/testautomation-web/index.html');

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




