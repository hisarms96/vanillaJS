const delim = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
let rdiv = document.querySelector(".receipt_desc");
let txt = rdiv.innerText;
let stIdx = txt.indexOf(delim);
let edIdx = txt.lastIndexOf(delim);

console.log('stIdx=', stIdx);
console.log('edIdx=', edIdx);

let content = txt.substring( stIdx + delim.length, edIdx);
console.log('content=', content);

let c=0;
let arr = content.split('\n');
for( i=0; i < arr.length; i++)
{
  let element = arr[i];
  let el_head = element.substring(0,1);
  if((el_head === '*' || el_head==='♥' || el_head !==' ') && element!=='')
  {
    c++;
    console.log(`[${c}]=>[${element}]`);
  }
}