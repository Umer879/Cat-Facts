let url = 'https://catfact.ninja/fact';
let btn = document.querySelector('button');
let factElement = document.querySelector('.fact');
btn.addEventListener("click", ()=>{
    getFacts()
    
})


async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data); // Log the response
        factElement.innerText = res.data.fact;  // Return the actual fact string
    } catch (err) {
        console.log(`ERROR - ${err}`);
        factElement.innerText = 'Fact Not Found'
    }
}
