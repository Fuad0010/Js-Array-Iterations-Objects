//#region Task1

//Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.


let numberForSort = [6,3,1,67,8,9,4,2,12,];
numberForSort.sort(function(a, b){return b-a});

console.log(numberForSort);

//#endregion

//#region Task2

// ["Yanvar","Fevral","Mart","Aprel"]  - 
// bu arrayi parametr kimi qebul eden bir function yazirsiz.
// Hemin function geriye yeni bir array qaytarir. 
// Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
// Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let months = ['Yanvar','Fevral','Mart','Aprel'];

let newmonths = months.forEach((item,index)=>{
    index++;    
    item+"-"+index;
});

//#endregion
//#region Task3

function indexNum(str){

const myArray = str.split(" ");
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    element.length

    
}




}
console.log(indexNum("Fuad Salam"))

//#endregion



