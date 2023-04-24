
function repeatString(string, num) {
    let text = ""
    if (num < 0) {
        text = `ERROR`
    } else {
        for (let i = 0; i < num; i++) {
            text += string
        }
    }
    console.log(text)
    return text
}

repeatString(`hey`, -1)


// Do not edit below this line
module.exports = repeatString;
