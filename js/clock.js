



function getClock()
{
  let dt = new Date();

  let hh = dt.getHours().toString();
  let mm = dt.getMinutes().toString();
  let ss = dt.getSeconds().toString();

  mm = mm.padStart(2, '0');
  ss = ss.padStart(2, '0');


  return `${hh}:${mm}:${ss}`;
}

setInterval(() => {
  let clockValue = getClock();
  const clockDiv = document.getElementById('id_clock');

  if( clockDiv !==null )
  {
    clockDiv.innerText = clockValue;  
  }
}, 1000);