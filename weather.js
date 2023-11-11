//Current unit of measure
let UNIT = 'c';

//Number of days to query for forecast
let FORECAST_DAYS = null;

//Icons for weather condition
const WEATHER_ICONS = {
    day: {
        "Sunny": 'img/sunny.png',
        "Partly cloudy": 'img/cloudyDay.png',
        "Cloudy": 'img/cloudyDay.png',
        "Overcast": 'img/overcast.png',
        "Mist": 'img/overcast.png',
        "Patchy rain possible": 'img/patchy-rain-day.png',
        "Patchy snow possible": 'img/patchy-snow.png',
        "Patchy sleet possible": 'img/patchy-snow.png',
        "Patchy freezing drizzle possible": 'img/patchy-snow.png',
        "Thundery outbreaks possible": 'img/thunder.png',
        "Blowing snow": 'img/snowStorm.png',
        "Blizzard": 'img/snowStorm.png',
        "Fog": 'img/fog.png',
        "Freezing fog": 'img/fog.png',
        "Patchy light drizzle": 'img/patchy-rain-day.png',
        "Light drizzle": 'img/patchy-rain-day.png',
        "Freezing drizzle": 'img/patchy-snow.png',
        "Heavy freezing drizzle": 'img/patchy-snow.png',
        "Patchy light rain": 'img/patchy-rain-day.png',
        'Light rain': 'img/patchy-rain-day.png',
        "Moderate rain at times": 'img/rain.png',
        "Moderate rain": 'img/rain.png',
        "Heavy rain at times": 'img/rain.png',
        "Heavy rain": 'img/rain.png',
        "Light freezing rain": 'img/patchy-snow.png',
        "Moderate or heavy freezing rain": 'img/patchy-snow.png',
        "Light sleet": 'img/patchy-snow.png',
        "Moderate or heavy sleet": 'img/patchy-snow.png',
        "Patchy light snow": 'img/snowfall.png',
        "Light snow": 'img/snowfall.png',
        "Patchy moderate snow": 'img/snowfall.png',
        "Moderate snow": 'img/snowfall.png',
        "Patchy heavy snow": 'img/snowfall.png',
        "Heavy snow": 'img/snowfall.png',
        "Ice pellets": 'img/hail.png',
        "Light rain shower": 'img/rain.png',
        "Moderate or heavy rain shower": 'img/rain.png',
        "Torrential rain shower": 'img/rain.png',
        "Light sleet showers": 'img/patchy-snow.png',
        "Moderate or heavy sleet showers": 'img/patchy-snow.png',
        "Light snow showers": 'img/snowfall.png',
        "Moderate or heavy snow showers": 'img/snowfall.png',
        "Light showers of ice pellets": 'img/hail.png',
        "Moderate or heavy showers of ice pellets": 'img/hail.png',
        "Patchy light rain with thunder": 'img/thunder-rain.png',
        "Moderate or heavy rain with thunder": 'img/thunder-rain.png',
        "Patchy light snow with thunder": 'img/snowfall.png',
        "Moderate or heavy snow with thunder": 'img/snowfall.png',
    },
    night: {
        "Clear": 'img/clear.png',
        "Partly cloudy": 'img/cloudyNight.png',
        "Cloudy": 'img/cloudyNight.png',
        "Overcast": 'img/overcast.png',
        "Mist": 'img/overcast.png',
        "Patchy rain possible": 'img/patchy-rain-night.png',
        "Patchy snow possible": 'img/patchy-snow.png',
        "Patchy sleet possible": 'img/patchy-snow.png',
        "Patchy freezing drizzle possible": 'img/patchy-snow.png',
        "Thundery outbreaks possible": 'img/thunder.png',
        "Blowing snow": 'img/snowStorm.png',
        "Blizzard": 'img/snowStorm.png',
        "Fog": 'img/fog.png',
        "Freezing fog": 'img/fog.png',
        "Patchy light drizzle": 'img/patchy-rain-night.png',
        "Light drizzle": 'img/patchy-rain-night.png',
        "Freezing drizzle": 'img/patchy-snow.png',
        "Heavy freezing drizzle": 'img/patchy-snow.png',
        "Patchy light rain": 'img/patchy-rain-night.png',
        "Light rain": 'img/patchy-rain-night.png',
        "Moderate rain at times": 'img/rain.png',
        "Moderate rain": 'img/rain.png',
        "Heavy rain at times": 'img/rain.png',
        "Heavy rain": 'img/rain.png',
        "Light freezing rain": 'img/patchy-snow.png',
        "Moderate or heavy freezing rain": 'img/patchy-snow.png',
        "Light sleet": 'img/patchy-snow.png',
        "Moderate or heavy sleet": 'img/patchy-snow.png',
        "Patchy light snow": 'img/snowfall.png',
        "Light snow": 'img/snowfall.png',
        "Patchy moderate snow": 'img/snowfall.png',
        "Moderate snow": 'img/snowfall.png',
        "Patchy heavy snow": 'img/snowfall.png',
        "Heavy snow": 'img/snowfall.png',
        "Ice pellets": 'img/hail.png',
        "Light rain shower": 'img/rain.png',
        "Moderate or heavy rain shower": 'img/rain.png',
        "Torrential rain shower": 'img/rain.png',
        "Light sleet showers": 'img/patchy-snow.png',
        "Moderate or heavy sleet showers": 'img/patchy-snow.png',
        "Light snow showers": 'img/snowfall.png',
        "Moderate or heavy snow showers": 'img/snowfall.png',
        "Light showers of ice pellets": 'img/hail.png',
        "Moderate or heavy showers of ice pellets": 'img/hail.png',
        "Patchy light rain with thunder": 'img/thunder-rain.png',
        "Moderate or heavy rain with thunder": 'img/thunder-rain.png',
        "Patchy light snow with thunder": 'img/snowfall.png',
        "Moderate or heavy snow with thunder": 'img/snowfall.png',
    }
}

