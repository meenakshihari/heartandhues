
// cherished memories

const images = document.querySelectorAll(".gallery-images img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (images.length > 0 && nextBtn && prevBtn) {
  let currentIndex = 0;
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) {
        img.classList.add("active");
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  setInterval(nextImage, 10000);
  showImage(currentIndex);
}

// portfolio

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// contact 

function sendEmail(event) {
  event.preventDefault(); 

  const form = document.getElementById("contact-form");

  emailjs
    .sendForm("service_7b9llhd", "template_79or419", form, {
      publicKey: "JpEq35aFLSr1Dm9V1",
    })
    .then(() => {
      document.getElementById("success-message").style.display = "block";
      form.reset();
    })
    .catch((error) => {
      alert("Oops! Something went wrong. Please try again later.");
      console.error("EmailJS error:", error);
    });
}
