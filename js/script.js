const url = "https://randomuser.me/api/?results=53"; 

const page = document.querySelector(".page");
page.insertAdjacentHTML("beforeend",
    `<ul class="pagination"></ul>`
    );

async function getUsers(){

    const response = await fetch(url);
    const users = await response.json();
    
    const contactList = document.querySelector(".contact-list");
    const results = users["results"];

    const pagination = document.querySelector(".pagination");

    const pageNum = Math.ceil(results.length / 10);

    for (let i = 1; i <= pageNum; i++)
    {
        pagination.insertAdjacentHTML("beforeend",`<li><a onclick=>${i}</a></li>`);
    }

    for (let i = 0; i < 10; i++){

        contactList.insertAdjacentHTML("afterbegin",
            `<li class="contact-item cf">
                <div class="contact-details">
                    <img class="avatar" src=${results[i].picture.thumbnail}>
                    <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                    <span class="email">${results[i].email}</span>
                </div>
                <div class="joined-details">                       
                    <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                </div>
            </li>`
        );
    }

    let a = document.getElementsByTagName("a");
    
    a[0].onclick = function(){

    contactList.innerHTML = "";

    for (let i = 0; i < 10; i++){

         contactList.innerHTML += 
            `<li class="contact-item cf">
                <div class="contact-details">
                    <img class="avatar" src=${results[i].picture.thumbnail}>
                    <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                    <span class="email">${results[i].email}</span>
                </div>
                <div class="joined-details">                       
                    <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                </div>
            </li>`
            ;
        }
    }
    
    a[1].onclick = function(){

        contactList.innerHTML = "";

        for (let i = 10; i < 20; i++){

            contactList.innerHTML += 
                `<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src=${results[i].picture.thumbnail}>
                        <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                        <span class="email">${results[i].email}</span>
                    </div>
                    <div class="joined-details">                       
                        <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                    </div>
                </li>`
            ;
        }
    }

    a[2].onclick = function(){

        contactList.innerHTML = "";

        for (let i = 20; i < 30; i++){

            contactList.innerHTML += 
                `<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src=${results[i].picture.thumbnail}>
                        <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                        <span class="email">${results[i].email}</span>
                    </div>
                    <div class="joined-details">                       
                        <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                    </div>
                </li>`
            
        }
    }

    a[3].onclick = function(){

        contactList.innerHTML = "";

        for (let i = 30; i < 40; i++){

            contactList.innerHTML += 
                `<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src=${results[i].picture.thumbnail}>
                        <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                        <span class="email">${results[i].email}</span>
                    </div>
                    <div class="joined-details">                       
                        <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                    </div>
                </li>`
            ;
        }
    }

    a[4].onclick = function(){

        contactList.innerHTML = "";

        for (let i = 40; i < 50; i++){

            contactList.innerHTML += 
                `<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src=${results[i].picture.thumbnail}>
                        <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                        <span class="email">${results[i].email}</span>
                    </div>
                    <div class="joined-details">                       
                        <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                    </div>
                </li>`
            ;
        }
    }

    a[5].onclick = function(){

        contactList.innerHTML = "";

        for (let i = 50; i < results.length; i++){

            contactList.innerHTML += 
                `<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src=${results[i].picture.thumbnail}>
                        <h3>${results[i].name.first + " " + results[i].name.last}</h3>
                        <span class="email">${results[i].email}</span>
                    </div>
                    <div class="joined-details">                       
                        <span class="date">Joined ${results[i].registered.date.substring(0, 10)}</span>
                    </div>
                </li>`
            ;
        }
    }
    
    document.querySelector(`h3`).innerText = `Total: ${results.length}`;}

getUsers();

