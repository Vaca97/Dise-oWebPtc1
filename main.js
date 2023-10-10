const cardGrid = document.getElementById('cardGrid');
        const cardImages = ['Gato_caballero.jfif', 
        'Labrador en patines.jfif', 'Gato malvado.jfif', 'capibaraWebDeveloper.jpg', 
        'hackerhamster.jpg', 'BelugaCEO.jpg', 'SuperDog.jpg', 'BussnsGirafe.jpg', 'BikerHorse.jpg', 
        'ProfessorElephant.jpg'];
        let flippedCards = [];
        let matchedPairs = 0;

        const cards = cardImages.concat(cardImages);

        shuffle(cards);

        cards.forEach((image, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.image = image;
            card.dataset.index = index;
            card.innerHTML = `<img src="${image}" class="bk">`;
            card.addEventListener('click', handleCardClick);
            cardGrid.appendChild(card);
        });

        function handleCardClick(event) {
            const card = event.target;

            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                card.classList.add('flipped');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkForMatch, 1000);
                }
            }
        }

        function checkForMatch() {
            const [card1, card2] = flippedCards;

            if (card1.dataset.image === card2.dataset.image) {
                card1.removeEventListener('click', handleCardClick);
                card2.removeEventListener('click', handleCardClick);
                matchedPairs++;

                if (matchedPairs === cardImages.length) {
                    setTimeout(() => {
                        alert('¡Has ganado!');
                        resetGame();
                    }, 500);
                }
            } else {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }

            flippedCards = [];
        }

        function resetGame() {
            location.reload();
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }