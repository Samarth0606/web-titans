// fetch -> web api -> request api -> return a promise

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(data){
//         return data.json()
// })
// .then(function(billo){
//     console.log(billo ,"response")
// })
// .catch(function(err){
//     console.log(err , 'errr')
// })

//data travells in small packets format -> 1st packet milta hai to fetch assumes entire data aagya


//entire wait -> .json() -> return a promise


// --------------------------
// fetch with async await

// async function callApi(){
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let resp = await data.json();
//     console.log(resp)
// }
// callApi();

//axios -> 3rd party -> promise
// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     console.log(resp)
//     console.log(resp.data)
// })
// .catch(function(err){
//     console.log(err)
// })


// axios -> async await

async function axiosApi(){
    let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
    console.log(resp.data)
}
axiosApi()

