<template>
  <div class="front">
    <header></header>

    <main>
      <div class="intro">
        <div class="intro-text">
          <h4>
            AZAMAT AKHMADULLIN
          </h4>

          <h1>
            A SOFTWARE ENGINEER FROM <br> FUKUOKA<br>

          </h1>

          <p>Hi, I'm Azamat Akhmadullin, University student from Fukuoka.With a strong foundation in computer science disciplines, I create dynamic, data-driven applications and solutions.</p>

          <button class="contact-me-btn" @click="scrollToContact">contact me</button>


        </div>


      </div>

      <div class="about-me">

        <div class="about-me-img-tag">

        <img class="about-me-img" src="src/components/photo2.jpg" width="650" height="670"/>

        <img class="about-me-tag" ref="rotatingImage" src="src/components/icons/aboutMeTag.png"/>

        </div>

        <div class="about-me-text">
          <h1>ABOUT ME</h1>
          <p>
            I'm Azamat Akhmadullin, a data science enthusiast and web developer. I was born in Russia and later embarked on an exciting journey that took me to Fukuoka, Japan, where I pursued my university education.

            Outside of the digital world, I'm an avid fan of movies and TV series.

            I'm excited about what the future holds and am committed to making a meaningful impact through my work. If you'd like to collaborate or simply share your favorite movie recommendations, feel free to get in touch!
          </p>


          <img class="intro-img" src="src/components/photo1.jpg" width="650" height="790"/>
        </div>
      </div>

      <div class="services">
        <div class="services-list">
          <h5>SERVICES</h5>
          <ul>
            <li>Web Development</li>
            <li>Application Development</li>
            <li>Android Development</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div class="follow-me">
          <h5>FOLLOW ME</h5>
          <ul>
            <li><a href="https://github.com/alanoconner" >Github</a></li>
            <li><a href="https://instagram.com/ara._.aran" >Instagram</a></li>
          </ul>
        </div>
      </div>

      <div class="educational-background">
        <h1>EDUCATIONAL BACKGROUND</h1>
        <div class="educational-background-text">

          <div class="educational-background-text-line" >
          <p class="year">2008 ~ 2019</p>
          <p class="year-text"> school of general education "Bayard"</p>
          </div>

          <div class="educational-background-text-line" >
            <p class="year">2019 ~ 2021</p>
            <p class="year-text"> japanese language school "Kyushu Eisu Gakkan"</p>
          </div>

          <div class="educational-background-text-line" >
            <p class="year">2021 ~ present   </p>
            <p class="year-text"> Kyushu Institute of Information Sciences</p>
          </div>

        </div>

      </div>

      <div class="my-skills">
        <h1>MY SKILLS</h1>
        <ul>
          <li><img src="src/components/icons/java-logo.png" alt="Java" title="Java"></li>
          <li><img src="src/components/icons/js-logo.png" alt="Javascript" title="Javascript"></li>
          <li><img src="src/components/icons/ts-logo.png" alt="Typescript" title="Typescript"></li>
          <li><img src="src/components/icons/kotlin-logo.png" alt="Kotlin" title="Kotlin"></li>
          <li><img src="src/components/icons/mysql-logo.png" alt="MySQL" title="MySQL"></li>
          <li><img src="src/components/icons/python-logo.png" alt="Python" title="Python"></li>
          <li><img src="src/components/icons/php-logo.png" alt="PHP" title="PHP"></li>
          <li><img src="src/components/icons/aws.png" alt="AWS" title="AWS"></li>
        </ul>
      </div>

      <div class="portfolio">

        <h1>PORTFOLIO</h1>

        <ul class="portfolio-ul">
          <li class="portfolio-ul-li">
            <div class="portfolio-ul-li-img">
              <img src="src/components/coffee-screen.png" width="450" >
            </div>
            <div class="portfolio-ul-li-text">
              <p class="portfolio-year">STARS CAFE / 2023</p>
              <h2 class="portfolio-name">Coffee Shop <br> Website</h2>
              <div class="portfolio-link">
                <a href="https://github.com/alanoconner/stars-cafe">check on github</a>
                <img src="src/components/go-to-btn.png" width="65">
              </div>
            </div>
          </li>
          <li class="portfolio-ul-li">
            <div class="portfolio-ul-li-img">
              <img src="src/components/airplane-screen.png" width="440" >
            </div>
            <div class="portfolio-ul-li-text">
              <p class="portfolio-year">VAADIN APP / 2021</p>
              <h2 class="portfolio-name">Ticket Reservation <br> Website</h2>
              <div class="portfolio-link">
                <a href="https://github.com/alanoconner/java_Vaadin_ReservationApp">check on github</a>
                <img src="src/components/go-to-btn.png" width="65">
              </div>
            </div>
          </li>
          <li class="portfolio-ul-li">
            <div class="portfolio-ul-li-img">
              <img src="src/components/messenger-screen.png" width="350">
            </div>
            <div class="portfolio-ul-li-text">
              <p class="portfolio-year">JAVA MESSENGER / 2020</p>
              <h2 class="portfolio-name">Desktop Messenger <br> Application</h2>
              <div class="portfolio-link">
                <a href="https://github.com/alanoconner/java_messenger">check on github</a>
                <img src="src/components/go-to-btn.png" width="65">
              </div>
            </div>
          </li>
        </ul>

      </div>

      <div class="my-experience">

        <h1>MY EXPERIENCE</h1>

        <div class="my-experience-list">

          <div class="experience-text">
            <p class="experience-year">LINE / JUL 2022</p>
            <h2 class="experience-name">Data Science Intern</h2>
            <p class="experience-text-p">
              During my internship as a Data Scientist, I was introduced into world of data analytics and machine learning. I learned about algorithms and technics of extracting meaningful insights from the data.</p>
            <div class="experience-link">
              <a href="https://lycomm.co.jp/ja/">Website</a>
            </div>
          </div>

          <div class="experience-text-last">
            <p class="experience-year">SMALL STEP / APR 2023 - PRESENT</p>
            <h2 class="experience-name">Web Developer Intern</h2>
            <p class="experience-text-p">My role as a Web Developer honed my skills in creating dynamic and responsive web applications. I navigated the intersection of data and technology, showcasing my commitment to delivering impactful solutions.</p>
            <div class="experience-link">
              <a href="https://small-step.jp/">Website</a>
            </div>
          </div>

        </div>

      </div>

      <div id="contact" class="contact-me-form">

        <h1>
          CONTACT ME
        </h1>
        <form class="form" @submit.prevent="submitForm">
          <div class="form-first-row">
            <div class="form-first-row-column-1">
              <label for="input-1">Name</label>
              <input v-model="name" type="text" id="input-1" name="contact-name" required placeholder="Full name">
            </div>
            <div class="form-first-row-column-2">
              <label for="input-2">Email</label>
              <input v-model="email" type="text" id="input-2" name="contact-email" required placeholder="exapmle@yourmail.com">
            </div>
          </div>
          <div class="form-second-row">
            <label for="message">Message</label>
            <textarea v-model="message" id="message" placeholder="Enter your message..."></textarea>
          </div>

          <button id="send-message-btn" type="submit">SEND MESSAGE</button>
        </form>


      </div>

    </main>
    <footer>
      All rights reserved &copy; 2023
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotationAngle: 0, // Initial rotation angle
      name: '',
      email: '',
      message: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Calculate rotation angle based on scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      this.rotationAngle = scrollY;

      // Call the rotateImage method
      this.rotateImage();
    },
    rotateImage() {
      // Get the rotating image element using the ref
      const rotatingImage = this.$refs.rotatingImage;

      // Apply rotation using CSS transform property
      rotatingImage.style.transform = `rotate(${this.rotationAngle/7}deg)`;
    },
    scrollToContact() {
      // Find the target element by id
      const contactSection = document.getElementById('contact');

      // Check if the element exists
      if (contactSection) {
        // Scroll to the target element
        contactSection.scrollIntoView({
          behavior: 'smooth', // Use smooth scrolling
          block: 'start', // Align the top of the element to the top of the viewport
        });
      }
    },
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        // const data = await response.json();
        const data = "A";


        if (response.ok) {
          console.log('Email sent successfully:', data);
          // Optionally, you can reset the form fields here
        } else {
          console.error('Error sending email:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
 @import "assets/styles.css";
</style>