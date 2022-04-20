// function GetText() {
//   fetch('message.txt')
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// function GetTextXML() {
//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//       console.log(this.responseText);
//     }
//   }

//   xhr.open('GET','message.txt',true);
//   xhr.send();
// }


function Abdulla() {
  fetch('https://randomuser.me/api/?results=50')
  .then(response => response.json())
  .then(data => {

    var x = "";

    data.results.forEach(user=> {
      x += `

      <div class="col-lg-3 col-6">
        <div class="card p225">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
              <i class="fa-solid fa-location-dot"><span>${user.location.city} / ${user.location.country}</span></i>
              <i class="fa-solid fa-envelope"><span>${user.email}</span></i>
          </div>
      </div>
      </div>
        
      `
    })

    document.getElementById('row').innerHTML = x;

  })
  .catch(error => console.log(error))
}


Abdulla();