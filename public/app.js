$(document).ready(function(){

  function callMe(serviceId){
    $client = vline.Client.create({serviceId: serviceId});
    $client.login(serviceId);
  }

  callMe("spanishdanish");

});
