Feature('Navigating to RHM Pages');
Scenario('Navigation to all pages', ({ I }) => {
    I.login("e2eqarhm+select_customer@mail.test.in.ibm.com","selectcustomer")
    I.clickWorkspace()
    I.wait(3)
    I.clickDashboard()
    I.clickSoftware()
    I.clickDatasets()
});


