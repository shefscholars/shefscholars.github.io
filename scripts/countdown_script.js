function startCountdown(targetDate, elementId) {
    const element = document.getElementById(elementId);
  
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      if (timeLeft <= 0) {
        element.textContent = "Time's up!";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
  
      element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    calculateTimeLeft();
    setInterval(calculateTimeLeft, 1000);
  }
  
  // Set target dates
  const discountEndDate = new Date("January 27, 2025 23:59:59 UTC -12").getTime();
//   const discountEndDate = new Date(Date.UTC(2025, 0, 27, 23, 59, 59));
  const applicationCloseDate = new Date("January 30, 2025 23:59:59 UTC -12").getTime()
  
  // Start the countdowns
  startCountdown(discountEndDate, "discountTimer");
  startCountdown(applicationCloseDate, "applicationTimer");
  