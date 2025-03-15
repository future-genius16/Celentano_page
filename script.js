document.getElementById("showFact").addEventListener("click", function () {
    const facts = [
        "Celentano is known as the 'Molleggiato' due to his unique dancing style.",
        "He once released a song with complete gibberish lyrics to show how English sounds to Italians.",
        "Despite his fame, he has always maintained a very private life.",
        "Celentano was a huge star in both music and film, dominating both industries for decades.",
        "He was also a successful television host in Italy during the 1970s and 80s.",
        "Adriano Celentano’s famous hit 'Azzurro' became a symbol of Italian popular music."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("factDisplay").textContent = randomFact;
});
