let anions = ["CO3", "CH3COOH", "NO3", "SO4"];
let cations = ["NH4", "Pb", "Al", "Zn", "Mn", "Ca", "Ba", "Sr", "Mg"];

let saltpicked = true;
let salt = "";
let cation;
let anion;
if (saltpicked) {
  cation = cations[Math.floor(Math.random() * cations.length)];
  anion = anions[Math.floor(Math.random() * anions.length)];
  console.log(cation, anion, salt);
  saltpicked = false;
}

let chemicals = {
  chemicals: [
    "H₂O",
    "Dil. HCl",
    "Conc. HCl",
    "Dil. H₂SO₄",
    "Conc. H₂SO₄",
    "NH₄OH",
    "(NH₄)₂SO₄",
    "conc. HNO₃",
    "BaCl₂",
    "Dil. HNO₃",
    "AgNO₃",
    "FeSO₄",
    "CH₃COOH",
    "(CH₃COO)₂Pb",
    "NaOH",
    "NH₄Cl",
    "Ammonium Oxalate",
    "Ppt from Group V test",
  ],
};

let easierchem = [
  "H2O",
  "Dil. HCl",
  "Conc. HCl",
  "Dil. H2SO4",
  "Conc. H2SO4",
  "NH4OH",
  "(NH4)2SO4",
  "Conc. HNO3",
  "BaCl2",
  "Dil. HNO3",
  "AgNO3",
  "FeSO4",
  "CH3COOH",
  "(CH3COO)2Pb",
  "NaOH",
  "NH4Cl",
  "Ammonium oxalate",
  "ppt",
];
let easierreag = [
  "Ammonium Molybdate",
  "FeCl3",
  "H2S",
  "(NH4)2CO3",
  "Na2HPO4",
  "K2HgI4",
  "Potassium Chromate",
  "Co(NO3)2",
  "K2CrO4",
  "Paper Ball",
  "magneson",
];
let reagents = [
  "Ammonium Molybdate",
  "FeCl₃",
  "H₂S",
  "(NH₄)₂CO₃",
  "Na₂HPO₄",
  "K₂HgI₄",
  "Potassium Chromate",
  "Co(NO₃)₂",
  "K₂CrO₄",
  "Paper Ball",
  "Magneson Reagent",
];
let contents = {
  chemicals: { contents: [], options: [] },
  glassrod: { contents: [] },
  reagents: { contents: [] },
  heating: false,
  aqueous: false,
};

