function showStand(name){
  const standObj = stands.find(s => s.name === name);
  document.getElementById('standName').textContent = name;
  if(standObj){
    document.getElementById('standImage').src = standObj.img;
    // make image link clickable to fandom page
    document.getElementById('standLink').href = `https://jojo.fandom.com/wiki/${encodeURIComponent(standObj.name)}`;
  }
  document.getElementById('status').textContent = "You've claimed a stand!";
  document.getElementById('standBlock').style.display = 'block';
  document.getElementById('claimBlock').style.display = 'none';
}
