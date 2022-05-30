const countUnits = require("./app");

test('Counts units from the command',()=>{
    expect(countUnits(['up 5', 'up 7'])).toBe(12);
    expect(countUnits(['up 5', 'up 7', 'up 2'])).toBe(14);
    expect(countUnits(['up 5', 'up 7', 'up 2', 'up 7', 'up 9'])).toBe(30);
} )