//Icons for moon phases
const MOON_ICONS = {
    ['New Moon']: 'img/new_Moon.png',
    ['Waxing Crescent']: 'img/new_Moon.png',
    ['First Quarter']: 'img/new_First_Quarter.png',
    ['Waxing Gibbous']: 'img/Waxing_Gibbous.png',
    ['Full Moon']: 'img/Full_Moon.png',
    ['Waning Gibbous']: 'img/Waning_Gibbous.png',
    ['Last Quarter']: 'img/Last_Quarter.png',
    ['Waning Crescent']: 'img/Waning_Crescent.png',
}

const USER_GEO_INFO = {
    latitude: null,
    longitude: null,
}

//DOM elements
const header = {
    switchBtn: document.querySelector('.switch-btn'),
    searchCityInput: document.querySelector('#searchCityInput'),
    cityResultsList: document.querySelector('#cityResultsList'),
    show7DaysBtn: document.querySelector('#show-7days__button'),
    btnToMainPage: document.querySelector('#btnToMainPage'),
    geoName: document.querySelector('.header__geo-name'),
    dateInput: document.querySelector('#dateFilterInput'),
    dateFilterBtn: document.querySelector('#dateFilterBtn'),
}

const currentWeatherDiv = {
    div: document.querySelector('.current-weather'),
    header : document.querySelector('.current-weather__header'),
    temperature : document.querySelector('.current-weather__temperature'),
    cloudiness : document.querySelector('.current-weather__cloudiness'),
    feelsLike : document.querySelector('.current-weather__feels-like'),
    icon : document.querySelector('.current-weather__icon'),
    wind : document.querySelector('.current-weather__wind'),
    humidity : document.querySelector('.current-weather__humidity'),
}

const todayWeatherHourlyDiv = {
    div: document.querySelector('.hours-weather'),
    ul: document.querySelector('.hours-weather__list'),
}

const futureDaysWeatherDiv = {
    div: document.querySelector('.future-days-weather'),
    list: document.querySelector('.future-days-weather__list'),
}

const errorMessageDiv = {
    div: document.querySelector('.error-message__container'),
    span: document.querySelector('.message-span'),
    retryBtn: document.querySelector('.retry-btn'),
}

const sortingPanel = {
    buttons : document.querySelectorAll('.sort-panel__button'),
    panel: document.querySelector('.sort-panel'),
}

