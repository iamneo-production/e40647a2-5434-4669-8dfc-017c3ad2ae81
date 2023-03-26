const puppeteer = require('puppeteer');

// Signup
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
    console.log('TESTCASE:test_case1:success');
    }
     catch(e){
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

// Login
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    console.log('TESTCASE:test_case2:success');
    } catch(e) {
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    await page.click('#depositbutton');
    await page.waitForSelector('#depositpage',{timeout:1500});
    await page.type('#amount', '50000');
    await page.type('#password', 'test');
    await page.click('#confirm');
    await page.waitForSelector('#dashboard',{timeout:1500});
    console.log('TESTCASE:test_case3:success');
    } catch(e) {
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
// // Balance Check
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
    let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    await page.click("#checkbalancebutton");
    await page.waitForSelector('#balancepage' ,{timeout:1500});
    console.log('TESTCASE:test_case4:success');
    } catch(e) {
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
//  Bill Payment
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    await page.click("#billpaymentbutton");
    await page.waitForSelector('#billpamentpage' ,{timeout:1500});
    await page.type('#biller', 'waterbill');
    await page.type('#amount', '500');
    await page.type('#remarks', 'Testing');
    await page.type('#password', 'test');
    await page.click('#confirm');
    await page.waitForSelector('#dashboard' ,{timeout:1500});
    console.log('TESTCASE:test_case5:success');
    } catch(e) {
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
// Transaction History
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
      await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    await page.click("#historybutton");
    await page.waitForSelector('#transactionpage' ,{timeout:1500});
    console.log('TESTCASE:test_case6:success');
    } catch(e) {
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();

// Logout
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dcbbfcdaaaadebabbabdbbdbcdbbfafdaacdfbe.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signupbutton');
    await page.waitForSelector('#signuppage',{timeout:1500});
    await page.type('#firstname', "demouser");
    await page.type('#lastname', 'test');
    await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#signupbutton');
    await page.waitForSelector('#loginpage',{timeout:1500});
      await page.type('#email', 'demouser'+x+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#loginbutton');
    await page.waitForSelector('#dashboard',{timeout:1500});
    await page.click("#logout");
    await page.waitForSelector('#loginpage' ,{timeout:1500});
    console.log('TESTCASE:test_case7:success');
    } catch(e) {
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();