/* var userNum = +prompt('Введите число');
var star = '⭐';
var answer = '';
var space = '🌍';
var spaceNum = 0; 
var spaceAnswer = '';
var userNumOld = userNum;

var userNumOld = userNum;

for(var i = 0 ; i < userNum/2 ; i++){
    for(var k = 0; k < userNumOld; k++){
        answer = answer + star
    }
    for(var w = 0 ; w < spaceNum ; w++ ){
        spaceAnswer = spaceAnswer + space 
    }
     console.log(spaceAnswer + answer + spaceAnswer)
     userNumOld = userNumOld - 2
     spaceNum++
     answer = ''
     spaceAnswer = ''
} */

/* var fruits = ['peach','orange','apple','banana', 'pear']

console.log('I have to buy')
for(var i =0 ; i < fruits.length ; i++){   
    if (fruits[i] == 'peach'){
        console.log(i + 1 + '.' + 'fruits[i]' + '(Я обожаю персики)')
    }else{
        console.log(i + 1 + '.' + 'fruits[i]' + '(Не так уж нравится)')
    }
     
}  */


/* var fruits = ['peach', 'orange', 'apple', 'banana', 'pear']
function babushka(order) {
    console.log('I have to buy')
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i] == 'peach') {
            console.log(i + 1 + '.' + fruits[i]  + '(Я обожаю персики)')
        } else {
            console.log(i + 1 + '.' + fruits[i] + '(Не так уж нравится)')
        }

    }
}
function dedushka(x,y){
    return x + y 
}
function sklad(text,arr){
    for( i = 0 ; i < arr.length; i++){
        if(arr[i] == text){
            return 'В этом массиве есть такой элемент'
        }
    }
    return 'Нет такого элемента в массиве'
}

var nums = [1,5,6,7,8,9,10,18,19,20] */

var userNum = +prompt('Введите номер квартиры');

if (userNum > 0 && userNum < 21) {
    alert('Первый подъезд ')

} else if (userNum > 20 && userNum < 49) {
    alert('Второй подъезд')

} else if (userNum > 48 && userNum < 91) {
    alert('Третий подъезд')

} else {
    alert('Такой квартиры нет')
}

/* function searcPorch(flat,numPorchs,flatsInOnePorch){
    for (var numPorch = 1; numPorch <= numPorchs ; numPorch++){
        var minInPorchFlat = numPorch * flatsInOnePorch - flatsInOnePorch + 1 
        var maxInPorchFlat = numPorch * flatsInOnePorch 
        if (minInPorchFlat <= flat && maxInPorchFlat >= flat){
            return numPorch
        }
    }
} */

var john = ['john', 123456];
var jane = ['jane', 654321];
var alex = ['alex', 987654];

var users = [john, jane, alex]

function checkUser(user, baseUsers) {
    for (var i = 0; i < baseUsers.length; i++) {
        if (baseUsers[i][0] == user[0] && baseUsers[i][1]) {
            return true
        }
    }
    return false
}


var User = prompt('Введите имя')
var userPass = prompt('Введите пароль')

var userArr = [User, userPass]

var check = checkUser(userArr, users)

if (check) {
    alert('Вы не в системе')
}else{
    alert('Вы не в системе')
}















