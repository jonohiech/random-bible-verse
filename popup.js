const booksOfTheBible = [
    // Old Testament
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
    "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
    "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
    "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
    "Zephaniah", "Haggai", "Zechariah", "Malachi",

    // New Testament
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy",
    "2 Timothy", "Titus", "Philemon", "Hebrews", "James",
    "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
    "Jude", "Revelation"
];
function numberGen() {
    return Math.floor(Math.random() * 31232)-1;
}
fetch("./verses.json",).then(response => response.json()
.then(jsonArray => {
    let div = document.getElementById('verse');
    let json = jsonArray[numberGen()];
    let bookName = booksOfTheBible[json.book-1];
    let book = document.createElement('h1').appendChild(document.createTextNode( bookName + " "));
    div.appendChild(book)
    var chapterAndVerse = '';
    if(bookName !== "Jude"){
       chapterAndVerse = json.chapter + ':' + json.verse;
        let verseNumber = document.createElement('h3').appendChild(document.createTextNode(chapterAndVerse+" "));
        div.appendChild(verseNumber);
    }else{
        chapterAndVerse = json.verse;
        let verseNumber = document.createElement('h3').appendChild(document.createTextNode(chapterAndVerse+" "));
        div.appendChild(verseNumber);
    }
    let verse = document.createElement('p').appendChild(document.createTextNode(json.words))
    div.appendChild(verse);
}).catch(error =>{
        let div = document.getElementById('verse');

        console.log(error);

    div.appendChild(document.createElement('div').appendChild(document.createElement('p').appendChild(document.createTextNode("Error"))));
})).catch(error => {
    let div = document.getElementById('verse');

    console.log(error);
    div.appendChild(document.createElement('p').appendChild(document.createTextNode("Error")));
})