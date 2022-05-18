//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, list){
    for (const word of list){let list1 = string.includes(word)
    if (list1 == true){
        return "Matched dog_name"
    }else{
        console.log("No Matches")
    }
}}

//Call method here with parameters

console.log(findWords(dog_string,dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    returnArr = []
    for(let i= 0; i<arr.length; i++){ // remember to assign it when you're not doing just ++
        if (i % 2 != 0){
            returnArr.push(arr[i])
        }else if(i % 2 == 0 || i == 0){
            returnArr.push("Even index")
        }
    }
    return returnArr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]