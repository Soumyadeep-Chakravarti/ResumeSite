// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
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

    if (name.trim() === "") {
      alert("Name is required");
      isValid = false;
    }

    if (email.trim() === "") {
      alert("Email is required");
      isValid = false;
    }

    if (message.trim() === "") {
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
      modalImg.alt = this.alt; // Set alt text for accessibility
      modalImg.setAttribute("aria-describedby", "modal-caption"); // Example for adding aria-describedby
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

  // Keyboard accessibility (optional)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector("#projects-container");
      data.forEach((repo) => {
        const div = document.createElement("div");
        div.classList.add("project-item");
        div.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description provided"}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error fetching GitHub repos:", error);
      const container = document.querySelector("#projects-container");
      container.innerHTML = "<p>Failed to fetch GitHub projects.</p>";
    });
});
