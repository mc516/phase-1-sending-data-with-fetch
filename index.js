function submitData (userName, userEmail) {
    const userObj = {
        name : userName,
        email: userEmail,
    };
    const configureObj = {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userObj),
    };

    return fetch('http://localhost:3000/users', configureObj)
    .then(res => res.json())
    .then(data => {
        let domObj = document.createElement('li');
        domObj.innerHTML = `<h1>${data.id}</h1>`;
        document.body.appendChild(domObj);
    })
    .catch(error => {
        alert("Uh Oh!");
        let errorMessage = document.createElement('li')
        errorMessage.innerHTML = `<h1>${error.message}</h1>`;
        document.body.appendChild(errorMessage);
    })
}

