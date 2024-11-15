const div = document.createElement("div");
document.body.appendChild(div);

function addParagraph() {
  const input = document.querySelector("#stalk").value;

  const p = document.createElement("p");
  //   p.innerHTML = input;
  //   apiStalk(input);

  chatgpt(input);

  //   div.appendChild(p);
}

// function apiStalk(profile) {
//   var profileurl = "";
//   const url = `https://instagram-profile1.p.rapidapi.com/getprofile/${profile}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "3cb95a11ccmsh693ac7b62c8c997p1d34d3jsn4a5b76661462",
//       "x-rapidapi-host": "instagram-profile1.p.rapidapi.com",
//     },
//   };

//   const api = fetch(url, options);
//   api
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       profile = data.profile_pic_url_proxy;
//       const image = document.querySelector(".img-data");
//       //   const image = document.createElement("img");
//       image.src = profile;
//       //   document.body.appendChild(image);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function chatgpt(datas) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9rRilshUfVi7fecoF4w8ThrGnXlNP400";

  const data = {
    contents: [
      {
        parts: [{ text: datas }],
      },
    ],
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const div = document.createElement("div");
      console.log(data);

      const divs = document.querySelector(".model");
      const bg = document.querySelector(".fixed-bg");
      bg.style.display = "block";

      divs.querySelector(".model-data p").innerHTML =
        data.candidates[0].content.parts[0].text;

      divs.style.display = "block";

      // document.body.appendChild(div); used for body m append krne k kam aata hain
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", close);

function close() {
  const divs = document.querySelector(".model");
  const bg = document.querySelector(".fixed-bg");
  bg.style.display = "none";
  divs.style.display = "none";
}

// div.classList.add("return-data");
// divs.appendChild(div);
