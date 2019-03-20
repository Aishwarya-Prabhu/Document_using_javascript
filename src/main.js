
/**
 * @desc Assignment to implement binary search, bubble sort and palindrome
 */

/**
 * @see https://www.w3schools.com/js/js_function_apply.asp
 */
/**
* @param {*} array 
* @param {*} searchNum 
*/
function binarySearch(array, searchNum){
    /**
     * @type {number}
     */
    let firstValue  = 0,
        lastValue   = array.length - 1,
        midpoint = Math.floor((lastValue + firstValue)/2);

    while(array[midpoint] != searchNum && firstValue < lastValue)
    {
       if (searchNum < array[midpoint])
        {
            lastValue = midpoint - 1;
        } 
      else if (searchNum > array[midpoint])
        {
            firstValue = midpoint + 1;
        }
        midpoint = Math.floor((lastValue + firstValue)/2);
    }

 return (array[midpoint] != searchNum) ? -1 : midpoint;
}

/**
 * @experimental testing the functions using values
 */
let array = [1, 2, 3, 4, 5, 7, 8, 9];
console.log("Binary Search");
console.log(binarySearch(array, 3));   
console.log(binarySearch(array, 9));

/**
 * @see https://www.w3schools.com/js/js_function_apply.asp
 */
/**
* @param {*} array 
*/
function bubbleSort(array)
{
    /**
     * @type {number}
     */
    var swapp;
    var n = array.length-1;
    var x=array;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

/**
 * @experimental testing the functions using values
 */
console.log("Bubble Sort");
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/**
 * @see https://www.w3schools.com/js/js_function_apply.asp
 */
/**
* @param {*} str
*/
function palindrome(str){
    /**
     * @type {string}
     */
    var newString = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    /**
     * @type {number}
     */
     var count = 0;
     if(newString==="") {
         console.log("The string is empty");
         return false;
     } 
     if ((newString.length) % 2 === 0) {
     if ((newString.length) % 2 === 0) {
         count = (newString.length) / 2;
     } else {
         if (newString.length === 1) {
             console.log("The string is palindrome");
             return true;
         } else {
             count = (newString.length - 1) / 2;
         }
     }
     for (var x = 0; x < count; x++) {
         if (newString[x] != newString.slice(-1-x)[0]) {
             console.log("The string is not palindrome");
             return false;
         }
     }
     console.log("The string is palindrome");
     return true;
 }
}
 /**
 * @experimental testing the functions using values
 */
console.log("Palindrome or Not")
palindrome('madam');
palindrome('noon');
palindrome('fox');
palindrome('aish');
palindrome('');
