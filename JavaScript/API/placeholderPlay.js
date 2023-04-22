const url = 'https://jsonplaceholder.typicode.com/posts';

/*
// create async function to post data
const postData = async () => {
    try {
        const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'My new post 2',
                        body: 'This is my post 2',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
        const data = await response.json();
        console.log(`ID: ${data.id} TITLE: ${data.title}`);
    } catch (error) {
        console.log(error);
    }
};

postData();

*/

/*

// create async function to fetch data
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const filtered = data.filter((post) => post.userId == 10);
    // loop filtered data
    filtered.forEach((post) => {
      const { id, title } = post;
      console.log(`ID: ${id} TITLE: ${title}`);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

*/

/*

// create async function to update data
const urlput = 'https://jsonplaceholder.typicode.com/posts/1';

const putData = async () => {
    try {
        const response = await fetch(urlput, {
                    method: 'PUT',
                    body: JSON.stringify({
                        id: 1,
                        title: 'werd',
                        body: 'blah',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
        const data = await response.json();
        console.log(`ID: ${data.id} TITLE: ${data.title}`);
    } catch (error) {
        console.log(error);
    }
};

putData();

*/


// create async function to fetch data already filtered
const urlFilter = 'https://jsonplaceholder.typicode.com/posts?id=23';

const getData = async () => {
    try {
        const response = await fetch(urlFilter);
        const data = await response.json();
        data.forEach(item => {
            console.log(`ID: ${item.id} TITLE: ${item.title}`);
        });
    } catch (error) {
        console.log(error);
    }
  };
  
  getData();
