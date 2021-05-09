class WeatherData {
  constructor(id, date, type, min, max, humidity, windSpeed) {
    this.id = id,
    this.date = date,
    this.type = type;
    this.min = min;
    this.max = max;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
}

export default WeatherData;