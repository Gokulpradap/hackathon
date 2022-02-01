let html = document.createElement("div")
html.innerHTML = `
<div class="header">
    <div class="header">
      <h1>
        <i class="bi bi-github" ></i>
        Search Your Repositry
      </h1>

      <input placeholder="User Name" type="text" value="" name="" id="getusername" />
     </input>

      <button class="" onclick="display()">Submit</button>
    </div>
</div>`
document.body.appendChild(html)
var data = document.getElementsByTagName("input");

async function display() {
  try {
    var getdata = await fetch(`https://api.github.com/users/${data[0].value}/repos`);
    var changeData = await getdata.json();
    var containera = document.createElement("div");
      containera.setAttribute("class", "conatinera");     

    changeData.forEach((userdata) => {
      
      var creatediv = document.createElement("div");

      creatediv.setAttribute("class", "card");
     
      creatediv.innerHTML = `
      <h5 class="card-title">User : ${userdata.owner.login}</h5>
      <p class="card-text">Repo_Name : ${userdata.name}</p>
      <img src="${userdata.owner.avatar_url}" class="card-img-top" alt="${userdata.owner.login}">
    <div class="card-body">    
      <p class="card-text">Forks_count : ${userdata.forks_count}</p>
      <p class="card-text">Star_count : ⭐${userdata.stargazers_count}</p>
      <a href="${userdata.clone_url}" class="btn btn-primary">Click Here for Repos</a>
    </div>
  `;  
      document.getElementsByClassName("card").innerText = "";
      containera.appendChild(creatediv);
      document.body.appendChild(containera);
      
    });
  } catch (error) {
    alert("Please Check The User Name");
  }
}

