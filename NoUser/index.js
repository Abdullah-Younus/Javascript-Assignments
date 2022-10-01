let usernames = []

if (usernames.length) {
    for (let i = 0; i <= usernames.length; i++) {
        if (usernames[i] === "admin") {
            document.writeln(`Hello ${usernames}, would you like to see a status report?`);
        }
        else {
            document.writeln(`Hello ${username}, thank you for loggin in again`);
        }
    }
} else {
    document.writeln("We Need to find some users!");
}