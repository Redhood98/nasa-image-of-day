document.addEventListener('DOMContentLoaded', () => {
    const imageOfTheDayElement = document.getElementById('imageOfTheDay');

    // Fetch NASA's Image of the Day
    fetch('https://api.nasa.gov/planetary/apod?api_key=cCdjmqlGi0bBiuC1XefBouNbYJIviX9fkTyjQYXP')
        .then(response => response.json())
        .then(data => {
            const title = data.title;
            const date = data.date;
            const explanation = data.explanation;
            const mediaType = data.media_type;
            const mediaUrl = data.url;

            // Display the image or video of the day
            let mediaElement;
            if (mediaType === 'video') {
                mediaElement = `<iframe src="${mediaUrl}" frameborder="0" allowfullscreen style="width: 100%; height: 500px; margin-top: 20px;"></iframe>`;
            } else {
                mediaElement = `<img src="${mediaUrl}" alt="NASA Image of the Day" style="width: 100%; height: auto; margin-top: 20px;">`;
            }

            imageOfTheDayElement.innerHTML = `
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Explanation:</strong> ${explanation}</p>
                ${mediaElement}
            `;
        })
        .catch(error => {
            imageOfTheDayElement.innerHTML = '<p>Error fetching NASA Image of the Day. Please try again later.</p>';
            console.error('Error fetching NASA Image of the Day:', error);
        });
});