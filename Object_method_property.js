var parent = {
    age : 27,
    name : "sungjune",
    getAge:function(){
        return this.age;
    }
};

var baby = {};

var parent = new parent();

baby.age = 2;
baby.name = "Cute.james";
var age = parent.getAge();

document.write(baby.age);

for(var property in parent){
    document.write(baby[property]);
}


var arr = [];
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
document.write(arr.length);


var fruits = ["사과", "딸기", "바나나"];
var join_ = fruits.join('/');
// "사과/딸기/바나나"

var reverse_ = fruits.reverse();
// ["바나나", "딸기", "사과"]

var sort_ = fruits.sort();
// 정렬

var number = [1, 5, 2, 3, 4];
var number_sort_orum = number.sort(function (a, b){
    return a-b;
});

var number_sort_naerim = number.sort(function(a, b){
    return b-a;
});

var concat_ = fruits.concat(number);
// ["사과", "딸기", "바나나", 1, 5, 2, 3, 4];

var slice_ = fruits.slice(1, 2);
// ["딸기"]

var splice_ = fruits.splice(1, 2);
// ["사과"]

var push_ = fruits.push("수박");
// 수박추가
var pop_ = fruits.pop();
// 맨뒤 뺴기

var uhshift_ = fruits.unshift("자두", "한라봉");
// 앞에 2개 추가

var shift_ = fruits.shift();
// 첫번째 원소 잘라냄

var temp_str = "Hello world";

var chatAt_ = temp_str.charAt(1);
// 'e'

var concat_ = temp_str.concat("!!!");
// "Hello world!!!"

var indexOf_ = temp_str.indexOf("world");
// world라는 문자열 index return   == 6

var lastindexOf = temp_str.lastIndexOf("world");
// 문자열에 일치하는 문자 마지막 index return

var reaplce_ = temp_str.replace("world", "space");
// return "Hello space";

var search_ = temp_str.search("world");
// return    world에 해당하는 index 값 return

var slice_ = temp_str.slice(1, 3);
// return "el";

var split_ = temp_str.split(' ');
// 띄어쓰기로 나뉘어 문자열로 추가된다.

var substring = temp_str.substr(0, 6);
// 0~5 번까지의 INDEX 문자 RETURN

var trim_ = temp_str.trim();
//여백을 제거함 양쪽


//*************************************/
//          형변환          //

var sp_num = 2021;
var af_num = toString(sp_num) + "hi!";

var sf_num = "2021.aowkdlaos";
var sb_num = parseInt(sf_num) + 10;
// 2021+10;

var ao_num = "2021.123apwkdpoawd";
var fl_num = parseFloat(ao_num) + 10.2;
//2021.123 + 10.2;


function send(){
    document.write("send");
}

try{
    send();
    throw new Error("throw Test");
} catch(e){
    document.write(e.message);
} finally{
    document.write("성공적으로 끝났습니다.");
}