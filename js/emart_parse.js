const delim = '----------------------------------------------';
let rdiv = document.querySelector(".receipt_desc4");
let txt = rdiv.innerText;
let stIdx = txt.indexOf( delim, txt.indexOf( '상 품 명')+1 );
let edIdx = txt.lastIndexOf('총 품목 수량');

//console.log('stIdx=', stIdx);
//console.log('edIdx=', edIdx);

let content = txt.substring( stIdx + delim.length, edIdx);
console.log('content=', content);



let products = [];
let elements = [];
let arr = content.split('\n');
for( i=0; i < arr.length; i++)
{
  let element = arr[i].toString().trim();
  let el_head = element.substring(0,1);
  
  let digit = /\d/;
  if( digit.test( el_head ) || el_head === '~' 
  || element.indexOf('회원 SAVE') >=0 || element === ''
  || element.indexOf('할인쿠폰')  >=0 )
  {
    // skip
  } else {
    //console.log( element );
    elements.push( element );
  }
  
}


for( let i =0; i< elements.length; i++ )
{
  let itm = elements[i].trim();
  itm = itm.replace( /(\s\s\s)+/g, '|');

  //console.log( itm );

  let ln_arr = itm.split('|');
  //console.log( 'ln_arr.length=', ln_arr.length);
  
  if( ln_arr.length ===4 )
  {
    const p_name = ln_arr[0].trim();
    const p_price = ln_arr[1].trim();
    const p_amount = ln_arr[2].trim();
    

    const a_product = `{ "name": "${p_name}", "amount": "${p_amount}", "price": "${p_price}" }`;
    products.push( JSON.parse(a_product));
  }
 
}

console.log( products );
