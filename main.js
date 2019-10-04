const puppeteer = require('puppeteer');

async function clickBtnInnerHTML(innerHTML) {
  await page.evaluate(()=>{
    let btns = [...document.querySelectorAll("button")];
    btns.forEach(function (btn) {
      if (btn.innerHTML.search(innerHTML) >= 0){
        btn.click();
      }
    });
  });
}
 

let total_matches = 0;
(async () => {
  while(true){
    console.log("New browser");
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://play.bot.land', {
      waitUntil: 'networkidle2'
    });

    await page.waitForSelector("[placeholder='Username or email']");
    await page.click("[placeholder='Username or email']");
    await page.type("[placeholder='Username or email']", "isaiah.stjohn@gmail.com");
    await page.keyboard.down("Tab");
    await page.keyboard.type("pa55w0rd");
    await page.keyboard.down("Enter");
    await page.waitFor(5000);
    // Attack
    clickBtnInnerHTML('data-icon="sword"');
    for(let matches = 0; matches < 3; matches++){
      console.log(`Begin match ${++total_matches}`);
      await page.waitFor(5000);
      // Begin battle
      clickBtnInnerHTML('src="/atk_');
      await page.waitFor(500);
      clickBtnInnerHTML('src="/atk_');
      await page.waitFor(500);
      // Open Blueprints
      clickBtnInnerHTML('3vx1u3tfvn37');
      await page.waitFor(500);
      //Place Robots
      await page.mouse.click(200, 100);
      await page.waitFor(500);
      for(let i = 0; i < 3; i++){
        console.log(`Round ${i + 1}`);
        // The math with `matches` prevents clicking the same place on the
        // map and deleting previous placements in the event that we
        // failed to start the match after the last round of placements
        await page.mouse.click(100 + 70 * (1 + matches), 70 * (1 + matches));
        await page.waitFor(500);
        await page.mouse.click(100 + 70 * (1 + matches), 70 + 70 * (1 + matches));
        await page.waitFor(500);
        await page.mouse.click(100 + 70 * (1 + matches), 140 + 70 * (1 + matches));
        await page.waitFor(500);
        await page.mouse.click(100 + 70 * (1 + matches), 210 + 70 * (1 + matches));
        await page.waitFor(500); 
        await page.mouse.click(100 + 70 * (1 + matches), 280 + 70 * (1 + matches));
        await page.waitFor(500); 
        await page.mouse.click(100 + 70 * (1 + matches), 350 + 70 * (1 + matches));
        await page.waitFor(500); 
        // Begin battle

        clickBtnInnerHTML('src="/atk_');
        await page.waitFor(40 * 1000);
      }
      console.log('Match over');
    } 
    await page.waitFor(2 * 60 * 1000);
    await browser.close();
  }
})();
