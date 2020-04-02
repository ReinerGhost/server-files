

mp.events.add("playerJoin", (player) => {
    mp.gui.chat.push("Вы !{dodgerblue}присоединились.");
    mp.game.joaat('a_m_m_acult_01');
});
mp.events.add('render', () => {
    var player = mp.players.local;
   
      let boneCoords  = player.getBoneCoords(0, 0, 0, 0);
    let coords = mp.game.graphics.world3dToScreen2d(new mp.Vector3(boneCoords.x, boneCoords.y, boneCoords.z));
    mp.game.graphics.drawText(`УиУ`, [coords.x,coords.y], 
    {
      font: 4,
      color: [255, 255, 255, 255],
      scale: [1.0, 1.0],
      outline: true
    });
    
    
    
});
mp.gui.cursor.show(true, true);
mp.events.add("playerCommand", (command) => {
	const args = command.split(/[ ]+/);
	const commandName = args[0];

	args.shift();
  
  switch(commandName) {
    case "testFirstNative":
      mp.game.invoke('0x5A4F9EDF1673F704', 4);
      break;
    case "testSecondNative":
      mp.game.invoke('0x5A4F9EDF1673F704',0);
      break;
    case "testClientCommand":
      mp.gui.chat.push(`Текущая дата: ${new Date()}`);
      mp.events.callRemote("testServerEvent" ,228);
      
  }
    
	
});


mp.events.add(
  {
      "testClientEvent" : (text) =>
      {
        var player = mp.players.local;
        mp.labels.new(text, new mp.Vector3(player.position.x, player.position.y, player.position.z),
        {
            los: true,
            font: 1,
            drawDistance: 100,
            dimension: player.dimension
        });
        // mp.gui.chat.push(`${text} + ${type.name}`);
      }
  });
  require('./test/test.js')
  
  
// mp.events.add("testClientEvent", (text) => {
//   mp.gui.chat.push('Отработал');
//   mp.gui.chat.push(text);
// });