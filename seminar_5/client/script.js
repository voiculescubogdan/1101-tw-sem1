const getUsers = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/users');
        const data = await response.json();

        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getUsers();