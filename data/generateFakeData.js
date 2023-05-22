// Randomly generate a fake allTables JSON file

const fs = require("fs")
const numTables = Math.floor(Math.random() * 10) + 16 // 16-26 random

let fakeTables = []
for(i = 1; i < numTables; i++){
    const chairs = Math.floor(Math.random() * 6 ) + 2
    const name = `Table ${i}`
    const location = ["Inside","Bar","Terrace"][Math.floor(Math.random() * 3 )]
    fakeTables.push(
        {
            name:name,
            capacity: chairs,
            isAvailable: true,
            location: location
        }
    )
}
let data = JSON.stringify({
    tables: fakeTables
})
fs.writeFileSync(__dirname + "/allTables.json", data);