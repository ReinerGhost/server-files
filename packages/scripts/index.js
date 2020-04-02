let cp_new = null;
let colshape;
let veh;

mp.events.add('playerJoin', (player) => {
    veh = mp.vehicles.new("issi3", [-1.6181763410568237,17.07124900817871,71.06330871582031]);
    player.position = new mp.Vector3(-6.739789009094238,22.44698715209961,71.23194122314453);
    colshape =  mp.colshapes.newCircle(player.position.x ,player.position.y, 2);
    player.setVariable('veh', veh);
    player.outputChatBox("Садитесь в автомобиль который появился рядом с вами");
    player.name = 'Reiner';
   
});






function playerExitColshapeHandler(player, shape) {
  player.outputChatBox(`${player.name} вышел из Colshape № ${shape.id}`);
  // mp.events.call("testClientEvent", `текущий пинг: ${player.ping}`);
  player.call("testClientEvent", [`текущий пинг: ${player.ping}`]);
  
}

mp.events.add('testServerEvent', (player, text) => {
  
  console.log(text);
});
mp.events.add("playerExitColshape", playerExitColshapeHandler);
mp.events.addCommand('save', (player) =>  {
	
  console.log(`${player.position.x},${player.position.y},${player.position.z}`);
  player.outputChatBox("Вы сохранили позицию в консоли.");
});



mp.events.add("playerEnterVehicle", (player, vehicle, seat) => {
  cp_new = mp.checkpoints.new(2, new mp.Vector3(-12.792686462402344,23.304332733154297,71.5892333984375), 10,
  {
      direction: new mp.Vector3(-12.792686462402344,23.304332733154297,71.5892333984375),
      color: [ 255, 255, 255, 255 ],
      visible: true,
      dimension: 0
  });
  cp_new.setVariable('id_veh', veh);
});



mp.events.add("playerEnterCheckpoint", (player, checkpoint) => {
 
  if (player.vehicle && cp_new.getVariable('id_veh') == player.vehicle) {
    player.vehicle.setColor(2,2);
    player.vehicle.repair();
    player.removeFromVehicle();
    let vehicle = player.vehicle;
    setTimeout(()=>{ 
      if(vehicle){
          vehicle.destroy(); 
          player.outputChatBox("Ваш транспорт удален.");
      }
  },15000);
  }
  
});


mp.events.add("playerExitCheckpoint", (player, checkpoint) => {
  player.outputChatBox("Вы выехали.");
  
});



mp.blips.new(498, new mp.Vector3(-12.792686462402344,23.304332733154297,71.5892333984375),
{
    name: 'Метка',
    scale: 1,
    color: 3,
    alpha: 255,
    drawDistance: 100,
    shortRange: true,
    rotation: 0,
    dimension: 0
});