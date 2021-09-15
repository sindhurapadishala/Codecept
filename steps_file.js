// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login: function(email, password){
    this.amOnPage('/');
    this.wait(3);
    this.fillField('//input[@id="email"]',email);
    this.wait(2);
    this.click('Next')
    this.waitForElement('//button[@id="login-show-step2"]',20)
    this.click('Next')
    this.fillField('//input[@id="password"]',password)
    this.wait(3)
    this.click('//button[@data-value-processing="Logging in ..."]')
    this.click('//*[@class="bx--header__name om-header__logo"]')
  },
  clickDashboard:function(){
    this.click("Dashboard")
    this.seeElement('//h6[text()="Dashboard"]')
  },
  clickWorkspace:function(){
    this.click("Workspace")
  },
  clickSoftware:function(){
    this.click('//span[text()="Software"]')
    this.seeElement('//h1[text()="Software"]')
  },
clickDatasets:function(){
this.click('//span[text()="Datasets"]')
this.seeElement('//h1[text()="Datasets"]')
}

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
