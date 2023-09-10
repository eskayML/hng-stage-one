function updateUTCTime() {
  const utcTimeElement = document.getElementById('utc-time');

  function updateTime() {
    const currentTimeMillis = new Date().getTime();
    const currentTimeUTC = new Date(currentTimeMillis).toUTCString();
    utcTimeElement.innerHTML = currentTimeUTC;
  }

  updateTime();

  setInterval(updateTime, 1000);
}

updateUTCTime();

document.getElementById('refresh-btn').addEventListener('click', updateUTCTime);