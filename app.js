// let numbers=[79,88,99,66] 
// number.indexof(1)=valueone;
// number.indexof(2)=valuetwo;
// number.indexof(3)=valuethree;
// number.indexof(4)=valuefour;

// if(valueone > valuetwo) {
//        console.log(numbers[valueone],"is greater number")
// } else if(valuetwo > valuethree) {
//     console.log(numbers[valuetwo],"is greater number")
// } else if(valuethree > valuefour) {
//     console.log(numbers[valuethree],"is greater number")
// } else {
//     console.log(numbers[valuefour],"is greater number")

// let numbers = [79, 88, 99, 66];
// var valueone = numbers.indexOf(1);
// var valuetwo = numbers.indexOf(2);
// var valuethree = numbers.indexOf(3);
// var valuefour = numbers.indexOf(4);

// if ( valueone > valuetwo) {
//     console.log(numbers[valueone], "is greater number");
// } else if ( valuetwo > valuethree) {
//     console.log(numbers[valuetwo], "is greater number");
// } else if (valuethree > valuefour) {
//     console.log(numbers[valuethree], "is greater number");
// } else {
//     console.log(numbers[valuefour], "is greater number");
// } 
function largestElement(arr) {
    return Math.max(...arr);
}
 
const num1 = [10, 15, 28, 20, 13];
const result = largestElement(num1);
 
console.log("The largest element in the array is:" + result);






    