function getNumbers(){
   
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
  

    //parse our numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
  

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
       
       let numbers = generateNumbers(startValue, endValue);
       displayValues(numbers);
       
    }
    
    else
    {
        alert('please enter numbers');

        Swal.fire(
            { backdrop: false,
             title: 'Oops',
             text: "You must enter numbers silly!",
            }
         );
    }


}





//generate numbers
// our business logic

function generateNumbers(start, stop){
let numbers = [];

for (let i = start; i <= stop; i++) {
    numbers.push(i);

}
return numbers;




//1,2,3,4,5,6,7,8,9,10

}
//display the numbers
//view function
//bold the even numbers
//red the odd numbers



function displayValues(numArray){
// My template
//<div class="col odd">1</div>
//<div class="col even">1</div>

 //need to get our results area
 let results = document.getElementById("results")
results.innerHTML = "";

for (let index = 0; index < numArray.length; index++) {
   
   

    // create div tag
    let div = document.createElement("div");

    //get the value in the array at the current index
  let currentNumber = numArray[index];
  div.innerHTML = currentNumber;

    //add class
    div.classList.add("col");

    if (currentNumber % 2 == 0) {
        div.classList.add("even");
    } else {
        div.classList.add("odd");
    }

    // append to the page
    results.appendChild(div);
}}
