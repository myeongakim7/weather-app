// app.js

// https://openweathermap.org/ 로그인 후 내 api 가져오기
const API_KEY = "7da8cd09bfaaedc18b007356aecf7b8f";
// 내 API 복붙한거
let city_name = "Seoul";
let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
// 변수에는 공백이 들어가면 안됨 '_'라도 넣어주기

// 서버에서 불러오는 작업은 비동기 처리
fetch(API_URL)
  .then(function (응답데이터) {
    // 응답데이터.json();
    return 응답데이터.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.weather[0].main);
    const desc = data.weather[0].main; // 날씨상태 ex)흐림
    const weather_icon = data.weather[0].icon; // 아이콘
    const temp = parseInt(data.main.temp - 273.15); // 현재온도 < 화씨로 나옴 ->(( parseInt < 정수로 바꿈 ))섭씨로 바꿔야함
    // 273.15 < 절대온도값 빼기
    const name = data.name; // 도시이름

    console.log(name, desc, weather_icon, temp);

    // UI 출력(DOM)
    const citynameE1 = document.querySelector(".cityname");
    const iconE1 = document.querySelector(".icon");
    const tempE1 = document.querySelector(".temp");
    const descE1 = document.querySelector(".desc");

    citynameE1.textContent = name;
    iconE1.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather_icon}@2x.png' alt='아이콘'/>`;
    tempE1.innerHTML = `${temp}&deg;`;
    descE1.textContent = desc;
  });
