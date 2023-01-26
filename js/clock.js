



function getClock()
{
  let dt = new Date();


  let yyyy = dt.getFullYear().toString();
  let mon = (dt.getMonth()+1).toString();
  let dd = dt.getDate().toString();

  mon = mon.padStart(2,'0');
  dd = dd.padStart(2,'0');



  let hh = dt.getHours().toString();
  let mm = dt.getMinutes().toString();
  let ss = dt.getSeconds().toString();

  mm = mm.padStart(2, '0');
  ss = ss.padStart(2, '0');


  return `${yyyy}-${mon}-${dd}\n${hh}:${mm}:${ss}`;
}

setInterval(() => {
  let clockValue = getClock();
  const clockDiv = document.getElementById('id_clock');

  if( clockDiv !==null )
  {
    clockDiv.innerText = clockValue;  
  }
}, 1000);