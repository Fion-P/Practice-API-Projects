
function getData(name1, name2) {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "c38e9d2aa8msh02613669b7e4ad6p1100d6jsn1dad9fcb46e4"
      }
    }
  )
    .then(response => {
      response.json()
          .then(res => displayData(res));
    })
    .catch(err => {
      // console.log(err);
    });

}

function displayData(obj) {
  const results = document.querySelector("#results");
  const percentage = obj.percentage;
  results.innerHTML = `
    <div>
      <h1>
        You two are ${percentage}% compatible!
      </h1>
      <div>
        <div>
          You: ${obj.fname}
        </div>
        <div>
          Your Partner: ${obj.sname}
        </div>
        <div>
          Result: ${obj.result}
        </div>
      </div>
    </div>
  `;

  return results;
}

export const inputData = function() {
  const results = document.querySelector("#results");
  let form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let n1 = e.target.children.name1.value;
    let n2 = e.target.children.name2.value;
    results.innerHTML = "Calculating...";
    
    if (n1.length===0 || n2.length === 0) {
      results.innerHTML = "Please enter both names to continue";
    }
    let inputs = document.querySelectorAll("#name");

    inputs.forEach( input => {
      input.disabled = true;
    });
    
    getData(n1, n2);
  });
};

export const tryAgain = function() {
  let btn = document.querySelector(".try-again");
  const results = document.querySelector("#results");

  btn.addEventListener("click", (e) => {
      e.preventDefault();

      let inputs = document.querySelectorAll("#name");
      results.innerHTML = "";

      inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
      });
  });
};


