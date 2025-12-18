async function setDynamicBackground() {
  try {
    const response = await fetch('https://wttr.in/Chandler?format=j1');
    const data = await response.json();
    const weather = data.current_condition[0].weatherDesc[0].value.toLowerCase();
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;

    let background = '';

    if (weather.includes('sun') || weather.includes('clear')) {
      background = isDay ? 'url("Assets\PlaceHolder.jpeg")' : 'url("Assets\PlaceHolder.jpeg")';
    } else if (weather.includes('cloud') || weather.includes('fog')) {
      background = 'url("Assets\PlaceHolder.jpeg")';
    } else if (weather.includes('rain') || weather.includes('storm')) {
      background = 'url("Assets\PlaceHolder.jpeg")';
    } else {
      background = 'url("Assets\PlaceHolder.jpeg")';
    }

    document.body.style.backgroundImage = background;
  } catch (err) {
    console.error('Error fetching weather data:', err);
    document.body.style.backgroundImage = 'url("Assets/neutral.jpg")';
  }
}

setDynamicBackground();
