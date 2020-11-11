const shareButton = document.querySelector(".share-button");
let callout = document.querySelector(".callout");
callout.style.visibility = "collapse";

shareButton.addEventListener("click", () => {
  console.log(callout.style.visibility);
  if (callout.style.visibility === "collapse") {
    callout.style.visibility = "visible";
  } else {
    callout.style.visibility = "collapse";
  }
});
shareButton.addEventListener("focusout", () => {
  callout.style.visibility = "collapse";
});
