let div = document.querySelector('.container');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new size (max 100): ')); // Parse input as a number

    // Validate the input
    if (isNaN(newSize) || newSize <= 0) {
        alert('Please enter a valid number greater than 0.');
        return; // Exit the function if the input is invalid
    }

    // Limit the grid size to 100
    if (newSize > 100) {
        alert('The maximum grid size is 100. Setting size to 100.');
        newSize = 100;
    }

    // Clear the container
    div.innerHTML = '';

    // Create the grid
    for (let i = 0; i < newSize; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        div.appendChild(newDiv);

        // Set styles using the style property
        newDiv.style.display = 'flex';
        newDiv.style.flex = 'auto';

        for (let j = 0; j < newSize; j++) {
            let newDiv2 = document.createElement('div');
            newDiv2.classList.add('item');
            newDiv.appendChild(newDiv2);

            // Set styles using the style property
            newDiv2.style.flex = 'auto';
            newDiv2.style.height = '40px';
            newDiv2.style.width = '40px';
            newDiv2.style.border = '1px solid black';
            newDiv2.style.margin = '2px';

            // Add hover effect
            newDiv2.addEventListener('mouseover', () => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                newDiv2.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            });
        }
    }
});