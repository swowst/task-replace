var x = "12345535353senan"
var reqem = 0
var herf = 0



for(let i = 0; i< x.length; i++){
    if(isNaN(x[i])){
        herf++
    }
    else{
        reqem++
    }
}

console.log(herf + " herf sayi", reqem+" reqem sayi")


if(herf<reqem){
    for(let i = 0; i< x.length; i++){
        if(isNaN(x[i])){
            x=x.replace(x[i], 1)
        }        
    }
    
}else{
    for(let i = 0; i< x.length; i++){
        if(Number(x[i])){
            x=x.replace(x[i], 'A')
        }        
    }

}

console.log(x)
