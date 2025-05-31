// Mock schedule data
const schedule = [
    { day: 1, name: "Introduction to Algebra", time: "10:00 AM - 12:00 PM", description: "Overview of basic concepts." },
    { day: 1, name: "Advanced Techniques", time: "2:00 PM - 4:00 PM", description: "In-depth problem-solving." },
    { day: 2, name: "Geometry Basics", time: "10:00 AM - 12:00 PM", description: "Introduction to geometry." },
    { day: 3, name: "Combinatorics Workshop", time: "1:00 PM - 3:00 PM", description: "Hands-on problem solving." },
    { day: 4, name: "Number Theory Fundamentals", time: "10:00 AM - 12:00 PM", description: "" },
    { day: 5, name: "Practice Session", time: "9:00 AM - 12:00 PM", description: "Work through problems in groups." },
    { day: 6, name: "Final Exam", time: "10:00 AM - 1:00 PM", description: "Assessment of learned concepts." }
  ];
  
  let lessonPlans = [];

  // Fetch the lesson plans data
  fetch("/data/Lesson_schedule_v4.json")
    .then(response => response.json())
    .then(data => {
      lessonPlans = data;
    })
    .catch(error => console.error('Error fetching lesson plans:', error));


  function openModal(gradeLevel) {
    const modal = document.getElementById("scheduleModal");
    const title = document.getElementById("modal-title");
    const content = document.getElementById("schedule-content");
  
    // Set modal title with the grade level
    title.textContent = `${gradeLevel} Lessons`;
  
    // Filter lessons for the selected Grade Level
    const filteredLessons = lessonPlans.filter(lesson => lesson['Grade Level'] === gradeLevel);


    // Clear previous content
    content.innerHTML = "";
    
    console.log(filteredLessons);
    console.log(gradeLevel);
    console.log(lessonPlans);


        
    if (filteredLessons.length > 0) {

         // Group lessons by date
        const lessonsByDate = filteredLessons.reduce((acc, lesson) => {
            let date;
            if (lesson['Date and Time'].includes("2025")) {
                date = lesson['Date and Time'].split("2025")[0].trim() + " 2025"; // Extract date
            } else {
              date = lesson['Date and Time'].split("2026")[0].trim() + " 2026"; // Extract date
            }
            // const date = lesson['Date and Time'].split("2025")[0].trim() + " 2025"; // Extract date
            console.log(date);
            if (!acc[date]) {
            acc[date] = [];
            }
            acc[date].push(lesson);
            return acc;
        }, {});
  
         // Render lessons grouped by date
        Object.keys(lessonsByDate).forEach((date) => {
            const dayElement = document.createElement("div");
            dayElement.className = "schedule-day";
    
            // Add date as a section title
            const dayTitle = document.createElement("h3");
            dayTitle.textContent = date;
            dayElement.appendChild(dayTitle);


    
            // Add all lessons for this date
            lessonsByDate[date].forEach((lesson) => {
                const itemElement = document.createElement("div");
                itemElement.className = "schedule-item";

                const itemName = document.createElement("h4");
                itemName.textContent = lesson['Lesson Title'];
                itemElement.appendChild(itemName);

                const itemTime = document.createElement("p");

                //  if (lesson['Date and Time'].includes("2025")) {
                // itemTime.textContent = lesson['Date and Time'].split("2025")[1].trim().replace("(GMT+2) →", "-") + " (GMT+2)";
                //  } else {
                //     itemTime.textContent = lesson['Date and Time'].split("2026")[1].trim().replace("(GMT+2) →", "-") + " (GMT+2)";
                //  }
                itemTime.textContent = lesson['Date and Time'];
                itemElement.appendChild(itemTime);
        
                if (lesson.Objectives) {
                    const itemDescription = document.createElement("p");
                    itemDescription.textContent = lesson.Objectives;
                    itemDescription.className = "description";
                    itemElement.appendChild(itemDescription);
                  }

                // Add PDF link if available
                if (lesson["PDF Link"]) {
                  const pdfLink = document.createElement("a");
                  pdfLink.href = lesson["PDF Link"];
                  pdfLink.textContent = "Download PDF";
                  pdfLink.target = "_blank"; // Open in a new tab
                  pdfLink.className = "pdf-link"; // Style this class as needed
                  itemElement.appendChild(pdfLink);
  }
                
        
                dayElement.appendChild(itemElement);
            });

            content.appendChild(dayElement);
        });

      
    } else {
        content.innerHTML = `<p>No lessons available for ${gradeLevel} level.</p>`;
    }

    
    modal.style.display = "flex"; // Show modal
  }
  
  function closeModal() {
    const modal = document.getElementById("scheduleModal");
    modal.style.display = "none"; // Hide modal
  }
  