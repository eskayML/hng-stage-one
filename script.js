function updateUTCTime() {
  const utcTimeElement = document.getElementById('utc-time');
  const timstamp = document.getElementById('timestamp')

  function updateTime() {
    const currentTimeMillis = new Date().getTime() / 1000; // Convert to seconds
    const currentDateTime = new Date(currentTimeMillis * 1000); // Convert back to milliseconds
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDateTime.getUTCDay()];

    utcTimeElement.innerHTML = dayOfWeek;
    timestamp.innerHTML= new Date().getTime()
  }

  updateTime();

  setInterval(updateTime, 1000);
}

updateUTCTime();

document.getElementById('refresh-btn').addEventListener('click', updateUTCTime);
