const btnEl = document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey ="BKvsQoccZon/wNSvWTO5Vg==VdTZkvmiZiEkIPhz";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    }
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {
        jokeEl.innerText="updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading";
        //console.log("get joke");
        const response = await fetch(apiURL,options);
        const data=await response.json();
        jokeEl.innerText=data[0].joke;
        //console.log(data[0].joke);
        btnEl.disabled=false;
        btnEl.innerText="Tell Me a Joke"; 
    } catch (error) {
       // console.log(error);
       jokeEl.innerText="An error Happened..Try Again Later";
       btnEl.innerText="Tell Me a Joke"; 
    }
    
}

btnEl.addEventListener("click",getJoke)