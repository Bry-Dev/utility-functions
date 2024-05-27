/**
 * 
 * @param s string. It could be word or a letter. (e.g. sample)
 * @returns the capitalize of the string (e.g. Sample)
 */
function capitalize(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

/**
 * 
 * @param date to be formatted
 * @returns formatted date (e.g. "Monday 27 May 2024")
 */
function formattedDate(date: Date) {
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * 
 * @param itemList any types array
 * @returns array without duplicates
 */
function removeDuplicate(itemList: any[]) {
  return [...new Set(itemList)];
}

/**
 * 
 * @param celsius temperature for conversion
 * @returns converted value
 */
function celsiusToFahrenheit(celsius: number = 0) {
  return (celsius * 9 / 5) + 32;
}

/**
 * 
 * @param celsius temperature for conversion
 * @returns converted value
 */
function celsiusToKelvin(celsius: number = 0) {
  return celsius + 273.15;
}

/**
 * 
 * @param fahrenheit temperature for conversion
 * @returns converted value
 */
function fahrenheitToCelsius(fahrenheit: number = 0) {
  return (fahrenheit - 32) * 5 / 9;
}

/**
 * Convert Fahrenheit by utilizing existing function
 * @param fahrenheit temperature for conversion
 * @returns converted value
 */
function fahrenheitToKelvin(fahrenheit: number = 0) {
  return fahrenheitToCelsius(fahrenheit) + 273.15;
}

/**
 * Convert kelvin to fahrenheit by utilizing existing functions
 * @param kelvin temperature for conversion
 * @returns converted value
 */
function kelvinToFahrenheit(kelvin: number = 0) {
  return (celsiusToFahrenheit(kelvin - 273.15));
}

/**
 * 
 * @param kelvin temperature for conversion
 * @returns converted value
 */
function kelvinToCelsius(kelvin: number = 0) {
  return kelvin - 273.15;
}