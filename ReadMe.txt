Installation steps:

    1.Need to create a folder for the codecept
    2.npm init -y -->to create a package.json file
    3.npm i @wdio/selenium-standalone-service --save-dev  --->to install and start selenium server
    4.write the test in seperate .js files
    5.npx codeceptjs run -->to run the scripts
    6.allure serve allure-results  -->to generate the allure reports.
    7.allure results contains a environment.xml file  and this file is used to show "Environment Variables in allure report".
    8.all the browser related configurations can be changed in "codecept.conf" file.
    9.Screen shots for each step are attached in the allure report can also be seen in Output folder with "records.html" file.