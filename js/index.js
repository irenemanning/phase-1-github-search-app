document.addEventListener('DOMContentLoaded', () => {
    
   
    const userList = document.getElementById("user-list")
    const searchForm = document.querySelector('#github-form')
    

    searchForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        let user = e.target[0].value
        //console.log(user)
        fetch(`https://api.github.com/search/users?q=${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Accept: 'application/json',
                Accept: 'application/vnd.github.v3+json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            //console.log(data.items) 
            data.items.forEach(item => {
                addDataToPage(item)
            });
            
        //console.log(data + "here")
        })
        
        // add user info to page function
        const addDataToPage = (key) => {
            console.log(key)
            let li = document.createElement('li')
            
            let h2 = document.createElement('h2')
            h2.innerHTML = key.login
            li.append(h2)
            userList.append(li)
            let img = document.createElement('img')
            img.src = key.avatar_url
            li.append(img)
        }
        //
    })

        
    
    
    



})
