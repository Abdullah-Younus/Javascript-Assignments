let usernames = ["sameer", "admin", "abdullah", "razzaq"];

for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        document.writeln(`Hello ${usernames[i]} , would you like to see a status report?`);
    }
}