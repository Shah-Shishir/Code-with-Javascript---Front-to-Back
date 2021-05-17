const grab = flag => {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

// Prints Process Id
console.log(process.pid);
// Prints Currently used Node.js version
console.log(process.versions.node);
// Lists all the argument variables
console.log(process.argv);
// Greet the user
/*** Put the command ~nodemon argumentVariables --name 'Shah Shishir' --greet 'Hello'~ ***/
const name = grab("--name");
const greet = grab("--greet");
console.log(`${greet} ${name}`);