
export const LoginWithEmail = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify ({
            "email": users.email,
            "password": users.password,
        }),
    })
        // .then((response) => response.json())
        // .then((json) => {
        //     const { token } = json;
        //     return token
        // })
};

export const RegisterUser = (users) => {
    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Token'
        },
        body: JSON.stringify({
            'name': users.name,
            'email': users.email,
            'password': users.password,
            'role': users.role,
            'restaurant': 'retro burger',
        }),
    })
};


// export const RegisterSuccess = () => {
//     return (
//         alert('Sua conta foi criada com sucesso!')
//     )
// }




