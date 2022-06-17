import "./App.css";
function App() {
  const today = new Date();
  const hour = today.getHours();
  const time_period =
    hour >= 0 && hour < 12
      ? "morning"
      : hour >= 13 && hour < 18
      ? "afternoon"
      : "evening";
  return (
    <div
      class="'container-sm p-0 m-0"
      style={{
        overflowY: "scroll",
      }}
    >
      <section id="home">
      <h2 id="greeting">Good {time_period}! I'm Corey Fuller.</h2>
        <img
          src="https://s3.amazonaws.com/corey-fuller.com/images/me.jpg"
          class="img-fluid"
        />
        <h5
          style={{
            marginTop: "12px",
          }}
        >
          👋 Hi! I am a full stack software developer with emphases in business
          operations, devops, and cloud computing.
        </h5>
        <h5>
          I love learning about new technologies and building creative solutions
          to complex problems.
        </h5>
        <div
          class="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div class="col-6 col-sm-4">
            <a
              class="connection"
              href="https://www.linkedin.com/in/corey-fuller-/"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
              LINKEDIN
            </a>
          </div>
          <div class="col-6 col-sm-4">
            <a
              class="connection"
              href="https://instagram.com/cjfuller_official"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>
              INSTAGRAM
            </a>
          </div>
          <div class="col-6 col-sm-4">
            <a
              class="connection"
              href="https://github.com/coreyFuller"
              target="_blank"
            >
              <i class="bi bi-github"></i>
              GITHUB
            </a>
          </div>
          <div class="col-6 col-sm-4">
            <a
              class="connection"
              href="mailto: coreyfuller00@gmail.com"
              target="_blank"
            >
              <i class="bi bi-envelope"></i>
              EMAIL
            </a>
          </div>
          <div class="col-6 col-sm-4">
            <a
              class="connection"
              href="https://s3.amazonaws.com/corey-fuller.com/ref/Current+Resume%2C+Corey+Fuller.pdf"
              target="_blank"
            >
              <i class="bi bi-paperclip"></i>
              RESUME
            </a>
          </div>
        </div>
        <div class="arrow-down bouncy-director">
          <h6>Connect with me and swipe down to learn about my services.</h6>
          <i class="bi bi-arrow-down-circle-fill arrow-down"></i>
        </div>
      </section>
      <section id="services">
        <div class="content">
          <h3>My Services</h3>
          <p class="box box-font">Software Consulting</p>
          <p class="box box-font">Custom Software Development</p>
          <p class="box box-font">Data Analytics</p>
          <p class="box box-font">Personal Budgeting</p>
          <p class="box box-font">Database Design</p>
          <p class="box box-font">Web Development</p>
          <h4
            style={{
              opacity: "0.5",
            }}
          >
            For more information, contact me via email!
          </h4>
        </div>
        <div class="arrow-down bouncy-director">
          <h6>Swipe down for my skills.</h6>
          <i class="bi bi-arrow-down-circle-fill arrow-down"></i>
        </div>
      </section>
      <section id="skills">
        <h3
          style={{
            marginTop: "130px",
          }}
        >
          Skills
        </h3>
        <div class="card-group">
          <div class="connection skills">
            <h4 class="card-title">Programming Languages</h4>
            <ul>
              <li class="card-text">
                Coding: C#, Javascript, Java, Python, C, C++, HTML/CSS
              </li>
              <li>Scripting: Bash, PowerShell</li>
              <li>
                Database Management: MySQL, SQL Server, Postgres, DynamoDB
              </li>
            </ul>
          </div>
          <div class="connection skills">
            <h4 class="card-title">Tools</h4>
            <ul>
              <li class="card-text">
                Cloud: AWS, Heroku, Google Cloud Platform
              </li>
              <li class="card-text">
                CI/CD: Git, CircleCI, Azure Devops, Docker
              </li>
              <li class="card-text">
                Development: Visual Studio, Postman, REST, Linux, Windows
              </li>
            </ul>
          </div>
          <div
            class="connection skills"
            style={{
              height: "316px",
              width: "25rem",
            }}
          >
            <h4 class="card-title">Frameworks & Libraries</h4>
            <ul>
              <li class="card-text">
                Frontend: React, Angular, D3.js, Material UI, WPF
              </li>
              <li class="card-text">
                Backend: Express, .Net (ASP, Core, Framework)
              </li>
              <li class="card-text">
                Testing: Pester, JUnit, NUnit, Playwright
              </li>
            </ul>
          </div>
        </div>
        <div class="arrow-down bouncy-director">
          <h6>Swipe down for my projects.</h6>
          <i class="bi bi-arrow-down-circle-fill arrow-down"></i>
        </div>
      </section>
      <section id="projects">
        <h3>My Projects</h3>
        <div
          class="card-group p-4 m-4"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            class="project"
            style={{
              maxWidth: "400px",
              minHeight: "480px",
            }}
          >
            <img
              style={{
                maxWidth: "400px",
              }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4>Social Media Data Parser</h4>
              <p class="card-text">
                Python application that analyzes personal social media metadata
                requested from Snapchat, Instagram, and TikTok and reports
                information not immediately available through the platform apps.
              </p>
            </div>
            <a
              href="https://github.com/coreyFuller/Social-Media-Data-Parser"
              class="connection"
              target="_blank"
            >
              <i class="bi bi-github"></i>
              Source Code
            </a>
          </div>
          <div
            class="project"
            style={{
              maxWidth: "400px",
              height: "546px",
            }}
          >
            <img
              style={{
                maxWidth: "400px",
              }}
              src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4>Eleos Technologies Client Integration</h4>
              <p class="card-text">
                Implementation of Eleos Technologies Client Web Service using
                Express and Postgres. Deployed through Heroku.
              </p>
            </div>
            <a
              href="https://github.com/coreyFuller/eleostech-demo-service"
              class="connection"
              target="_blank"
            >
              <i class="bi bi-github"></i>
              Source Code
            </a>
          </div>
          <div
            class="project"
            style={{
              maxWidth: "400px",
              height: "546px",
            }}
          >
            <img
              style={{
                maxWidth: "400px",
              }}
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4>CU Connect</h4>
              <p class="card-text">
                A .Net application used to connect Clemson University computer
                science students taking similar classes and have similar
                hobbies. Made at CUhackit, Clemson's 24 hour hackathon.
              </p>
            </div>

            <a
              href="https://github.com/coreyFuller/ClemsonU-Connect"
              class="connection"
              target="_blank"
            >
              <i class="bi bi-github"></i>
              Source Code
            </a>
          </div>
        </div>
        <a
          href="#home"
          class="arrow-down"
          style={{
            color: "inherit",
            marginTop: "-36px",
          }}
        >
          <i class="bi bi-arrow-up-circle-fill arrow-down"></i>
          Click to return to the top.
        </a>
      </section>
    </div>
  );
}

export default App;
