function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

async function sendOrder() {
  let username = document.getElementById("box1").value;
  let service = document.getElementById("service").value;
  let videoLink = document.getElementById("videoLink").value;

  if(username === "" || service === "" || videoLink === ""){
    alert("Please fill all fields!");
    return;
  }

  let response = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      service,
      videoLink
    })
  });

  if(response.ok){
    alert("Order Submitted Successfully!");
    closePopup();
  } else {
    alert("Error Sending Order!");
  }
}