//Switching the unit of measure
header.switchBtn.addEventListener('click', () => {  
    if (UNIT === 'c') {
        UNIT = 'f';
    } else {
        UNIT = 'c';
    }

    header.switchBtn.classList.toggle('switch-on');

    getCurrentWeather(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
    getTodayWeatherHourly(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
    getForecastInfo(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude, FORECAST_DAYS);
});

//function with fetch request
function controller(url){
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
}

//Determination of location by IP address
controller('https://ipwho.is/')
    .then(data => {
        USER_GEO_INFO.latitude = data.latitude;
        USER_GEO_INFO.longitude = data.longitude;

        getCurrentWeather(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
        getTodayWeatherHourly(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
    })
    .catch(error => {
        console.error('Error fetching data:', error);

        errorMessageDiv.div.classList.remove('display__none');
        errorMessageDiv.span.textContent = 'An error occurred while loading data. Please try again later.';

        errorMessageDiv.retryBtn.addEventListener('click', () => {
            location.reload();
        });
    });

//Determination of more precise coordinates with the permission of the user
document.querySelector('#allowLocationAccess').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            USER_GEO_INFO.latitude = position.coords.latitude;
            USER_GEO_INFO.longitude = position.coords.longitude;

            getCurrentWeather(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
            getTodayWeatherHourly(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);

            futureDaysWeatherDiv.div.classList.add('display__none');
            currentWeatherDiv.div.classList.remove('display__none');
            todayWeatherHourlyDiv.div.classList.remove('display__none');
        }, error => {
            console.error('Ошибка при получении местоположения:', error.message);
            alert('Error getting location');
        })
    } else {
        console.error('Ваш браузер не поддерживает геолокацию.');
        alert('Your browser does not support geolocation.');
    }
}); 

