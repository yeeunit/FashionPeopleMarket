import { useEffect, useState } from "react";
import WeatherUI from "./Weather.presenter";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const cities = ["Seoul", "Tokyo", "New York", "Paris"];

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log("현재위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4d1c3971b21d31791351d01000cb1bd&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  // const onChangeCity = async (city) => {
  //   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4d1c3971b21d31791351d01000cb1bd&units=metric`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setWeather(data);
  //   setCity(data.name);
  //   console.log("c", city);
  // };

  const onClickCity = ({ city, setCity }) => {};

  const onChangeCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4d1c3971b21d31791351d01000cb1bd&units=metric`;
    setLoading(true);

    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      onChangeCity();
    }
  }, [city]);

  return (
    <>
      <WeatherUI
        loading={loading}
        weather={weather}
        setCity={setCity}
        cities={cities}
        onChangeCity={onChangeCity}
        onClickCity={onClickCity}
      />
    </>
  );
}
