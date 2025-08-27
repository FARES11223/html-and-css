// setTimeout(() => {
//   console.log("Download photo from url");
//   setTimeout(() => {
//     console.log("Resize photo");
//     setTimeout(() => {
//       console.log("Add Logo to photo");
//       setTimeout(() => {
//         console.log("show the photo in website");
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

function delay(ms, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms);
  });
}

// Chaining Promises
// delay(1000, "Download photo from url")
//   .then(() => delay(2000, "Resize photo"))
//   .then(() => delay(3000, "Add Logo to photo"))
//   .then(() => delay(4000, "Show the photo in website"))
//   .catch((err) => {
//     console.error("Something went wrong:", err);
//   });

function deelay(ms, message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(message);
      res();
    }, ms);
  });
}
deelay(1000, "Dowload from url").then(() =>
  deelay(2000, console.log("Dowload from url"))
);
