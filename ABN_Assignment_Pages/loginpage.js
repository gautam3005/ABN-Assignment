const {expect} = require('@playwright/test')

class loginPage{
    constructor(page)
    {
        this.page=page
        this.emailID=page.locator("//input[@id='email']")
        this.password=page.locator("//input[@id='password']")
        this.loginButton=page.locator("//input[@id='login']")
    }

    //function to login to application
    async loginToApplication(usr,pwd)
    {
        await this.emailID.fill(usr)
        await this.password.fill(pwd)
        await this.loginButton.click()
    }

    //function to verify important elements of login page
    async verifyLoginPage(){
        await expect(this.emailID).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.loginButton).toBeVisible(); 
    }

    //function to check login with invalid credentials
    async incorrectLoginCreds(usr,pwd){
        await this.emailID.fill(usr);
        await this.password.fill(pwd);
        await this.loginButton.click();
        await expect(this.loginButton).toBeVisible();
    }

}

module.exports=loginPage;
