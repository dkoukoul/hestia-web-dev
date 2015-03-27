function WiFiDown() {
  var down = confirm("Take down wlan0 ?");
  if(down) {
  } else {
    alert("Action cancelled");
  }
}

function UpdateNetworks() {
  var existing = document.getElementById("networkbox").getElementsByTagName('div').length;
  document.getElementById("Networks").value = existing;
}

function AddNetwork() {
  //  existing = document.getElementById("networkbox").getElementsByTagName('div').length;
  //  existing++;
  var Networks = document.getElementById('Networks').value;
  document.getElementById('networkbox').innerHTML += '<BR><div id="Networkbox'+Networks+'" class="Networkboxes" style="width:30%;"><button type="button" class="btn btn-default" value="Delete" name="Delete" onClick="DeleteNetwork('+Networks+')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete Network '+Networks+'</button><BR><br /> \
  <span class="tableft"><span class="label label-default">SSID :</span></span><BR><input type="text" name="ssid'+Networks+'" onkeyup="CheckSSID(this)"><BR><br> \
  <span class="tableft"><span class="label label-default">PSK :</span></span><BR><input type="password" name="psk'+Networks+'" onkeyup="CheckPSK(this)"><BR><BR></div>';
  Networks++;
  document.getElementById('Networks').value=Networks;
  
}

function AddScanned(network) {
  //  var RegEx = new RegExp("[\s\t]+");
  //  networkname = network.split(RegEx)[4];
  //  alert(networkname);
  existing = document.getElementById("networkbox").getElementsByTagName('div').length;
  var Networks = document.getElementById('Networks').value;
  if(existing != 0) {
    Networks++;
  }
  document.getElementById('Networks').value=Networks;
  document.getElementById('networkbox').innerHTML += '<BR><div id="Networkbox'+Networks+'" class="Networkboxes" style="width:30%;"><button type="button" class="btn btn-default" value="Delete" name="Delete"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete Network '+Networks+'</button><BR><br /> \
  <span class="tableft"><span class="label label-default">SSID :</span></span><BR><input type="text" name="ssid'+Networks+'" id="ssid'+Networks+'" onkeyup="CheckSSID(this)"><BR><br> \
  <span class="tableft"><span class="label label-default">PSK :</span></span><BR><input type="password" name="psk'+Networks+'" onkeyup="CheckPSK(this)"><BR><BR></div>';
  document.getElementById('ssid'+Networks).value = network;
  if(existing == 0) {
    Networks++
    document.getElementById('Networks').value = Networks;
  }
}

function CheckSSID(ssid) {
  if(ssid.value.length>31) {
    ssid.style.background='#FFD0D0';
    document.getElementById('Save').disabled = true;
  } else {
    ssid.style.background='#D0FFD0'
    document.getElementById('Save').disabled = false;
  }
}

function CheckPSK(psk) {
  if(psk.value.length < 8) { 
    psk.style.background='#FFD0D0';
    document.getElementById('Save').disabled = true;
  } else {
    psk.style.background='#D0FFD0';
    document.getElementById('Save').disabled = false;
  }
}

function DeleteNetwork(network) {
  element = document.getElementById('Networkbox'+network);
  element.parentNode.removeChild(element);
  var Networks = document.getElementById('Networks').value;
  Networks--
  document.getElementById('Networks').value = Networks;
}