let reaction_database = [
  {
    reacn: ["H2O"],
    aqueous: true,
    options: ["add"],
    reagents: [],
    glassrod: [],
    heat: false,
    outcomes: ["Ca", "CO3", "others"],
    results: ["insoluble", "insoluble", "soluble"],
  },
  {
    reacn: ["Dil. HCl"],
    aqueous: true,
    options: ["add"],
    reagents: [],
    glassrod: [],
    heat: false,
    outcomes: ["Pb", "CO3", "others"],
    results: [
      "insoluble and white precipitate",
      "soluble and colourless gas formed",
      "soluble and no characteristic observation",
    ],
  },
  {
    reacn: ["Dil. H2SO4"],
    aqueous: false,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["CH3COOH", "others"],
    results: ["Smell of vinegar", "No characteristic observation"],
  },
  {
    reacn: ["Conc. H2SO4"],
    aqueous: false,
    reagents: [],
    glassrod: ["NH4OH"],
    heat: false,
    options: ["add"],
    outcomes: ["Cl", "others"],
    results: [
      "thick white fumes when glass rod is kept near the opening of test tube and pungent smell",
      "No characteristic observation",
    ],
  },
  {
    reacn: ["Conc. H2SO4"],
    aqueous: false,
    reagents: ["Paper Ball"],
    glassrod: [],
    heat: true,
    options: ["add"],
    outcomes: ["NO3", "others"],
    results: ["Reddish brown vapour", "no characteristic observation"],
  },
  {
    reacn: ["Conc. HNO3"],
    aqueous: true,
    reagents: ["Ammonium Molybdate"],
    glassrod: [],
    heat: true,
    options: ["add"],
    outcomes: ["PO4", "others"],
    results: ["Yellow precipitate", "no characteristic observation"],
  },
  {
    reacn: ["Dil. HCl", "BaCl2"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["SO4", "others"],
    results: [
      "White precipitate insoluble in excess of HCl",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["BaCl2"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["CO3", "others"],
    results: [
      "white precipitate soluble in excess of HCl ",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["AgNO3", "Dil. HNO3"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Cl", "others"],
    results: [
      "White Curdy precipitate soluble in excess of NH4OH",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["FeSO4", "Conc. H2SO4"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "along the sides"],
    outcomes: ["NO3", "others"],
    results: [
      "A brown ring slowly forms at the junction of the two layers",
      "no characteristic observation",
    ],
  },
  {
    reacn: [],
    aqueous: true,
    reagents: ["FeCl3"],
    glassrod: [],
    heat: false,
    options: [],
    outcomes: ["CH3COO", "others"],
    results: ["Reddish brown colour", "no characteristic observation"],
  },
  {
    reacn: ["AgNO3"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["PO4", "others"],
    results: ["", "no characteristic observation"],
  },
  {
    reacn: ["CH3COOH", "(CH3COO)2Pb"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["SO4", "others"],
    results: ["White precipitate", "no characteristic observation"],
  },
  {
    reacn: ["NaOH"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: true,
    options: ["add"],
    outcomes: ["NH4", "others"],
    results: [
      "cololurless pungent smelling gas which fumes densely with conc. HCl and turns moist red litmus blue",
      "no characteristic observation",
    ],
  },

  {
    reacn: ["NH4Cl", "NH4OH"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Al", "others"],
    results: ["White gelatinous precipitate", "no characteristic observation"],
  },
  {
    reacn: ["NH4Cl", "NH4OH"],
    aqueous: true,
    reagents: ["H2S"],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Zn", "Mn", "others"],
    results: [
      "Dull White Precipitate",
      "Buff precipitate",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["NH4Cl", "NH4OH"],
    aqueous: true,
    reagents: ["(NH4)2CO3"],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Ca", "Ba", "Sr", "others"],
    results: [
      "White precipitate",
      "White precipitate",
      "White precipitate",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["NH4Cl", "NH4OH"],
    aqueous: true,
    reagents: ["Na2HPO4"],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Mg", "others"],
    results: ["White crystalline precipitate", "no characteristic observation"],
  },
  {
    reacn: ["NaOH"],
    aqueous: true,
    reagents: ["K2HgI4"],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["NH4", "others"],
    results: ["Reddish brown precipitate", "no characteristic observation"],
  },
  {
    reacn: [],
    aqueous: true,
    reagents: ["Potassium Chromate"],
    glassrod: [],
    heat: false,
    options: [],
    outcomes: ["Pb", "others"],
    results: ["Yellow Precipitate", "no characteristic observation"],
  },
  {
    reacn: ["Ash Test"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: [],
    outcomes: ["Al", "Zn", "others"],
    results: ["Blue ash", "Green ash", "no characteristic observation"],
  },
  {
    reacn: ["NaOH"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["drop by drop"],
    outcomes: ["Mn", "others"],
    results: [
      "White precipitate gradually turning brown",
      "no characteristic observation",
    ],
  },
  {
    reacn: ["ppt"],
    aqueous: true,
    reagents: ["K2CrO4"],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["Ba", "others"],
    results: ["Yellow precipitate", "no characteristic observation"],
  },
  {
    reacn: ["ppt", "(NH4)2SO4"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Sr", "others"],
    results: ["Scanty white precipitate", "no characteristic observation"],
  },
  {
    reacn: ["ppt", "Ammonium oxalate"],
    aqueous: true,
    reagents: [],
    glassrod: [],
    heat: false,
    options: ["add", "add"],
    outcomes: ["Ca", "others"],
    results: ["White precipitate solution", "no characteristic observation"],
  },
  {
    reacn: ["NaOH"],
    aqueous: true,
    reagents: ["magneson"],
    glassrod: [],
    heat: false,
    options: ["add"],
    outcomes: ["Mg", "others"],
    results: ["Deep blue solution", "No characteristic observation"],
  },
];
const chems = document.querySelector(".chemicals");
const reagent = document.querySelector(".reagents");
const other = document.querySelector(".other");
const submit = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const check = document.querySelector(".check");
const flame = document.querySelector(".flametest");
const ash = document.querySelector(".ashtest");
const aqueous = document.querySelector(".aqueous");
const heat = document.querySelector(".heatbtn");
const chemicalinfo = document.querySelector(".chemi");
const reagentinfo = document.querySelector(".reag");
const glassrodinfo = document.querySelector(".glassrod");
const heatinfo = document.querySelector(".heat");

window.onload = () => {
  updateDisplay();
};
submit.addEventListener("click", () => {
  DoReaction();
});
check.addEventListener("click", () => {
  let caton = prompt(
    "Please enter the cation (WITHOUT ANY CHARGES) eg: Ca, NH4"
  );
  if (caton == cation) {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
  let anon = prompt("Please enter the anion (WITHOUT ANY CHARGES) eg: CH3COO");
  if (anon == anion) {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
});
aqueous.addEventListener("click", () => {
  if (contents.aqueous == true) {
    contents.aqueous = false;
  } else {
    contents.aqueous = true;
  }
  updateDisplay();
});
clear.addEventListener("click", () => {
  ClearReaction();
  updateDisplay();
});

flame.addEventListener("click", () => {
  if (cation == "Ca") {
    alert("Brick Red flame");
  } else if (cation == "Ba") {
    alert("Pale green flame");
  } else if (cation == "Sr") {
    alert("crimson red flame");
  } else {
    alert("Colourless flame");
  }
});
heat.addEventListener("click", () => {
  if (contents.heating == true) {
    contents.heating = false;
  } else {
    contents.heating = true;
  }
  updateDisplay();
});
ash.addEventListener("click", () => {
  if (cation == "Al") {
    alert("Blue Ash");
  } else if (cation == "Zn") {
    alert("Green ash");
  } else {
    alert("No characteristic observation");
  }
});
chemicals.chemicals.forEach((chemical) => {
  x = document.createElement("button");
  x.setAttribute("class", chemical);
  x.innerText = chemical;

  chems.appendChild(x);
  setButton(x);
});

reagents.forEach((chemical) => {
  x = document.createElement("button");
  x.setAttribute("class", chemical);
  x.innerText = chemical;

  reagent.appendChild(x);
  setButton(x);
});

function setButton(btn) {
  btn.addEventListener("click", () => {
    if (chemicals.chemicals.includes(btn.innerText)) {
      let x = prompt("How would you like to put it");

      if (x == "glassrod") {
        contents.glassrod.contents[0] = btn.innerText;
      } else {
        contents.chemicals.contents.push(btn.innerText);
        contents.chemicals.options.push(x);
      }
    } else if (reagents.includes(btn.innerText)) {
      console.log("reagent");
      contents.reagents.contents.push(btn.innerText);
    }
    updateDisplay();
  });
}

function DoReaction() {
  let reacnchem = makeEasy(
    contents.chemicals.contents,
    easierchem,
    chemicals.chemicals
  );
  let reacnchemop = contents.chemicals.options;
  let reacnreagents = makeEasy(
    contents.reagents.contents,
    easierreag,
    reagents
  );
  let glassrodcont;

  if (contents.glassrod.contents[0]) {
    glassrodcont = [
      easierchem[chemicals.chemicals.indexOf(contents.glassrod.contents[0])],
    ];
  } else {
    glassrodcont = [];
  }
  let a = contents.aqueous;
  if (reacnchem.includes("H2O") || reacnchem.includes("Dil. HCl")) {
    a = true;
  }
  console.log(
    reacnchem,
    reacnchemop,
    reacnreagents,
    glassrodcont,
    a,
    contents.heating
  );
  let complete = false;

  reaction_database.forEach((reaction) => {
    let same = true;

    if (reacnchem.length == reaction.reacn.length) {
      console.log("same Length");
      reacnchem.forEach((elem) => {
        if (reaction.reacn.includes(elem)) {
        } else {
          same = false;
          console.log(`does not include ${elem}`);
          return;
        }
      });
      if (same == true) {
        reaction.options.forEach((option) => {
          if (
            option ==
            reacnchemop[
              reacnchem.indexOf(
                reaction.reacn[reaction.options.indexOf(option)]
              )
            ]
          ) {
          } else {
            console.log(`does not include ${option}`);
            same = false;
          }
        });
      }
    } else {
      same = false;
    }

    if (reacnchem.includes("ppt")) {
      a = true;
    }
    console.log(same);
    if (same == true) {
      console.log(reacnreagents, reaction.reagents);
    }
    if (
      same == true &&
      JSON.stringify(reacnreagents) == JSON.stringify(reaction.reagents) &&
      a == reaction.aqueous &&
      contents.heating == reaction.heat &&
      glassrodcont[0] == reaction.glassrod[0]
    ) {
      console.log(
        reaction,
        "YESSS",
        reaction.outcomes.includes("Ca"),
        reaction.outcomes
      );
      if (reaction.outcomes.includes(cation)) {
        alert(reaction.results[reaction.outcomes.indexOf(cation)]);
      } else if (reaction.outcomes.includes(anion)) {
        alert(reaction.results[reaction.outcomes.indexOf(anion)]);
      } else {
        alert(reaction.results[reaction.outcomes.indexOf("others")]);
      }
      ClearReaction();
      updateDisplay();
      complete = true;
    }
  });
  if (complete == false) {
    alert("Not a valid reaction in sylabus");
  }
}

function ClearReaction() {
  contents = {
    chemicals: { contents: [], options: [] },
    glassrod: { contents: [] },
    reagents: { contents: [] },
    heating: false,
  };
}

function updateDisplay() {
  chemicalinfo.textContent = "";
  reagentinfo.textContent = "";
  glassrodinfo.textContent = "";
  heatinfo.textContent = "";
  contents.chemicals.contents.forEach((c) => {
    let x = document.createElement("h1");
    x.innerText = `${c} - ${
      contents.chemicals.options[contents.chemicals.contents.indexOf(c)]
    }`;

    chemicalinfo.appendChild(x);
  });

  contents.reagents.contents.forEach((c) => {
    let x = document.createElement("h1");
    x.innerText = c;

    reagentinfo.appendChild(x);
  });

  contents.glassrod.contents.forEach((c) => {
    let x = document.createElement("h1");
    x.innerText = c;

    glassrodinfo.appendChild(x);
  });

  if (contents.heating) {
    let x = document.createElement("h1");
    x.innerText = "Heat";

    heatinfo.appendChild(x);
  } else {
    let x = document.createElement("h1");
    x.innerText = "No Heat";

    heatinfo.appendChild(x);
  }
  if (contents.aqueous) {
    let x = document.createElement("h1");
    x.innerText = "Aqueous";

    heatinfo.appendChild(x);
  } else {
    let x = document.createElement("h1");
    x.innerText = "Not aqueous";

    heatinfo.appendChild(x);
  }
}

function makeEasy(arr, refarr, reffarr) {
  let newarr = [];
  arr.forEach((elem) => {
    newarr.push(refarr[reffarr.indexOf(elem)]);
  });
  return newarr;
}
// {
//   reacn: [],
//   aqueous: true,
//   options: [],
//   reagents: [],
//   glassrod: [],
//   heat: false,
//   outcomes: [[""], "others"],
//   results: ["", "soluble"],
// },
