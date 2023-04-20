const wait = (ms) => { return new Promise((resolve) => { setTimeout(resolve, ms); }); };

function returnPromise() {
  return new Promise(resolve => {
    wait(2000).then(() => console.log("waited 2 seconds"))
                .then(() => resolve("resolved"));
                });
  }

async function asyncCall() {
    console.log('calling');
    const result = await returnPromise();
    console.log(result);
}

asyncCall();