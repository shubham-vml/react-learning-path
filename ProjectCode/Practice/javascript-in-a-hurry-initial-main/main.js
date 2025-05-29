const convert_temp = (temp) => (temp * 9) / 5 + 32;

/*HTMLCollection(15) [p, p#weather, p, p.product-author, p.price-title, p.product-price, p.product-author, p.price-title, p.product-price, p.product-author, p.price-title, p.product-price, p, p, p, weather: p#weather]
 */

let temp = 25;
console.log(convert_temp(temp));
text_cel = `The weather is cloudy in Delhi and it's ${temp} C outside.`;

text_fah = `The weather is cloudy in Delhi and it's ${convert_temp(
  25
)} F outside.`;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    //Test the condition for the Celsius and Farenheit

    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = text_cel;

      console.log("Clicked on the celsius button");
    } else if (e.target.id == "fahr") {
      console.log("Clicked on the Farenheit button");
      document.querySelector("p#weather").innerHTML = text_fah;
    }
    console.log(e.target.id);
  });
