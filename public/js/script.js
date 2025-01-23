document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("quizModal")
    const openBtn = document.getElementById("openQuizBtn")
    const closeBtn = document.querySelector(".close")
    const submitBtn = document.getElementById("submitQuiz")
    const moodSelect = document.getElementById("moodSelect")
    const sliderContainer = document.querySelector(".slider-container")
    const prevArrow = document.querySelector(".prev-arrow")
    const nextArrow = document.querySelector(".next-arrow")
    const reviewForm = document.getElementById("reviewForm")
    let currentIndex = 0
  
    // Modal functionality
    openBtn.addEventListener("click", () => {
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  
    const closeModal = () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
      moodSelect.value = ""
    }
  
    closeBtn.addEventListener("click", closeModal)
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal()
      }
    })
  
    submitBtn.addEventListener("click", () => {
      if (moodSelect.value) {
        alert(`Thank you for sharing how you feel: ${moodSelect.value}`)
        closeModal()
      } else {
        alert("Please select how you're feeling before submitting.")
      }
    })
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeModal()
      }
    })
  
    // Service slider functionality
    const slideWidth = document.querySelector(".service-card").offsetWidth + 20
  
    nextArrow.addEventListener("click", () => {
      if (currentIndex < sliderContainer.children.length - 1) {
        currentIndex++
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`
      }
    })
  
    prevArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`
      }
    })
  
    // Review form functionality
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const reviewText = document.getElementById("reviewText").value
      if (reviewText.trim() !== "") {
        alert("Thank you for your review! It has been submitted successfully.")
        reviewForm.reset()
      } else {
        alert("Please write a review before submitting.")
      }
    })
  })
  
  