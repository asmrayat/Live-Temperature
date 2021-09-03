const API_KEY = `a7011dcd89526ca8b03a820e6c622038`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const setInnertText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnertText('city', temp.name);
    setInnertText('temperature', temp.main.temp,);
    setInnertText('tempCon', temp.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weatherIcon');
    imgIcon.setAttribute('src', url)
}
