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

const forward = [];
const up = [];
const down = [];

file.forEach((str) => {
  if (str[0] === "f") {
    forward.push(str);
  }
  if (str[0] === "d") {
    up.push(str);
  }
  if (str[0] === "u") {
    down.push(str);
  }
});

const countUnits = (command) => {
  let counts = 0;
  for (let i = 0; i < command.length; i++) {
    //To get last character of the command
    const units = command[i].charAt(command[i].length - 1);
    counts += parseInt(units);
  }
  return counts;
};
const forwardUnits = countUnits(forward);
const upUnits = countUnits(up);
const downUnits = countUnits(down);

console.log(`Horizontal position is moved by ${forwardUnits} units`);
console.log(`Depth position is moved by ${upUnits - downUnits} units`);
console.log(
  `Final horizontal times final depth equals ${
    forwardUnits * (upUnits - downUnits)
  }`
);

module.exports = countUnits;
