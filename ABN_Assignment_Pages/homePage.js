const {expect} = require('@playwright/test')

class homePage{
    constructor(page)
    {
        this.page=page
        this.userIcon=page.locator("i.fas.fa-user-circle")
        this.signOut=page.locator("i.fas.fa-sign-out-alt")
        this.homeIcon=page.locator("i.fas.fa-home")
        this.productsIcon=page.locator("i.fas.fa-tag")
        this.contactIcon=page.locator("i.fas.fa-envelope")
    }
    
    //function to log out of application
    async logoutofapplication()
    {
        await this.userIcon.click()
        await this.signOut.click()
    }

    //function to verify important elements of the home page
    async verifyHomePage(){
        await expect(this.homeIcon).toBeVisible();
        await expect(this.productsIcon).toBeVisible();
        await expect(this.contactIcon).toBeVisible(); 
        await expect(this.userIcon).toBeVisible(); 
    }

}

module.exports=homePage;
