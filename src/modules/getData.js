const getData = () => {
    return fetch('https://test-28c71-default-rtdb.firebaseio.com/goods.json')
        .then((response) => response.json())
}

export default getData