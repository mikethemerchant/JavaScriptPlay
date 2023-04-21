
// get response from server using fetch API and then convert it to json and return it to an array

fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    data.map((post) => { console.log(post.title); })
                })
                .catch(error => console.error(error));

  