const getData = (str) => {
    return fetch(`https://test-28c71-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    )
        .then((response) => response.json())
}

export default getData