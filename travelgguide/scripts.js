document.addEventListener('DOMContentLoaded', () => {
    const routes = [
        {
            name: "Everest Base Camp",
            difficulty: "hard",
            duration: "14 days",
            image: "images/everest.jpg",
            description: "A challenging trek to the base of the world's highest mountain."
        },
        {
            name: "Annapurna  Base Camp",
            difficulty: "hard",
            duration: "14 days",
            image: "images/everest.jpg",
            description: "A challenging trek to the base of the world's highest mountain."
        },
        {
            name: "Mardi himal",
            difficulty: "moderate",
            duration: "5 days",
            image: "images/everest.jpg",
            description: "A challenging trek to the base of the world's highest mountain."
        }
        // Add more routes
    ];

    const hotels = [
        {
            name: "Hotel Everest View",
            location: "Namche Bazaar",
            price: "$150 per night",
            image: "images/hotel1.jpg"
        },
        // Add more hotels
    ];

    const dining = [
        {
            name: "The Everest Restaurant",
            location: "Namche Bazaar",
            type: "Nepali Cuisine",
            image: "images/dining1.jpg"
        },
        // Add more dining options
    ];

    const routesContainer = document.getElementById('routes-container');
    const difficultySelect = document.getElementById('difficulty');
    const accommodationList = document.querySelector('.accommodation-list');
    const diningList = document.querySelector('.dining-list');

    const displayRoutes = (filteredRoutes) => {
        routesContainer.innerHTML = '';
        filteredRoutes.forEach(route => {
            const routeCard = document.createElement('div');
            routeCard.classList.add('route-card');
            routeCard.innerHTML = `
                <img src="${route.image}" alt="${route.name}">
                <div class="route-card-content">
                    <h3>${route.name}</h3>
                    <p>${route.description}</p>
                    <a href="route-details.html" class="details">View Details</a>
                </div>
            `;
            routesContainer.appendChild(routeCard);
        });
    };

    const displayHotels = () => {
        accommodationList.innerHTML = '';
        hotels.forEach(hotel => {
            const hotelCard = document.createElement('div');
            hotelCard.classList.add('accommodation-card');
            hotelCard.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}">
                <h4>${hotel.name}</h4>
                <p>Location: ${hotel.location}</p>
                <p>Price: ${hotel.price}</p>
                <a href="#" class="details">More Details</a>
            `;
            accommodationList.appendChild(hotelCard);
        });
    };

    const displayDining = () => {
        diningList.innerHTML = '';
        dining.forEach(place => {
            const diningCard = document.createElement('div');
            diningCard.classList.add('dining-card');
            diningCard.innerHTML = `
                <img src="${place.image}" alt="${place.name}">
                <h4>${place.name}</h4>
                <p>Location: ${place.location}</p>
                <p>Type: ${place.type}</p>
                <a href="#" class="details">More Details</a>
            `;
            diningList.appendChild(diningCard);
        });
    };

    difficultySelect.addEventListener('change', (e) => {
        const selectedDifficulty = e.target.value;
        const filteredRoutes = selectedDifficulty === 'all' ? routes : routes.filter(route => route.difficulty === selectedDifficulty);
        displayRoutes(filteredRoutes);
    });

    displayRoutes(routes);
    displayHotels();
    displayDining();
});
document.addEventListener('DOMContentLoaded', () => {
    const findBuddyForm = document.getElementById('find-buddy-form');
    const buddyResults = document.getElementById('buddy-results');

    findBuddyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const trek = document.getElementById('trek').value;
        const date = document.getElementById('date').value;

        // Dummy data for demonstration
        const buddies = [
            { name: 'John Doe', trek: 'everest', date: '2024-08-15', contact: 'johndoe@example.com' },
            { name: 'Jane Smith', trek: 'annapurna', date: '2024-09-01', contact: 'janesmith@example.com' },
            { name: 'Mike Johnson', trek: 'langtang', date: '2024-10-10', contact: 'mikejohnson@example.com' }
        ];

        // Filter buddies based on selected trek and date
        const filteredBuddies = buddies.filter(buddy => buddy.trek === trek && buddy.date === date);

        // Display results
        buddyResults.innerHTML = '';
        if (filteredBuddies.length > 0) {
            filteredBuddies.forEach(buddy => {
                const buddyCard = document.createElement('div');
                buddyCard.classList.add('buddy-card');
                buddyCard.innerHTML = `
                    <h4>${buddy.name}</h4>
                    <p>Trek: ${buddy.trek}</p>
                    <p>Date: ${buddy.date}</p>
                    <p>Contact: <a href="mailto:${buddy.contact}" class="connect">${buddy.contact}</a></p>
                `;
                buddyResults.appendChild(buddyCard);
            });
        } else {
            buddyResults.innerHTML = '<p>No buddies found for the selected trek and date.</p>';
        }
    });
});
