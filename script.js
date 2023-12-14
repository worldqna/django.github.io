const data = [
    { text: "html", text2: "hindi", url: "html" },
    { text: "html", text2: "english", url: "html" },
    { text: "owl", text2: "english", url: "html" },
    { text: "ଓଡ଼ିଆ", text2: "odia", url: "html" },
    { text: "To limit the autocomplete dropdown to show only 5 results, you can modify the JavaScript csode to keep track of the number of items added and limit it to 5. Here's the updated script", url: "cs" },
    { text: "To limit the autocomplete dropdown to show only 5 results, you can modify the JavaScript csode to keep track of the number of items added and limit it to 5. Here's the updated script", url: "cs" },
    { text: "To limit the autocomplete dropdown to show only 5 results, you can modify the JavaScript csode to keep track of the number of items added and limit it to 5. Here's the updated script", url: "cs" },
    { text: "To limit the autocomplete dropdown to show only 5 results, you can modify the JavaScript csode to keep track of the number of items added and limit it to 5. Here's the updated script", url: "cs" },
    { text: "css", url: "css" },
    { text: "Twitter", url: "https://www.twitter.com" },
    { text: "GitHub", url: "https://github.com" },
    { text: "LinkedIn", url: "https://www.linkedin.com" },
  ];

  const input = document.getElementById("autocomplete-input");
  const dropdown = document.getElementById("autocomplete-dropdown");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();

    const filteredData = data.filter(item =>
      item.text.toLowerCase().includes(query) || (item.text2 && item.text2.toLowerCase().includes(query))
    );

    // Create a button with the input value
    const button = document.createElement("button");
    button.className = "sbtn";
    button.type = "submit";
    
    // Create a div inside the button with the input value
    const div = document.createElement("div");
    div.className = "autocomplete-item";
    
    // Create an icon element with the desired icon
    const icon = document.createElement("i");
    icon.className = "fa-regular fa-keyboard";
    
    // Append the icon to the div
    div.appendChild(icon);
    
    // Append the input value to the div
    div.appendChild(document.createTextNode(input.value));
    
    // Append the div to the button
    button.appendChild(div);
    
    // Replace the content of the dropdown with the button
    dropdown.innerHTML = "";
    dropdown.appendChild(button);
    
    

    if (query.length === 0) {
      dropdown.style.display = "none";
    } else {
      for (let i = 0; i < Math.min(10, filteredData.length); i++) {
        const item = filteredData[i];
        const itemElement = document.createElement("div");
        itemElement.className = "autocomplete-item";
        
        // Create the icon element
        const iconElement = document.createElement("i");
        iconElement.className = "fa-solid fa-arrow-trend-up";
        
        // Create a span for the text
        const textElement = document.createElement("span");
        textElement.textContent = item.text;

        // Append the icon and text to the item element
        itemElement.appendChild(iconElement);
        itemElement.appendChild(textElement);

        // Add an event listener to handle item click
        itemElement.addEventListener("click", () => {
          window.location.href = item.url;
        });

        // Append the item element to the dropdown
        dropdown.appendChild(itemElement);
      }

      dropdown.style.display = "block";
    }
  });

  window.addEventListener("click", function (e) {
    if (!e.target.matches("#autocomplete-input")) {
      dropdown.style.display = "none";
    }
  });