// function changeaboutmetext() {
//     const AboutMeTexts = ["Tech Enthusiast", "Devops Engineer", "Cloud Engineer", "Fullstack Developer" ];
//     const TypingSpeed = 100;
//     const EraseSpeed = 50;
//     const PauseTime = 500;
//     const AboutMeElement = document.querySelector('.about-me');
//     let TextIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;

//     function typeText() {
//         const currentText = AboutMeTexts[TextIndex];
        
         
        
        
        
        
        
        
        
        
//          if (!isDeleting && charIndex < currentText.length) {
//             AboutMeElement.textContent += currentText[charIndex];
//             charIndex++;
//             setTimeout(typeText, TypingSpeed);

//          }
//             else if (isDeleting && charIndex > 0) {
//                 AboutMeElement.textContent = currentText.substring(0, charIndex - 1);
//                 charIndex--;
//                 setTimeout(typeText, EraseSpeed);
//             } 
            
            
        







        
        
//         else {
//             isDeleting = !isDeleting;
//         if   (isDeleting){
//             TextIndex = (TextIndex + 1) % AboutMeTexts.length};
//             setTimeout(typeText, PauseTime);
//         }
//     }

//     typeText();
// }

// changeaboutmetext()
// const toggleButton = document.getElementById('toggle-dark-mode');

// toggleButton.addEventListener('click', function() {
//   document.body.classList.toggle('dark-mode');
// });

function changeAboutMeText() {
    const aboutMeTexts = ["Tech Enthusiast", "DevOps Engineer", "Cloud Engineer", "Fullstack Developer"];
    const typingSpeed = 150;
    const eraseSpeed = 100;
    const pauseTime = 500;
    const aboutMeElement = document.querySelector('.about-me');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, eraseSpeed);
        } else {
            if (!isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, pauseTime);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % aboutMeTexts.length;
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    typeText();
}

changeAboutMeText();

const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
