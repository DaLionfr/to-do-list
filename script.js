let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tasks = JSON.parse(localStorage.getItem('@listaTarefas')) || [];

function renderTasks(){
    listElement.innerHTML = "";

    tasks.map((todo)=>{
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);

        let buttonElement = document.createElement("button");
        
        let iconElement = document.createElement("i");
        iconElement.className = "fa-solid fa-delete-left";

        buttonElement.appendChild(iconElement);
        buttonElement.onclick = function() {
            deleteTask(tasks.indexOf(todo))
        }
        //linkElement.setAttribute("href", "#");

        //let linkText = document.createTextNode("Delete");
        //buttonElement.appendChild(linkText);

       // let position = tasks.indexOf(todo);

        //buttonElement.setAttribute("onclick", `deleteTask(${position})`);

        liElement.appendChild(taskText);
        liElement.appendChild(buttonElement);
        listElement.appendChild(liElement);
    })
}


renderTasks();

inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTasks();
    }
});

function addTasks(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa!")
        return false;
    }else{
        let newTask = inputElement.value; 

        tasks.push(newTask);
        inputElement.value = '';

        renderTasks();
        saveData();
    }
}

buttonElement.onclick = addTasks;

function deleteTask(position){
   tasks.splice(position, 1);
   renderTasks();
   saveData();
} 

function saveData(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tasks));
}

/* Quotes for the top part of the page: 

- Quote#1: "Don't wait for extraordinary opportunities, seize common ocasions and make them great."
(Orison Swett Marden)
- quote: "Plunge boldly into the thick of life, and seize it where you will, it is always interesting." (Goethe)
- quote: "There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present." (Master Oogway)
- quote: "Carpe Diem. Seize the day boys. Make your lifes extraordinary." (Robin Williams as John Keating) 
- quote: "You will never 'find' time for anything. If you want time, you must make it." (Charles Buxton)
- quote: “You can spend the entire second half of your life recovering from the mistakes of the first half.” (Saul Bellow)
- quote: "Begin doing what you want to do now. We are not living in eternity. We have only this moment, sparkling like a star in our hand - and melting like a snowflake." (Francis Bacon)
- quote: "One can make a day of any size" (John Muir)
- quote: "Carpe Diem" (Horace - Greek Philosopher)
- quote: "Life is short, God's way of encouraging a bit of focus" (Rovert Breault)
- quote: "I held a moment in my hand, brilliant as a star, fragile as a flower, a tiny sliver of one hour. I dripped it carelessly, Ah! I didn't know, I held opportunity." (Hazel Ying Lee)
- quote: "Do not boast about tomorrow, for you do not know what a day may bring" - Proverbs 27:1 (King Solomon)
- quote: "Teach us to number our days, that we may gain a heart of wisdom" - Psalm 90:12 (The Prophet Moses)
- quote:"He has made everything beautiful in it's time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end" - Ecclesiastes 3:11 (King Solomon)
- quote:"Be very careful, then, how you live-not as unwise but as wise, making the most of every opportunity, because the days are evil." - Ephesians 5:15-16 (Paul the Apostle)
- quote:"What I mean, brothers and sisters, is that the time is short. From now on those who have wives should live as if they do not." - 1 Corinthians 7:29 (The Apostle Paul)
- quote:"Why, you do not even know what will happen tomorrow. What is your life? You are a a mist that appears for a little while and then vanishes." - James 4:14 (Christ Jesus) 
- quote:"There is a time for everything, and a season for every activity under the heavens: ... a time to plant and a time to uproot ... a time to tear down and a time to build." - Ecclesiastes 3:1-4 (King Solomon)
- quote:"Give thyself time to learn something new and good, and cease to be whirled around." (Marcus Aurelius)
- quote: "Time is a sort of river of passing events, and strong is its current; no sooner is a thing brought to sight than it is swept by and another takes its place, and this too will be swept away." (Marcus Aurelius)
- quote: "The passing minute is every man's equal possession but what has once gone by is not ours." - Marcus Aurelius


*/
 

 const quotes = [
    {quote: "'Don't wait for extraordinary opportunities, seize common ocasions and make them great.'", author: "- Orison Swett Marden"},
    {quote: "'Plunge boldly into the thick of life, and seize it where you will, it is always interesting.'", author: "- Johann Wolfgang von Goethe"},
    {quote: "'There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", author:"- Master Oogway"},
    {quote: "'Carpe Diem. Seize the day boys. Make your lifes extraordinary.", author: "- Robin Williams as John Keating"},
    {quote: "'You will never 'find' time for anything. If you want time, you must make it.", author: "- Charles Buxton"},
    {quote: "'Begin doing what you want to do now. We are not living in eternity. We have only this moment, sparkling like a star in our hand - and melting like a snowflake.", author: "- Francis Bacon"},
    {quote: "'One can make a day of any size.'", author: "- John Muir"},
    {quote: "'Carpe Diem.'", author:"- Horace (Greek Philosopher)"},
    {quote: "'Life is short, God's way of encouraging a bit of focus.'", author: "- Rovert Breault"},
    {quote: "'I held a moment in my hand, brilliant as a star, fragile as a flower, a tiny sliver of one hour. I dripped it carelessly, Ah! I didn't know, I held opportunity.'", author: "- Hazel Ying Lee"},
    {quote: "'Do not boast about tomorrow, for you do not know what a day may bring' - Proverbs 27:1", author:"- King Solomon"},
    {quote: "'Teach us to number our days, that we may gain a heart of wisdom' - Psalm 90:12", author: "- The Prophet Moses"},
    {quote: "'He has made everything beautiful in it's time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end' - Ecclesiastes 3:11", author: "- King Solomon"},
    {quote: "'Be very careful, then, how you live-not as unwise but as wise, making the most of every opportunity, because the days are evil.' - Ephesians 5:15-16", author: "- The Apostle Paul"},
    {quote: "'What I mean, brothers and sisters, is that the time is short. From now on those who have wives should live as if they do not.' - 1 Corinthians 7:29", author: " - The Apostle Paul"},
    {quote: "'Why, you do not even know what will happen tomorrow. What is your life? You are a a mist that appears for a little while and then vanishes.' - James 4:14", author: "- Christ Jesus"}, 
    {quote: "'There is a time for everything, and a season for every activity under the heavens: ... a time to plant and a time to uproot ... a time to tear down and a time to build.' - Ecclesiastes 3:1-4", author: "- King Solomon"},
    {quote: "'Give thyself time to learn something new and good, and cease to be whirled around.'", author: "- Marcus Aurelius"},
    {quote: "'Time is a sort of river of passing events, and strong is its current; no sooner is a thing brought to sight than it is swept by and another takes its place, and this too will be swept away.", author: "- Marcus Aurelius"},
    {quote: "'The passing minute is every man's equal possession but what has once gone by is not ours.'", author: "- Marcus Aurelius"},
    {quote: "'You can spend the entire second half of your life recovering from the mistakes of the first half.'", author: "- Saul Bellow"}
];
 

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

window.onload = function() {
    const randomQuote = getRandomQuote();
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('author').innerText = randomQuote.author;
};
