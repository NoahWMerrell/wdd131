const events = [];

// Format for an event
function eventTemplate(event) {
  return `
  <section class="event-card">
    <div class="event-card-content">
      <h2>${event.title}</h2>
	  <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p class="description">${event.description}</p>
    </div>
  </section>`;
}

// Rendering a single event
function renderEvent(event) {
  let eventContainer = document.querySelector('#event-container');
  let html = eventTemplate(event);
  eventContainer.innerHTML += html;
}

// Rendering all events
function renderEvents(renderedEvents) {
  let eventContainer = document.querySelector('#event-container');
  eventContainer.innerHTML = "";
  renderedEvents.forEach(renderEvent);
}

// Filtering events
function filterEvents(query) {
  return events.filter(function(event) {
    return (
      event.title.toLowerCase().includes(query) ||
      event.date.toLowerCase().includes(query) ||
      event.time.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query)
    );
  });
}

// Sorting events alphabetically by title
function compareEvents(a, b) {
  return a.title.localeCompare(b.title);
}

// Searchbar filtering
const searchInput = document.querySelector('#searchbar');

searchInput.addEventListener('input', function (search) {
  const query = search.target.value.toLowerCase();
  const filteredEvents = filterEvents(query);
  const sortedEvents = filteredEvents.sort(compareEvents);
  renderEvents(sortedEvents);
});

// Load events from JSON file
fetch('events.json')
  .then(response => response.json())
  .then(data => {
    events.push(...data); // Add events to the array
    const sorted = events.sort(compareEvents);
    renderEvents(sorted); // Initial render
  })
  .catch(error => {
    console.error('Error loading events:', error);
  });
