console.log("start");

setTimeout(function cbt() {
  console.log("cb timeout");
}, 1000);

// Is being put into micro task queue
fetch("https://jsonplaceholder.typicode.com")
  .then((res) => {
    console.log("cb jsonplaceholder");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("end");
