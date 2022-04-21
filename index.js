function shout(string) {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    const up = (string.toUpperCase())
    console.log(up)
}
function logWhisper(string) {
    const down = (string.toLowerCase())
    console.log(down)
}
function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
    return 'I can\'t hear you!'
    else if (string === 'HELLO')
    return 'YES INDEED!'
    else if (string === 'Let\'s have dinner together!')
    return 'I would love to!'
    console.log(string)
}