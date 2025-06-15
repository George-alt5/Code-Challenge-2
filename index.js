document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-input");
  const guestList = document.getElementById("guest-list");

  form.addEventListener("submit", function (s) {
    s.preventDefault();

    const name = input.value.trim();
    if (name === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = name;

    const rsvp = document.createElement("span");
    rsvp.textContent = "Attending";
    rsvp.classList.add("rsvp");
    rsvp.addEventListener("click", () => {
      if (rsvp.textContent === "Attending") {
        rsvp.textContent = "Not Attending";
        rsvp.classList.add("not-attending");
      } else {
        rsvp.textContent = "Attending";
        rsvp.classList.remove("not-attending");
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove());

    li.append(span, rsvp, removeBtn);
    guestList.appendChild(li);
    input.value = "";
  });
});
