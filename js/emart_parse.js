const delim = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
let rdiv = document.querySelector(".receipt_desc");
let txt = rdiv.innerText;
let stIdx = txt.indexOf(delim);
let edIdx = txt.lastIndexOf(delim);

//console.log('stIdx=', stIdx);
//console.log('edIdx=', edIdx);

let content = txt.substring( stIdx + delim.length, edIdx);
//console.log('content=', content);

let products = [];
let arr = content.split('\n');
for( i=0; i < arr.length; i++)
{
  let element = arr[i].toString();
  let el_head = element.substring(0,1);
  //if((el_head === '*' || el_head==='♥' || el_head !==' ') && element!=='')
  if( el_head !== ' ' && element !== '')
  {
    //console.log(`[${c}]=>[${element}]`);
    //products.push( element );

    if( el_head === '*' || el_head==='♥' )
    {
      element = element.substring(1);
    }
    element = element.trim();
    element = element.replace( /(\s\s\s)+/g, '|');

    console.log( element );

    let ln_arr = element.split('|');

    const p_name = ln_arr[0].trim();
    const p_price = ln_arr[1].trim();
    const p_amount = ln_arr[2].trim();
    

    const a_product = `{ "name": "${p_name}", "amount": "${p_amount}", "price": "${p_price}" }`;
    products.push( JSON.parse(a_product));

  }
}

console.log( products );
