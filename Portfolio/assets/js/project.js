AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects      https://bn-jo.github.io/QuizApp/ https://bn-jo.github.io/DrawingApp/
const projects = [{
        
        title: "Quiz",
        cardImage: "assets/images/quiz.png",
        description: "Quiz App",
        tagimg: "assets/images/project-page/quiz.png",
        Previewlink: "https://bn-jo.github.io/QuizApp/",
        Githublink: "https://github.com/bn-jo/QuizApp",
    },
                  {
        
        title: "Drawing App",
        cardImage: "assets/images/project-page/draw.png",
        description: "Fun drawing application",
        tagimg: "assets/images/project-page/draw.png",
        Previewlink: "https://bn-jo.github.io/DrawingApp/",
        Githublink: "https://github.com/bn-jo/DrawingApp",
    },
      {
        
        title: "Password Generator",
        cardImage: "assets/images/project-page/password.png",
        description: "password generator application",
        tagimg: "assets/images/project-page/password.png",
        Previewlink: "https://bn-jo.github.io/passwordGenerator/",
        Githublink: "https://github.com/bn-jo/passwordGenerator",
    },
        
        
                  {
        
        title: "Currency Converter",
        cardImage: "assets/images/project-page/CurrencyConverter.png",
        description: "Space Currency Converter is a cool project i made with Javascript",
        tagimg: "assets/images/project-page/CurrencyConverter.png",
        Previewlink: "https://bn-jo.github.io/Stars-Currency-converter/",
        Githublink: "https://github.com/bn-jo/passwordGenerator",
    },           
     {
        title: "Snake Game",
        cardImage: "assets/images/snake.png",
        description: "Snake Game with JS.",
        tagimg: "assets/images/snakes.jpg",
        Previewlink: "https://bn-jo.github.io/miniSnake/",
        Githublink: "https://github.com/bn-jo/miniSnake/",
    },           
    {
        title: "Joke Generator",
        cardImage: "https://s1.gifyu.com/images/Robot.gif",
        description: "Joke teller . This app will make you smile",
        tagimg: "assets/images/jokegenerator.png",
        Previewlink: "https://bn-jo.github.io/JokeGenerator/",
        Githublink: "https://github.com/bn-jo/JokeGenerator.git",
    },
    {
        title: "Pollack Machine",
        cardImage: "assets/images/Pollock_GIF_Optimized.gif",
        description: "Drip paint generator",
        tagimg: "assets/images/Pollock_GIF_Optimized.gif",
        Previewlink: "https://pollack-machine.vercel.app",
        Githublink: "https://github.com/bn-jo/PollackMachine.git",
    },
    {
        title: "Java Calculator",
        cardImage: "assets/images/Artboard45.png",
        description: "Build simple calculator with Java",
        tagimg: "assets/images/Artboard45.png",
        Previewlink: "https://drive.google.com/file/d/1WLNpK80F7YyVK-TLgmb6jpp0jdFxaHwt/view?usp=sharing",
        Githublink: "https://github.com/bn-jo/JavaGuide.git",
    },
    {
        title: "Animeted Navigation bar",
        cardImage: "assets/images/anav.png",
        description: "Animeted Nav with CSS and JS",
        tagimg: "assets/images/anav.png",
        Previewlink: "https://bn-jo.github.io/animetedNav/",
        Githublink: "https://github.com/bn-jo/animetedNav.git",
    },
    {
        title: "Hamburger Menu",
        cardImage: "assets/images/showcase.jpg",
        description: "Hamburger menu build with CSS",
        tagimg: "assets/images/showcase.jpg",
        Previewlink: "https://bn-jo.github.io/HamburgerMenu/",
        Githublink: "https://github.com/bn-jo/HamburgerMenu",
    },
    {
        title: "Drink Water App",
        cardImage: "assets/images/drink.png",
        description: "Drink Water App useing CSS and JS.",
        tagimg: "assets/images/pre.jpg",
        Previewlink: "https://bn-jo.github.io/drinkWaterApp/",
        Githublink: "https://github.com/bn-jo/drinkWaterApp",
    },
    {
        title: "Finance Website",
        cardImage: "assets/images/bnjos.png",
        description: "Finance Website with CSS JS.",
        tagimg: "assets/images/bnjos.jpg",
        Previewlink: "https://bn-jo.github.io/BnjosFinance/",
        Githublink: "https://github.com/bn-jo/BnjosFinance",
    }



];

// function for rendering project cards data
const showCards = () => {
    let output = "";
    projects.forEach(
        ({ title, cardImage, tags, Previewlink, Githublink }) => {
            (output += `       
        <div class="column skill-card card" style="margin: 5px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <ul class="menu-con">
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
                </div>
      
            </div>
          </div>
        </div>`)
        }
    );
    projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card, title;
    input = document.getElementById("myInput").value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName("skill-card");
    card = document.getElementsByClassName("card");
    title = document.getElementsByClassName("title");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (
            button[i].innerHTML.toUpperCase().includes(input) ||
            title[i].innerHTML.toUpperCase().includes(input)
        ) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}
