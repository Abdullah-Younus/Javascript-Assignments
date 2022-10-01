let current_users = ["sameer", "Razzaq", "abdullah", "Shazaib"];
let new_users = ["sameer", "TANZILA", "Janu", "Laiba", "sana"];

// current_users = current_users.map(eachItem => {
//     return eachItem.toLowerCase();
// })

// console.log("current_users", current_users);

// for (let i = 0; i < new_users.length; i++) {

// }

var current_users_lower = current_users.map(eachItem => {
    return eachItem.toLowerCase();
})
    ;

// for (let i = 0; i < current_users.length; i++) {
//     current_users_lower.concat(current_users.toLowerCase())
// }

console.log(current_users_lower);