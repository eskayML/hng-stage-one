function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time');
      const currentTimeMillis = new Date().getTime();
      const currentTimeUTC = new Date(currentTimeMillis).toUTCString();
      utcTimeElement.textContent = currentTimeUTC;
  
      console.log("UTC Time uploaded")
  }
  
  document.getElementById('refresh-btn').addEventListener('click', updateUTCTime);
  
  // Initial time update
  updateUTCTime();