/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being 
passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, 
the range will be between 1 and 18 and the input will always be an integer. 
Sample Test Cases
Input:4

Output:24


Input:8

Output:40320*/

function factorial(num){
    if(num > 0 && num %1 ===0){
        let total = num;     
        while(num > 1){
            num--;
            total = total * num;
        }         
        console.log(total);
    }
}

factorial(4);