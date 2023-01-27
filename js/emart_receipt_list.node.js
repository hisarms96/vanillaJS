var casper = require("casper").create( {verbose:true, logLevel: "debug"});

var url = 'https://store.emart.com/login/login.do?refreshYn=Y';

var id = 'walkwith';
var pw = '#btl2023sg@';

casper.start();
casper.open(url);

casper.then(function () {
    
    casper.fill("#userId", id, false);
    casper.fill("#userPw", pw, true);

});

casper.then(function(){
    casper.open('https://store.emart.com/myemart/main.do');
});

casper.then(function(){
    console.log( documnet.querySelector('.myreceipt') );
});

casper.run();