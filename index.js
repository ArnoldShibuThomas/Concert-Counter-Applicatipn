//document.getElementById("count-el").innerText = 5;

//varibale for HTML element
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in arguement
console.log(saveEl)

//Store count and intialize it as zero
let count = 0

//listen for clicks on the increment btn
function increment(){
    //increment the count variable when thed button is clicked
    count = count + 1
    //change the count element in the html
    countEl.textContent = count
}

//when save button is pressed
function save(){
    let formatedWords = count +" - "
    saveEl.textContent += formatedWords 

    //reset count
    count = 0;
    countEl.textContent = count
    
}





