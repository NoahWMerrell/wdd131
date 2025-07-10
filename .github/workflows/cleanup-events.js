const fs = require('fs');
const path = './wardboard/events.json';

function isDatePast(dateStr) {
  if (!dateStr || dateStr.toUpperCase() === "TBD") return false;

  const today = new Date();
  today.setHours(0,0,0,0); // Normalize start of today
  const eventDate = new Date(dateStr);

  if (isNaN(eventDate)) return false; // Invalid dates are kept

  return eventDate < today;
}

try {
  if (!fs.existsSync(path)) {
    console.log("No events.json found, skipping cleanup.");
    process.exit(0);
  }

  const raw = fs.readFileSync(path, 'utf-8');
  let events = JSON.parse(raw);

  const filtered = events.filter(event => !isDatePast(event.date));

  if (filtered.length === events.length) {
    console.log("No past events found, no changes made.");
    process.exit(0);
  }

  fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
  console.log(`Removed ${events.length - filtered.length} past event(s).`);

} catch (error) {
  console.error("Error during cleanup:", error);
  process.exit(1);
}