const fs = require("fs")
const path = require("path")

let value = null

let content = fs.readFileSync(path.join(__dirname,"..","mailTemplate","thankYouMailTemplate.html"),'utf-8')

console.log(content)