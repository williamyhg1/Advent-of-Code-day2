const { readFileSync, promises: fsPromises } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}
const file = syncReadFile("./file.txt");
const input = [];
file.forEach((str) => {
  input.push(str);
});

const countMultiply = (command) => {
  let forwardCounts = 0;
  let aimCount = 0;
  let depth = 0;
  for (let i = 0; i < command.length; i++) {
    //To get last character of the command and parse into integer
    const units = parseInt(command[i].charAt(command[i].length - 1));

    if (command[i][0] === "f") {
      forwardCounts += units;
      depth += aimCount * units;
    }
    if (command[i][0] === "u") {
      aimCount -= units;
    }
    if (command[i][0] === "d") {
      aimCount += units;
    }
  }
  return forwardCounts * depth;
};

module.exports = countMultiply;

console.log(countMultiply(input));
