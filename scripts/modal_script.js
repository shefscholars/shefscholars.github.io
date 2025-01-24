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
  fetch("/data/Lesson_schedule_v1.json")
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
            const date = lesson['Date and Time'].split("2025")[0].trim() + " 2025"; // Extract date
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
                itemTime.textContent = lesson['Date and Time'].split("2025")[1].trim().replace("(GMT+1) \u2192", "-") + " (GMT+1)";
                itemElement.appendChild(itemTime);
        
                if (lesson.Objectives) {
                    const itemDescription = document.createElement("p");
                    itemDescription.textContent = lesson.Objectives;
                    itemDescription.className = "description";
                    itemElement.appendChild(itemDescription);
                  }
        
                dayElement.appendChild(itemElement);
            });

            content.appendChild(dayElement);
        });

      
    } else {
        content.innerHTML = `<p>No lessons available for ${gradeLevel} level.</p>`;
    }
    // // Generate schedule for each day
    // for (let day = 1; day <= 6; day++) {
    //   const dayItems = schedule.filter(item => item.day === day);
  
    //   if (dayItems.length > 0) {
    //     const dayElement = document.createElement("div");
    //     dayElement.className = "schedule-day";
  
    //     const dayTitle = document.createElement("h3");
    //     dayTitle.textContent = `Day ${day}`;
    //     dayElement.appendChild(dayTitle);
  
    //     dayItems.forEach(item => {
    //       const itemElement = document.createElement("div");
    //       itemElement.className = "schedule-item";
  
    //       const itemName = document.createElement("h4");
    //       itemName.textContent = item.name;
    //       itemElement.appendChild(itemName);
  
    //       const itemTime = document.createElement("p");
    //       itemTime.textContent = item.time;
    //       itemElement.appendChild(itemTime);
  
    //       if (item.description) {
    //         const itemDescription = document.createElement("p");
    //         itemDescription.textContent = item.description;
    //         itemDescription.className = "description";
    //         itemElement.appendChild(itemDescription);
    //       }
  
    //       dayElement.appendChild(itemElement);
    //     });
  
    //     content.appendChild(dayElement);
    //   }
    // }
  
    modal.style.display = "flex"; // Show modal
  }
  
  function closeModal() {
    const modal = document.getElementById("scheduleModal");
    modal.style.display = "none"; // Hide modal
  }
  