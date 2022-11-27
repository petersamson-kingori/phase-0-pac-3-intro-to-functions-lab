function shout(string) {
    "hello!";
    return string.toUpperCase();

}

function whisper(string) {
    "HELLO";
    return string.toLowerCase();
}

function logShout(string) {
    'hello';
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    'HELLO';
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    'hello';
    console.log(string);
    console.log(string.toLowerCase());

    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }else if( string === string.toUpperCase()){
        return "YES INDEED!"
    }else if (string === "Let's have dinner together!" ) {
        return "I would love to!"
    }


}