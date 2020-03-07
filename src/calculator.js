
function getData(name1, name2) {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,
    {
      method: "GET",
      // mode: 'no-cors',
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "c38e9d2aa8msh02613669b7e4ad6p1100d6jsn1dad9fcb46e4"
      }
    }
  )
    .then(response => {
      // console.log(response);
      response.json()
          .then(res => displayData(res));
    })
    .catch(err => {
      handleError();
    });

}

function handleError() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div class="err-message"> Something went wrong, click button to try again </div>
    <button class="try-again" onClick="window.location.reload();"> Try Again </button>
  `;
}

function displayData(obj) {
  const container = document.querySelector(".container");
  let percentage = obj.percentage;
  let res = obj.result;

  if (
    (obj.fname.toLowerCase() === "julia" &&
      obj.sname.toLowerCase() === "carlos") ||
    (obj.fname.toLowerCase() === "carlos" &&
      obj.sname.toLowerCase() === "julia")
  ) {
    percentage = 100;
    res = "Perfect Match";
  }

  container.innerHTML = `
    <div class="results">
      <h1 class="res-header"> 
        ${res}
      </h1>
      <div class="res-content">
        <div class="res-info">
          <div class="res-label">You:</div> 
          <div class="res-item">${obj.fname}</div>
        </div>
        <div class="res-info">
          <div class="res-label">Your Partner:</div> 
          <div class="res-item">${obj.sname}</div>
        </div>
        <div class="res-info">
          <div class="res-label">Compatability:</div> 
          <div class="res-item">${percentage}%</div>
        </div>
      </div>
    </div>
    <button class="try-again" onClick="window.location.reload();"> Reset </button>
  `;

  return container;
}

export const inputData = function() {
  // const results = document.querySelector("#results");
  const container = document.querySelector(".container");
  let form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let n1 = document.querySelector('input[name="name1"]').value;
      let n2 = document.querySelector('input[name="name2"]').value;
  
      container.innerHTML = '<div class="calculating"> Calculating... </div>';
      
      if (n1.length===0 || n2.length === 0) {
        results.innerHTML = "Please enter both names to continue";
        return;
      }
      
      getData(n1, n2);
    });
  }
};



