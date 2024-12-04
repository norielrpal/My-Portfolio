// Populate Initial Header Section
const header = document.getElementById("header");
header.innerHTML = `
  <div class="header container">
    <div class="nav-bar">
      <div class="brand">
        <a href="#profile">
          <h1><span>N</span>oriel <span>P</span>alustre</h1>
        </a>
      </div>
      <div class="nav-list">
        <div class="contain">
          <div class="bar"></div>
        </div>
        <ul>
          <li><a href="#profile" data-section="profile">Home</a></li>
          <li><a href="#about" data-section="about">About</a></li>
          <li><a href="#hobbies" data-section="hobbies">Hobbies</a></li>
          <li><a href="#movies" data-section="movies">Movies</a></li>
          <li><a href="#contact" data-section="contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

// Content Data
const contentData = {
  profile: `
    <div class="profile container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Noriel <span></span></h1>
        <a href="#about" type="button" id="cta" class="cta">Portfolio</a>
      </div>
    </div>
  `,
  about: `
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="./images/animeboy.jpg" alt="img" />
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>Me</span></h1>
        <h2>Third Year College</h2>
        <p>
          Hey there! I’m Noriel Palustre, a third-year IT student who lives
          and breathes code. From building apps to cracking problems, I'm all
          about using tech to make things better.
        </p>
      </div>
    </div>
  `,
  hobbies: `
    <div class="hobbies container">
      <div class="hobby-top">
        <h1 class="section-title">sk<span>i</span>lls</h1>
      </div>
      <div class="hobby-bottom">
        <div class="hobby-item">
          <h2>Reading</h2>
          <p>
            I’m always immersed in a good book. Whether it's fantasy, mystery,
            or sci-fi, reading transports me to different worlds and sparks my
            imagination. It’s my perfect escape after a long day of work or
            study.
          </p>
        </div>
        <div class="hobby-item">
          <h2>Singing</h2>
          <p>
            Singing is my therapy. When I’m not working, you’ll find me
            singing my favorite tunes. Whether in the shower or in front of a
            crowd, I’m always ready for a jam session.
          </p>
        </div>
        <div class="hobby-item">
          <h2>Cuddling with My Dog</h2>
          <p>
            There's nothing more comforting than curling up with my dog after
            a long day. Their unconditional love and cute cuddles always put
            me in a good mood!
          </p>
        </div>
        <div class="hobby-item">
          <h2>Playing Mobile Games</h2>
          <p>
            I’m always up for a challenge! Mobile games keep me sharp and
            entertained. Whether it's a strategy game or a casual match, I
            enjoy the thrill of a good game.
          </p>
        </div>
      </div>
    </div>
  `,
  movies: `
    <div class="movies container">
      <div class="movies-header">
        <h1 class="section-title">Favorite <span>Movies</span></h1>
      </div>
      <div class="all-movies">
        <div class="movie-item">
          <div class="movie-info">
            <h2>Frieren: Beyond Journey's End</h2>
            <p>
              Is an emotional and reflective anime about Frieren, an immortal
              elf who embarks on a journey after the conclusion of an
              adventure that spanned decades. As her human companions age and
              pass away, Frieren grapples with the fleeting nature of life and
              memories.
            </p>
          </div>
          <div class="movie-img">
            <img src="images/frieren.jpg" alt="Frieren: Beyond Journey's End" />
          </div>
        </div>
        <div class="movie-item">
          <div class="movie-info">
            <h2>Howl's Moving Castle</h2>
            <p>
              The film tells the story of Sophie, a young woman who is
              transformed into an elderly woman by a witch's curse. Seeking to
              break the curse, she embarks on a journey with a mysterious
              wizard named Howl and his magical, moving castle.
            </p>
          </div>
          <div class="movie-img">
            <img src="images/hmcatsle.jpg" alt="Howl's Moving Castle" />
          </div>
        </div>
      </div>
    </div>
  `,
  contact: `
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
          </div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+90 456 374 3333</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
          </div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>norielr.palustre@gmail.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
          </div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Lamesa, Santa Cruz, Marinduque</h2>
          </div>
        </div>
      </div>
    </div>
  `,
};

// Populate Content Dynamically on Navigation Click
const navLinks = document.querySelectorAll(".nav-list ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.dataset.section;
    const section = document.getElementById(sectionId);
    if (section && !section.innerHTML.trim()) {
      section.innerHTML = contentData[sectionId];
    }
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile Menu Script
const contain = document.querySelector(".header .nav-bar .nav-list .contain");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const headerContainer = document.querySelector(".header.container");

contain.addEventListener("click", () => {
  contain.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  const scroll_position = window.scrollY;
  headerContainer.style.backgroundColor =
    scroll_position > 250 ? "#29323c" : "transparent";
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    contain.classList.remove("active");
    mobile_menu.classList.remove("active");
  });
});

// Handle "My Portfolio" Button Click
const portfolioButton = document.querySelector(".cta-start");
const headerSection = document.getElementById("header");

portfolioButton.addEventListener("click", (event) => {
  event.preventDefault();

  headerSection.style.display = "block";

  const profileSection = document.getElementById("profile");
  if (profileSection && !profileSection.innerHTML.trim()) {
    profileSection.innerHTML = contentData.profile;
  }

  profileSection.scrollIntoView({ behavior: "smooth" });
});

// Delegate event for dynamically created elements
document.addEventListener("click", (event) => {
  // Check if the clicked element is the "cta" button
  if (event.target && event.target.id === "cta") {
    event.preventDefault();

    // Get the "about" section
    const aboutSection = document.getElementById("about");
    if (aboutSection && !aboutSection.innerHTML.trim()) {
      // Populate "about" content if not already populated
      aboutSection.innerHTML = contentData.about;
    }

    // Scroll to "about" section
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
});
