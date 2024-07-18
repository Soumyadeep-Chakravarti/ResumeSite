// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    let isValid = true;

    if (name === "") {
      alert("Name is required");
      isValid = false;
    }

    if (email === "") {
      alert("Email is required");
      isValid = false;
    }

    if (message === "") {
      alert("Message is required");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});

// Image Gallery with Modal View
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal img");
  const closeModal = document.querySelector(".modal .close");

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Animations
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function checkVisibility() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});

// Fetch and Display GitHub Projects
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/Soumyadeep-Chakravarti/repos")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector("#projects-container");
      data.forEach((repo) => {
        const div = document.createElement("div");
        div.classList.add("project-item");
        div.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description}</p>
                `;
        container.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching GitHub repos:", error));
});
