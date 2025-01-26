const tracks = [
    { name: "Beginner", icon: "images/logos/Beginner Level Logo.png", color: "bg-red-500" },
    { name: "Apprentice", icon: "images/logos/Apprentice Logo.png", color: "bg-blue-500" },
    { name: "Machine", icon: "images/logos/Machine Level Logo.png", color: "bg-green-500" },
    { name: "Shef", icon: "images/logos/Shef Logo.jpg", color: "bg-yellow-500" }
  ];
  
  const spots = {
    "Beginner": 13,
    "Apprentice": 12,
    "Machine": 12,
    "Shef": 11
  };
  
  function renderTracks() {
    const tracksGrid = document.querySelector(".tracks-grid");
    tracks.forEach(track => {
      const card = document.createElement("div");
      card.className = "track-card";
  
      card.innerHTML = `
        <div class="track-icon ${track.color}">
             <img src="${track.icon}" alt="${track.name} icon" class="track-icon">
        </div>
        <h3 class="track-name">${track.name}</h3>
        <p class="track-description">
          Master advanced concepts in ${track.name.toLowerCase()}.
        </p>
        <div class="spots-info">Spots left: ${spots[track.name]}</div>
        <button class="track-btn primary" onclick="window.open('https://forms.gle/BkMETmhiHcPYCv716', '_blank')" ${
          spots[track.name] === 0 ? "disabled" : ""
        }>
          Reserve Spot
        </button>
        <button class="track-btn outline">View Schedule</button>
      `;
    

         // Add event listener for the "View Schedule" button
    const viewScheduleButton = card.querySelector('.track-btn.outline');
    viewScheduleButton.addEventListener('click', () => {
      openModal(track.name); // Call the openModal function with the track name
    
        console.log("LALA");
    });

      tracksGrid.appendChild(card);
    });
  }
  
  renderTracks();