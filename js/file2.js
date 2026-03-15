let userInput = document.querySelector(".user__input");
let divUserInfo = document.querySelector(".user__info")

userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    divUserInfo.innerHTML = '';
    fetch(`https://api.nationalize.io/?name=${userInput.value}`)
      .then((response) => response.json())
      .then((data) => {
        let arrCountry = data.country;
        let summ = 0;
        console.log(arrCountry);

        for (let i = 0; i < arrCountry.length; i++) {
          let number = arrCountry[i].probability;
          summ += number;
        }

        let onePercent = summ / 100;

        for (let i = 0; i < arrCountry.length; i++) {
          let countryId = arrCountry[i].country_id;
          let flag = countryId.toLowerCase()
          let probability = arrCountry[i].probability / onePercent;

          if (+probability.toFixed(0) > 0) {
            let userInfoP = document.createElement("p");
            userInfoP.innerHTML = `<img src="https://flagcdn.com/w40/${flag}.png"> ${countryId} = ${probability.toFixed(0)}%`;
            divUserInfo.append(userInfoP);
          }
        }
      });
  }
});
