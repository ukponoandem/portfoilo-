document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
   

    // Toggle navigation links on menu icon click
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Toggle the 'show' class
    });

        // Close the nav menu when a link is clicked
        // navLinks.querySelectorAll('a').forEach(link => {
        //     link.addEventListener('click', () => {
        //         navLinks.classList.remove('active'); // Close the menu
        //     });
        // });

    
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    });

    // Text animation
    const containerEl = document.querySelector('#container');
    const career = [' UKPONO ANDEM'];
    let careerIndex = 0;
    let characterIndex = 0;

    updateText();

    function updateText() {
        characterIndex++;
        containerEl.innerHTML = `<h1>${career[careerIndex].slice(0, characterIndex)} </h1>`;

        if (characterIndex === career[careerIndex].length) {
            careerIndex++;
            characterIndex = 0; // Reset character index for the new career string
        }

        // Reset careerIndex if it exceeds the length of the career array
        if (careerIndex >= career.length) {
            careerIndex = 0; // Loop back to the first string
        }

        setTimeout(updateText, 500);
    }

