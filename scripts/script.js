console.log('ik ben gelinkt')

// Select the image and main elements
const imgElement = document.querySelector('body > img');
const mainElement = document.querySelector('main');

// Add a click event listener to the image
imgElement.addEventListener('click', () => {
    // Toggle the display of the main section
    if (mainElement.style.display === 'none' || mainElement.style.display === '') {
        mainElement.style.display = 'flex'; // Change to 'block' if needed
    } else {
        mainElement.style.display = 'none';
    }
});