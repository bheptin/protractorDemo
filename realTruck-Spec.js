describe('Checking RealTruck Website', () => {
    
    it('opens the browser', () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://realtruck.com/');
        browser.sleep('4000');
        expect($('.desktop-header').isPresent()).toBeTruthy();
    });

    it('searches for a seat cover', () => {
        $('#searchBar').sendKeys('seat cover');
        browser.sleep('2000');
        element(by.xpath('//*[@id="searchResults"]/div[3]/div/div/a[1]/div/div[2]')).click();
        browser.sleep('6000');
    })
})