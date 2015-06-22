    /*
 INT222B
 hkim142.lab.01.js
 Hyungi ( Henry ) Kim
 025 741 125
 LAB 1
 sumitted on sept 9th 2013
 */

    var nam = prompt("What is your name ? :");/*ask user to string to input*/
        alert("Hello " + nam);/* alert(); Hello and water ever user input string*/
    var key=0;/* delcair and sets trigger*/
    do{
        var num = prompt ("Enter your Number please :");/* user input the integer number for console.log loop, and end-less user actually enters integer*/
            if(typeof num !== 'number' && isNaN(num) !== false){ /* check the user input is not equal to number and its not NaN*/
                alert("Not an Number");/*warning user that user is not input the integer value*/
            }
            else if( num < 0){
                alert(" Please enter integer bigger or equal than 0");
                /* warning user that enter postive number or 0 */
            }
            else{
                key=1; /*release the trigger, so loop can break*/
            }
    }while (key===0)/* while trigger value last, continues the loop*/
        var num = parseInt(num,10);/* uses parseint function to changes received string to integer value*/
        for(var i=num; i>=0; i--){
            console.log(i); /* using console.log to leave log on browser as number of user inputed, also each log decereased to 0 while loop continues*/
        }
