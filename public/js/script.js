document.addEventListener("DOMContentLoaded", () => {
  const quizModal = document.getElementById("quizModal");
  const userInfoModal = document.getElementById("userInfoModal");
  const openQuizBtn = document.getElementById("openQuizBtn");
  const userInfoBtn = document.getElementById("userInfoBtn");
  const closeBtns = document.querySelectorAll(".close");
  const submitQuizBtn = document.getElementById("submitQuiz");
  const emojiContainer = document.getElementById("emojiContainer");
  const quizContainer = document.getElementById("quizContainer");
  const userInfoForm = document.getElementById("userInfoForm");
  const reviewContainer = document.getElementById("reviewContainer");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitReviewBtn = document.getElementById("submitReview");

  function openModal(modal) {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  }

  openQuizBtn.addEventListener("click", () => {
      openModal(quizModal);
      emojiContainer.style.display = "block";
      quizContainer.style.display = "none";
      setTimeout(() => {
          emojiContainer.style.display = "none";
          quizContainer.style.display = "block";
      }, 3000);
  });

  userInfoBtn.addEventListener("click", () => {
      openModal(userInfoModal);
      userInfoForm.style.display = "block";
      reviewContainer.style.display = "none";
  });

  closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          closeModal(quizModal);
          closeModal(userInfoModal);
      });
  });

  window.addEventListener("click", (event) => {
      if (event.target === quizModal) {
          closeModal(quizModal);
      }
      if (event.target === userInfoModal) {
          closeModal(userInfoModal);
      }
  });

  submitQuizBtn.addEventListener("click", () => {
      const mood = document.getElementById("moodSelect").value;
      const activity = document.getElementById("activitySelect").value;
      if (mood && activity) {
          alert(`Thank you for sharing. Your mood: ${mood}, Relaxing activity: ${activity}`);
          closeModal(quizModal);
      } else {
          alert("Please answer all questions before submitting.");
      }
  });

  nextBtn.addEventListener("click", () => {
      const email = document.getElementById("userEmail").value;
      const phone = document.getElementById("userPhone").value;
      if (email && phone) {
          userInfoForm.style.display = "none";
          reviewContainer.style.display = "block";
      } else {
          alert("Please fill in both email and phone number.");
      }
  });

  backBtn.addEventListener("click", () => {
      userInfoForm.style.display = "block";
      reviewContainer.style.display = "none";
  });

  submitReviewBtn.addEventListener("click", () => {
      const review = document.getElementById("userReview").value;
      if (review) {
          alert("Thank you for your review!");
          closeModal(userInfoModal);
      } else {
          alert("Please write a review before submitting.");
      }
  });
});