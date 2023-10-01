// Replace 'YOUR_API_KEY' with your actual Google Cloud API key
const API_KEY = 'AIzaSyAjHsU52Nhr3LosJYJ7LZcARV8u43J12Bo';

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const translateButton = document.getElementById('translateButton');
    const outputText = document.getElementById('outputText');

    translateButton.addEventListener('click', () => {
        const textToTranslate = inputText.value;

        if (textToTranslate) {
            // Make an API request to Google Translate API
            fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
                method: 'POST',
                body: JSON.stringify({
                    q: textToTranslate,
                    source: 'en',
                    target: 'hi' // Hindi language code
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.translations && data.data.translations.length > 0) {
                    const translation = data.data.translations[0].translatedText;
                    outputText.value = translation;
                } else {
                    console.error('Translation data is missing or empty:', data);
                }
            })
            .catch(error => {
                console.error('Translation error:', error);
            });
        }
    });
});
