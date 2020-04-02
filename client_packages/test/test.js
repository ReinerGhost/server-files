mp.gui.cursor.show(true, true);
let browser = mp.browsers.new("package://test/index.html");

mp.events.add('closeActiveBrowser', () => {
    browser.destroy();
    mp.gui.cursor.show(false, false);
});
mp.events.add('movingPlayer', (x,y,z) => {
    browser.destroy();
    mp.gui.cursor.show(false, false);
    mp.players.local.position = new mp.Vector3(x, y, z);
});