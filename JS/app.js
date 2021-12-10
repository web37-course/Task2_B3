

let cardNum = 2720994735373051;

let cardNumStr = String(cardNum);

let cardNumArr = [];

for(let i = 0; i <= cardNumStr.length - 1; i++){
    cardNumArr[i] = cardNumStr[i];
}

let sysCheckFunc = function(){
        
    let iinNum = '';

        for (let i = 0; i <= this.iinLength - 1; i++) {
            iinNum += cardNumArr[i];
        }

        console.log(iinNum);

        for (let i = 0; i <= this.iinRanges.length - 1; i++) {
            if (+this.iinRanges[i] == +iinNum) {
                this.cardType = true;
            }
        }

        for (let i = 0; i <= this.cardIdLength.length - 1; i++){

            if (+this.cardIdLength[i] == +cardNumArr.length){
                this.cardLength = true;
            }
        }

        console.log(this.cardType);
        console.log(this.cardLength);

        if (this.cardType == true && this.cardLength == true) {
            return `${this.name}`;
        }else{
            return ''
        }

}

let cardValFunc = function(){
    
    let checkDigit = Number(cardNumArr[cardNumArr.length - 1]);

    let cardNumArrReverse = cardNumArr.map(item => item);
    cardNumArrReverse = cardNumArrReverse.reverse(cardNumArrReverse.splice(cardNumArrReverse.length-1, 1))

    let multiplication = cardNumArrReverse.map(function(elem, index){
        if(index % 2 == 0){
            return elem * 2;
        }else{
            return elem;
        }
    });

    let substruction = multiplication.map(function(elem){
        if(elem > 9){
            return elem - 9;
        }else{
            return elem;
        }
    });

    let sum = 0;

    for(i = 0; i <= substruction.length - 1; i++){
        sum += Number(substruction[i]);
    }

    let validity = false;

    if((sum + checkDigit) % 10 == 0){
        validity = true;
        console.log('valid');
    }else{
        validity = false;
        console.log('invalid');
    }

}

cardValFunc();


let americanExpress = {
    
    name: 'AmericanExpress',
    iinRanges: [34, 37],
    iinLength: 2,
    cardIdLength: [15],
    cardType: false,
    cardLength: false,
    paymentSystemCheck: sysCheckFunc

}

let maestro = {
    name: 'Maestro',
    iinRanges: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
    iinLength: 4,
    cardIdLength: [12, 13, 14, 15, 16, 17, 18, 19],
    cardType: false,
    cardLength: false,
    paymentSystemCheck: sysCheckFunc
}

let masterCard = {
    name: 'MasterCard',
    iinRanges: [51, 52, 53, 54, 55],
    iinLength: 2,
    iin2017Ranges: [2221, 2720],
    iin2017Length: 4,
    cardIdLength: [16],
    cardType: false,
    cardLength: false,
    
    paymentSystemCheck: sysCheckFunc,
    

}

let visa = {
    name: 'Visa',
    iinRanges: [4],
    iinLength: 1,
    cardIdLength: [13, 16],
    cardType: false,
    cardLength: false,
    paymentSystemCheck: sysCheckFunc
}

let MasterCard2017Check = function(){
    
    let iinNum2017 = '';

    for (let i = 0; i <= 3; i++) {
        iinNum2017 += cardNumArr[i];
    }

    iinNum2017 = Number(iinNum2017);

    if(iinNum2017 >= +masterCard.iin2017Ranges[0] && iinNum2017 <= +masterCard.iin2017Ranges[1]){
        masterCard.cardType = true;
     }

     for (let i = 0; i <= masterCard.cardIdLength.length - 1; i++){

        if (+masterCard.cardIdLength[i] == +cardNumArr.length){
            masterCard.cardLength = true;
        }
     }

    if (masterCard.cardType == true){
        return `${masterCard.name}`;
    }else{
        return''
    }

}

MasterCard2017Check();


if(americanExpress.cardType == true){
    console.log(`Тип карты: ${americanExpress.name}`);
}else if(maestro.cardType == true){
    console.log(`Тип карты: ${maestro.name}`);
}else if(masterCard.cardType == true){
    console.log(`Тип карты: ${masterCard.name}`);
}else if(visa.cardType == true){
    console.log(`Тип карты: ${visa.name}`);
}else{
    console.log(`Тип карты: Другая платежная система`);
}









