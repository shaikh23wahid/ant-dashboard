exports.add = function (a, b) {
    return a + b;
}

exports.devide = function (a, b) {
    return a / b;
}

exports.loginUser = async function (credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}