//Search for weather in a specific location
header.searchCityInput.addEventListener('input', () => {
    header.cityResultsList.innerHTML = '';
    const cityResult = searchCityInput.value.trim();

    if (cityResult !== '') {
        controller(`https://api.openweathermap.org/geo/1.0/direct?q=${cityResult}&limit=5&appid=c604670d7f61f9cf793fc7f602b7ce96`)
        .then(data => {
            data.forEach(city => {
                renderCityLI(city);
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            const errorLi = document.createElement('li');
            errorLi.textContent = 'Request error.';
            header.cityResultsList.append(errorLi);
        });
    }
});

function renderCityLI(city){
    const cityName = `${city.name}, `;
    const cityCountry = `${city.country}`;
    const cityState = city.state ? `${city.state}, ` : '';

    const cityLi = document.createElement('li');
    cityLi.textContent = cityName + cityState + cityCountry;
    cityLi.setAttribute('data-lat', `${city.lat}`);
    cityLi.setAttribute('data-lon', `${city.lon}`);

    cityLi.addEventListener('click', () => {
        header.cityResultsList.innerHTML = '';
        USER_GEO_INFO.latitude = cityLi.getAttribute('data-lat');
        USER_GEO_INFO.longitude = cityLi.getAttribute('data-lon');

        getCurrentWeather(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
        getTodayWeatherHourly(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);

        futureDaysWeatherDiv.div.classList.add('display__none');
        currentWeatherDiv.div.classList.remove('display__none');
        todayWeatherHourlyDiv.div.classList.remove('display__none');
    });

    header.cityResultsList.append(cityLi);
}

//getting information about the current weather
function getCurrentWeather(lat, lon){
    const q = `${lat}, ${lon}`;

    controller(`https://api.weatherapi.com/v1/current.json?key=fb8d5b4b690d42c3b1e141239233007&q=${q}`)
        .then(data => {
            renderCurrentWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            currentWeatherDiv.header.textContent = 'Request error.';
            currentWeatherDiv.wind.textContent = `...`;
            currentWeatherDiv.humidity.textContent = `...`
        });
}

function renderCurrentWeather(data){
    let temperature = ``;
    let feelsLike = ``;
    const cloudiness = data.current.condition.text;
    const iconSrc = data.current.is_day === 0 ? WEATHER_ICONS.night[cloudiness] : WEATHER_ICONS.day[cloudiness];
    const position = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    const windKPH = data.current.wind_kph;
    const humidity = data.current.humidity;

    temperature = UNIT === 'c' ? `${data.current.temp_c} C°` : `${data.current.temp_f} F°`;
    feelsLike = UNIT === 'c' ? `Feels like ${data.current.feelslike_c} C°` : `Feels like ${data.current.feelslike_f} F°`;

    currentWeatherDiv.header.textContent = position;
    currentWeatherDiv.temperature.textContent = temperature;
    currentWeatherDiv.cloudiness.textContent = cloudiness;
    currentWeatherDiv.feelsLike.textContent = feelsLike;
    currentWeatherDiv.icon.src = iconSrc;
    currentWeatherDiv.wind.textContent = `${windKPH} K/H`;
    currentWeatherDiv.humidity.textContent = `${humidity} %`

    header.geoName.textContent = '';
    header.geoName.textContent = position;
}

//the function of obtaining information about today's weather hourly
function getTodayWeatherHourly(lat, lon){
    const q = `${lat}, ${lon}`;
    todayWeatherHourlyDiv.ul.innerHTML = '';

    controller(`https://api.weatherapi.com/v1/forecast.json?key=fb8d5b4b690d42c3b1e141239233007&q=${q}&days=1`)
        .then(data => {
            const hours = data.forecast.forecastday[0].hour;

            hours.forEach(hour => {
                todayWeatherHourlyDiv.ul.append(renderHourWeatherItem(hour));
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            todayWeatherHourlyDiv.div.textContent = 'Request error';
        });
}

function renderHourWeatherItem(hour){

    const listItem = document.createElement('li');
    const hourSpan = document.createElement('span');
    const temperatureSpan = document.createElement('span');
    const cloudinessDiv = document.createElement('div');
    const cloudinessIconImg = document.createElement('img');
    const cloudinessDescriptionSpan = document.createElement('span');
    const chanceOfRainSpan = document.createElement('span');
    const windSpeedSpan = document.createElement('span');
    const arrowDownImg = document.createElement('img');

    listItem.classList.add('hours-weather__item');
    hourSpan.classList.add('hours-weather__hour');
    temperatureSpan.classList.add('hours-weather__temperature');
    cloudinessDiv.classList.add('hours-weather__cloudiness');
    cloudinessIconImg.classList.add('hours-weather__weather-icon');
    cloudinessDescriptionSpan.classList.add('hours-weather__description');
    chanceOfRainSpan.classList.add('hours-weather__chanceOfRain');
    windSpeedSpan.classList.add('hours-weather__wind-speed');
    arrowDownImg.classList.add('hours-weather__wind-arrow');

    const cloudiness = hour.condition.text;
    const iconSrc = hour.is_day === 0 ? WEATHER_ICONS.night[cloudiness] : WEATHER_ICONS.day[cloudiness];

    hourSpan.textContent = hour.time.slice(-5);;
    temperatureSpan.textContent = UNIT === 'c' ? `${hour.temp_c}°` : `${hour.temp_f}°`;
    cloudinessIconImg.src = iconSrc;
    cloudinessIconImg.alt = cloudiness;
    cloudinessDescriptionSpan.textContent = cloudiness;
    chanceOfRainSpan.innerHTML = `<img src="img/drop.png" alt="Chance of rain">${hour.chance_of_rain}%`;
    windSpeedSpan.innerHTML = `<img src="img/wind.png" alt="Wind speed">${hour.wind_kph} km/h`;
    arrowDownImg.src = 'img/arrow-down.svg';
    arrowDownImg.alt = 'Open more info about hour weather';
    
    cloudinessDiv.appendChild(cloudinessIconImg);
    cloudinessDiv.appendChild(cloudinessDescriptionSpan);
    
    listItem.appendChild(hourSpan);
    listItem.appendChild(temperatureSpan);
    listItem.appendChild(cloudinessDiv);
    listItem.appendChild(chanceOfRainSpan);
    listItem.appendChild(windSpeedSpan);
    listItem.appendChild(arrowDownImg);

    arrowDownImg.addEventListener('click', () => {
        if (arrowDownImg.classList.contains('info-opened')) {
            const nextSibling = listItem.nextElementSibling;
            nextSibling.remove();
            arrowDownImg.classList.remove('info-opened');
        } else {
            arrowDownImg.classList.add('info-opened');
            listItem.insertAdjacentElement('afterend', renderMoreInfoHour(hour));
        }
    })

    return listItem;
}

function renderMoreInfoHour(hour){
    const listItem = document.createElement('li');
    const containerDiv = document.createElement('div');
    const firstRowDiv = document.createElement('div');
    const feelsLikeSpan = document.createElement('span');
    const humiditySpan = document.createElement('span');
    const uvSpan = document.createElement('span');
    const secondRowDiv = document.createElement('div');
    const cloudCoverSpan = document.createElement('span');
    const windChillSpan = document.createElement('span');
    const pressureSpan = document.createElement('span');

    listItem.classList.add('hours-weather__more-info', 'hours-more-info');
    containerDiv.classList.add('hours-more-info__container');
    firstRowDiv.classList.add('hours-more-info__first-row');
    feelsLikeSpan.classList.add('hours-more-info__feels-like');
    humiditySpan.classList.add('hours-more-info__humidity');
    uvSpan.classList.add('hours-more-info__uv');
    secondRowDiv.classList.add('hours-more-info__second-row');
    cloudCoverSpan.classList.add('hours-more-info__cloud-cover');
    windChillSpan.classList.add('hours-more-info__wind-chill');
    pressureSpan.classList.add('hours-more-info__pressure-mb');

    const feelsLike = UNIT === 'c' ? `${hour.feelslike_c} C°` : `${hour.feelslike_f} F°`;
    const humidity = `${hour.humidity}%`;
    const uv = hour.uv;
    const cloudCover = `${hour.cloud}%`;
    const windChill = UNIT === 'c' ? `${hour.windchill_c} C°` : `${hour.windchill_f} F°`;
    const pressureMb = `${hour.pressure_mb} mb`;

    feelsLikeSpan.innerHTML = `<img src="img/thermometr.png" alt="thermometr icon"> Feels like:<br><b>${feelsLike}</b>`;
    humiditySpan.innerHTML = `<img src="img/drop.png" alt="drop icon"> Humidity:<br><b>${humidity}</b>`;
    uvSpan.innerHTML = `<img src="img/sun.png" alt="sun icon"> UV:<br><b>${uv}</b>`;
    cloudCoverSpan.innerHTML = `<img src="img/cloud.png" alt="cloud icon"> Cloud cover:<br><b>${cloudCover}</b>`;
    windChillSpan.innerHTML = `<img src="img/wind.png" alt="wind icon"> Windchill:<br><b>${windChill}</b>`;
    pressureSpan.innerHTML = `<img src="img/pressure.png" alt="pressure icon"> Pressure:<br><b>${pressureMb}</b>`;

    firstRowDiv.appendChild(feelsLikeSpan);
    firstRowDiv.appendChild(humiditySpan);
    firstRowDiv.appendChild(uvSpan);

    secondRowDiv.appendChild(cloudCoverSpan);
    secondRowDiv.appendChild(windChillSpan);
    secondRowDiv.appendChild(pressureSpan);

    containerDiv.appendChild(firstRowDiv);
    containerDiv.appendChild(secondRowDiv);

    listItem.appendChild(containerDiv);

    return listItem;
}

//Getting weather information for the next 7 or 14 days
function getForecastInfo(lat, lon, daysSum){
    const q = `${lat}, ${lon}`;
    futureDaysWeatherDiv.list.innerHTML = '';

    controller(`https://api.weatherapi.com/v1/forecast.json?key=fb8d5b4b690d42c3b1e141239233007&q=${q}&days=${daysSum}`)
        .then(data => {
            const days = data.forecast.forecastday;

            const filterValue = getCheckedButtonValue();

            if (filterValue === 'From the hottest day to the coldest') {
                days.sort((a, b) => b.day.maxtemp_c - a.day.maxtemp_c);
            } else if (filterValue === 'From the coldest day to the hottest') {
                days.sort((a, b) => a.day.maxtemp_c - b.day.maxtemp_c);
            }
            days.forEach(day => {
                futureDaysWeatherDiv.list.append(renderWeekDayItem(day));
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            futureDaysWeatherDiv.div.textContent = 'Request error.';
        });
}

function renderWeekDayItem(day) {
    const listItem = document.createElement('li');
    const daySpan = document.createElement('span');
    const temperatureSpan = document.createElement('span');
    const cloudinessDiv = document.createElement('div');
    const cloudinessIconImg = document.createElement('img');
    const cloudinessDescriptionSpan = document.createElement('span');
    const chanceOfRainSpan = document.createElement('span');
    const chanceOfRainIcon = document.createElement('img');
    const windSpeedSpan = document.createElement('span');
    const windSpeedIcon = document.createElement('img');
    const arrowDownImg = document.createElement('img');

    listItem.classList.add('future-days-weather__item');
    daySpan.classList.add('future-days-weather__day');
    temperatureSpan.classList.add('future-days-weather__temperature');
    cloudinessDiv.classList.add('future-days-weather__cloudiness');
    cloudinessIconImg.classList.add('future-days-weather__weather-icon');
    cloudinessDescriptionSpan.classList.add('future-days-weather__description');
    chanceOfRainSpan.classList.add('future-days-weather__chanceOfRain');
    windSpeedSpan.classList.add('future-days-weather__wind-speed');
    arrowDownImg.classList.add('future-days-weather__wind-arrow');
    chanceOfRainIcon.classList.add('future-days-weather__icon');
    windSpeedIcon.classList.add('future-days-weather__icon');

    const dateDay = day.date.slice(8, 10);
    const dateMonth = day.date.slice(5, 7);
    const maxTemperature = UNIT === 'c' ? day.day.maxtemp_c : day.day.maxtemp_f;
    const minTemperature = UNIT === 'c' ? day.day.mintemp_c : day.day.mintemp_f;
    const cloudiness = day.day.condition.text;
    const iconSrc = WEATHER_ICONS.day[cloudiness];
    const chanceOfRain = day.day.daily_chance_of_rain;
    const windSpeed = day.day.maxwind_kph;

    daySpan.textContent = `${dateDay}.${dateMonth}`;
    temperatureSpan.textContent = `${maxTemperature}°/ ${minTemperature}°`;
    cloudinessIconImg.src = iconSrc;
    cloudinessIconImg.alt = cloudiness;
    cloudinessDescriptionSpan.textContent = cloudiness;
    chanceOfRainSpan.textContent = `${chanceOfRain}%`;
    windSpeedSpan.textContent = `${windSpeed} km/h`;
    arrowDownImg.src = 'img/arrow-down.svg';
    arrowDownImg.alt = 'show more info about day';
    windSpeedIcon.src = 'img/wind.png';
    chanceOfRainIcon.src = 'img/drop.png';
    
    windSpeedSpan.append(windSpeedIcon);
    chanceOfRainSpan.append(chanceOfRainIcon);
    cloudinessDiv.appendChild(cloudinessIconImg);
    cloudinessDiv.appendChild(cloudinessDescriptionSpan);
    
    listItem.appendChild(daySpan);
    listItem.appendChild(temperatureSpan);
    listItem.appendChild(cloudinessDiv);
    listItem.appendChild(chanceOfRainSpan);
    listItem.appendChild(windSpeedSpan);
    listItem.appendChild(arrowDownImg);

    arrowDownImg.addEventListener('click', () => {
        if (arrowDownImg.classList.contains('info-opened')) {
            const nextSibling = listItem.nextElementSibling;
            nextSibling.remove();
            arrowDownImg.classList.remove('info-opened');
        } else {
            arrowDownImg.classList.add('info-opened');
            listItem.insertAdjacentElement('afterend', renderMoreDayInfo(day));
        }
    })

    return listItem;
}

function renderMoreDayInfo(day){
    const containerDiv = document.createElement('div');
    const listItem = document.createElement('li');
    const bodyDiv = document.createElement('div');
    const firstRowDiv = document.createElement('div');
    const humiditySpan = document.createElement('span');
    const uvSpan = document.createElement('span');
    const secondRowDiv = document.createElement('div');
    const sunriseSpan = document.createElement('span');
    const sunsetSpan = document.createElement('span');
    const moonPhaseDiv = document.createElement('div');
    const moonPhaseImgDiv = document.createElement('div');
    const moonPhaseNameDiv = document.createElement('div');

    listItem.className = 'days-more-info';
    containerDiv.classList.add('days-more-info__container');
    bodyDiv.className = 'days-more-info__body';
    firstRowDiv.className = 'days-more-info__first-row';
    humiditySpan.className = 'days-more-info__humidity';
    uvSpan.className = 'days-more-info__uv';
    secondRowDiv.className = 'days-more-info__second-row';
    sunriseSpan.className = 'days-more-info__sunrise';
    sunsetSpan.className = 'days-more-info__sunset';
    moonPhaseDiv.className = 'days-more-info__moon-phase moon-phase';
    moonPhaseImgDiv.className = 'moon-phase__img';
    moonPhaseNameDiv.className = 'moon-phase__name';

    const humidity = `${day.day.avghumidity}%`;
    const uv = day.day.uv;
    const sunrise = day.astro.sunrise;
    const sunset = day.astro.sunset;
    const moonphase = day.astro.moon_phase;
    const moonphaseImg = MOON_ICONS[moonphase];

    humiditySpan.innerHTML = `<img src="img/drop.png" alt="drop icon"> Humidity:<br><b>${humidity}</b>`;
    uvSpan.innerHTML = `<img src="img/sun.png" alt="sun icon"> UV:<br><b>${uv}</b>`;
    sunriseSpan.innerHTML = `<img src="img/sunrise.png" alt="sunrise icon"> Sunrise:<br><b>${sunrise}</b>`;
    sunsetSpan.innerHTML = `<img src="img/sunset.png" alt="sunset icon"> Sunset:<br><b>${sunset}</b>`;
    moonPhaseImgDiv.innerHTML = `<img src="${moonphaseImg}" alt="${moonphase} icon">`;
    moonPhaseNameDiv.textContent = `${moonphase}`;

    firstRowDiv.appendChild(humiditySpan);
    firstRowDiv.appendChild(uvSpan);
    secondRowDiv.appendChild(sunriseSpan);
    secondRowDiv.appendChild(sunsetSpan);
    moonPhaseDiv.appendChild(moonPhaseImgDiv);
    moonPhaseDiv.appendChild(moonPhaseNameDiv);
    bodyDiv.appendChild(firstRowDiv);
    bodyDiv.appendChild(secondRowDiv);
    listItem.appendChild(bodyDiv);
    listItem.appendChild(moonPhaseDiv);

    return listItem;
}

//Event listener (show weather for 7, 14 days)
header.show7DaysBtn.addEventListener('click', () => {

    currentWeatherDiv.div.classList.add('display__none');
    todayWeatherHourlyDiv.div.classList.add('display__none');
    futureDaysWeatherDiv.div.classList.remove('display__none');
    sortingPanel.panel.classList.remove('display__none');

    FORECAST_DAYS = 7;

    getForecastInfo(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude, FORECAST_DAYS);
});

//Event listener (go to the main page for the current day)
header.btnToMainPage.addEventListener('click', () => {
    currentWeatherDiv.div.classList.remove('display__none');
    todayWeatherHourlyDiv.div.classList.remove('display__none');
    futureDaysWeatherDiv.div.classList.add('display__none');
    sortingPanel.panel.classList.add('display__none');

    getCurrentWeather(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
    getTodayWeatherHourly(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude);
});

//Sorting days
sortingPanel.buttons.forEach(button => {
    button.addEventListener('click', () => {
        checkSortButton(button)

        getForecastInfo(USER_GEO_INFO.latitude, USER_GEO_INFO.longitude, FORECAST_DAYS);
    });
});

function checkSortButton(clickedButton) {
    sortingPanel.buttons.forEach((button) => {
      if (button !== clickedButton) {
        button.classList.remove('checked');
      }
    });
  
    clickedButton.classList.add('checked');
}

function getCheckedButtonValue() {
    let checkedButtonValue = null;

    sortingPanel.buttons.forEach((button) => {
        if (button.classList.contains('checked')) {
            checkedButtonValue = button.value;
        }
    });

    return checkedButtonValue;
}
