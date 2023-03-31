// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult",
        person: "Seneca"
    }, 
    {
        quote: "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him",
        person: "Epictetus"
    }, 
    {
        quote: "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours",
        person: "Marcus Aurelius"
    }, 
    {
        quote: "Hang on to your youthful enthusiasms — you’ll be able to use them better when you’re older",
        person: "Seneca"
    }, 
    {
        quote: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart",
        person: "Marcus Aurelius"
    }, 
    {
        quote: "Make the best use of what is in your power, and take the rest as it happens",
        person: "Epictetus"
    }, 
    {
        quote: "I am not an Athenian or a Greek, but a citizen of the world",
        person: "Diogenes"
    }, 
    {
        quote: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well",
        person: "Epictetus"
    }, 
    {
        quote: "Knowledge is no guarantee of good behavior, but ignorance is a virtual guarantee of bad behavior",
        person: "Martha Nussbaum"
    }, 
    {
        quote: "Settle on the type of person you want to be and stick to it, whether alone or in company",
        person: "Marcus Aurelius"
    }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

