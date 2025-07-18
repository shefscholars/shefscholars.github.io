const tracks = [
    { name: "Beginner A", icon: "images/logos/Beginner Level Logo.png", color: "bg-red-500" },
    { name: "Apprentice A", icon: "images/logos/Apprentice Logo.png", color: "bg-blue-500" },
    { name: "Machine A", icon: "images/logos/Machine Level Logo.png", color: "bg-green-500" },
    { name: "Shef A", icon: "images/logos/Shef Logo.jpg", color: "bg-yellow-500" },
    { name: "Beginner B", icon: "images/logos/Beginner Level Logo.png", color: "bg-red-500" },
    { name: "Apprentice B", icon: "images/logos/Apprentice Logo.png", color: "bg-blue-500" },
    { name: "Machine B", icon: "images/logos/Machine Level Logo.png", color: "bg-green-500" },
    { name: "Shef B", icon: "images/logos/Shef Logo.jpg", color: "bg-yellow-500" }
  ];
  
  const spots = {
    "Beginner A": 12,
    "Apprentice A": 13,
    "Machine A": 12,
    "Shef A": 13,
    "Beginner B": 14,
    "Apprentice B": 15,
    "Machine B": 14,
    "Shef B": 14
  };


  const groupTimes = {
  "Beginner A":    { day: "Saturdays",   start: "09:00", end: "11:15" },
  "Machine A":     { day: "Saturdays",   start: "11:30", end: "13:45" },
  "Apprentice A":  { day: "Sundays",     start: "09:00", end: "11:15" },
  "Shef A":        { day: "Sundays",     start: "11:30", end: "13:45" },
  "Beginner B":    { day: "Saturdays",   start: "17:00", end: "19:15" },
  "Machine B":     { day: "Saturdays",   start: "19:30", end: "21:45" },
  "Apprentice B":  { day: "Sundays",     start: "17:00", end: "19:15" },
  "Shef B":        { day: "Sundays",     start: "19:30", end: "21:45" },
};

        //   <p class="track-description">
        //   Master advanced concepts in ${track.name.toLowerCase().split(" ")[0]}.
        // </p>
  function renderTracks() {
    const tracksGrid = document.querySelector(".tracks-grid");
    tracks.forEach(track => {
      const card = document.createElement("div");
      card.className = "track-card";
      
        // Get time info for this track
      const t = groupTimes[track.name];
      const day = t.day;
      const start = t.start;
      const end = t.end;


      card.innerHTML = `
        <div class="track-icon ${track.color}">
             <img src="${track.icon}" alt="${track.name} icon" class="track-icon">
        </div>
        <h3 class="track-name">${track.name}</h3>

        <p class="track-description">
          From ${start} – ${end} Sarajevo time on ${day}.
        </p>
        <div class="spots-info">Spots left: ${spots[track.name]}</div>
        <button class="track-btn primary main-google-form-link" onclick="window.open('https://forms.gle/Wa9grg3488ANUFHi7', '_blank')" ${
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
