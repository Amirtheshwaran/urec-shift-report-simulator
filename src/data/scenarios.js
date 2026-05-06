/**
 * UREC Shift Report Scenarios — UNC Charlotte
 * 4 scenarios per facility × 3 facilities = 12 total
 *
 * NRFC: Field 15 (15-1, 15-2, 15-3, 15-4) and Field 16 (soccer). Restrooms near fieldhouse only.
 * Hayes: 13A (blue, USA Field Hockey / women's hockey club ONLY), 13B, Field 15 (rugby).
 * Belk Gym: 3 hardwood courts, racquetball courts, locker rooms. NOT responsible for pool.
 */

const scenarios = [
  // ── NRFC ──
  {
    id: 'nrfc-open-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Opening',
    context:
      'You arrive at the NRFC at 3:00 PM to open for evening intramural play. During your walkthrough, you notice a few divots on Field 15-2 from last night\'s flag football games. The equipment shed is missing several pinnies from the last checkout. Field 16 looks good for tonight\'s intramural soccer. The lights on Field 15-4 are flickering and may need a maintenance request.',
    clues: [
      'Field 15-2: a few divots near midfield from last night\'s flag football',
      'Equipment shed: yellow pinnie set (10 count) not returned from yesterday',
      'Field 16 in good condition for tonight\'s IM soccer',
      'Field 15-4: lights flickering intermittently',
    ],
    expectedItems: ['facility walkthrough', 'maintenance issue', 'equipment status', 'field condition', 'opening checklist'],
  },
  {
    id: 'nrfc-close-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Closing',
    context:
      'You are closing the NRFC at 10:00 PM after intramural soccer on Field 16. A group of students on Field 15-3 doesn\'t want to leave, saying they\'re almost done with their pickup game. During your equipment check, a ball pump and 2 soccer balls are missing from the shed. The fieldhouse restrooms need restocking — paper towels are out.',
    clues: [
      'Students on Field 15-3 not leaving — reminded of closing time, cleared by 10:10 PM',
      'Equipment shed: 1 ball pump and 2 soccer balls not returned',
      'Fieldhouse restrooms: out of paper towels, submitted restock request',
      'Field 16 and all Field 15 sections clear, lights off by 10:15 PM',
    ],
    expectedItems: ['patron interaction', 'policy enforcement', 'closing walkthrough', 'equipment inventory', 'facility maintenance'],
  },
  {
    id: 'nrfc-mid-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at the NRFC, the weather starts looking bad around 6:30 PM. Lightning is detected and you need to clear all fields per weather protocol. About 40 students are out for intramural flag football on Fields 15-1 and 15-2, and open rec soccer on Field 16. Everyone cooperates and clears out. Two IM games will need to be rescheduled.',
    clues: [
      'Lightning detected at 6:30 PM — weather protocol activated',
      'Fields 15-1, 15-2, and Field 16 cleared — ~40 students',
      'All students cooperative, moved to vehicles by 6:40 PM',
      'Two intramural flag football games postponed — notified IM coordinator',
    ],
    expectedItems: ['weather protocol', 'patron count', 'field clearing', 'communication', 'rescheduling'],
  },
  {
    id: 'nrfc-open-2',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Opening',
    context:
      'Opening the NRFC at 3:00 PM after rain earlier in the day. Fields 15-1 and 15-2 have some standing water in the low spots. Field 16 drained well and is ready for tonight\'s soccer. A student org left a voicemail asking about using Field 15-3 for an event this weekend. The equipment shed is fully stocked and organized from the last shift.',
    clues: [
      'Fields 15-1 and 15-2: standing water in low spots — closed until dry',
      'Field 16: good drainage, ready for IM soccer tonight',
      'Voicemail from student org re: Field 15-3 weekend event — forwarded to coordinator',
      'Equipment shed fully stocked and organized — no issues',
    ],
    expectedItems: ['facility condition', 'field closures', 'communication', 'equipment check', 'opening checklist'],
  },

  // ── Hayes Field Complex ──
  {
    id: 'hayes-open-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Opening',
    context:
      'You open Hayes Field Complex at 4:00 PM for Sport Club practices. Field 15 has some litter and a few water bottles left behind from an earlier event. Field 13B is in good shape for tonight\'s lacrosse practice. The storage shed is organized but you notice a set of cones was not logged back into inventory. Field 13A is set up for USA Field Hockey\'s evening session — no issues there.',
    clues: [
      'Field 15: litter and water bottles from earlier event — cleaned up before rugby arrives',
      'Field 13B: good condition for lacrosse practice',
      'Storage shed: 1 cone set not logged back into inventory from yesterday',
      'Field 13A ready for USA Field Hockey — no action needed',
    ],
    expectedItems: ['facility walkthrough', 'field cleanup', 'equipment inventory', 'opening checklist'],
  },
  {
    id: 'hayes-close-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Closing',
    context:
      'Closing Hayes at 9:00 PM. The rugby club on Field 15 is wrapping up but a few players are still stretching and chatting. During your final walkthrough, you find a player\'s water bottle and sweatshirt left on the Field 13B bench. The portable goals on Field 15 need to be moved back to storage. Everything else looks good.',
    clues: [
      'Rugby club on Field 15 — last players left by 9:10 PM',
      'Lost items: blue water bottle and gray sweatshirt on Field 13B bench',
      'Portable goals on Field 15 moved back to storage area',
      'All fields clear, complex secured by 9:20 PM',
    ],
    expectedItems: ['patron interaction', 'lost and found', 'equipment storage', 'closing walkthrough'],
  },
  {
    id: 'hayes-mid-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at Hayes, a rugby player on Field 15 takes a hard hit and is sitting out with a sore wrist. They say it\'s fine but you offer ice and check in. Later, the women\'s soccer club on Field 13B asks if they can switch to Field 15 after rugby finishes because 13B has an uneven patch they don\'t like. You check the schedule to see if it\'s possible.',
    clues: [
      'Rugby player on Field 15: sore wrist after collision — offered ice, player declined, staying on bench',
      'Documented the minor injury just in case',
      'Women\'s soccer on 13B requesting to move to Field 15 after rugby ends at 7 PM',
      'Checked schedule: Field 15 available after 7 PM — approved the switch',
    ],
    expectedItems: ['minor injury', 'patron interaction', 'scheduling', 'field condition'],
  },
  {
    id: 'hayes-open-2',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Opening',
    context:
      'Opening Hayes at 4:00 PM. The storage shed lock is sticking and takes a few tries to open but you get in. The rugby club is the first group today on Field 15 at 4:30. You notice the field lining on Field 13B is faded and barely visible. A student calls asking about how to start a new Sport Club and you direct them to the right contact.',
    clues: [
      'Storage shed lock sticking — opened after a few tries, noted for maintenance',
      'Field 15 ready for rugby at 4:30 PM',
      'Field 13B: field lines faded — emailed grounds crew',
      'Phone inquiry about starting a Sport Club — directed to Sport Clubs coordinator',
    ],
    expectedItems: ['facility maintenance', 'field condition', 'communication', 'opening checklist'],
  },

  // ── Belk Gym ──
  {
    id: 'belk-open-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'You open Belk Gym at 7:00 AM. During your walkthrough, Court 1 has a small wet spot near the baseline — looks like a minor roof drip overnight. The men\'s locker room is clean but the soap dispenser near the sinks is empty. Court 3 looks good. A few regulars are waiting in the lobby for the 7:15 AM open to play their morning basketball.',
    clues: [
      'Court 1: small wet spot near baseline — mopped and placed caution cone',
      'Men\'s locker room: soap dispenser empty near sinks — submitted restock request',
      'Court 3 in good condition — no issues',
      '3 regulars waiting in lobby — communicated 7:15 AM open time',
    ],
    expectedItems: ['facility walkthrough', 'safety hazard', 'maintenance issue', 'patron communication', 'opening checklist'],
  },
  {
    id: 'belk-close-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Closing',
    context:
      'Closing Belk Gym at 10:00 PM. A few students are still shooting around on Court 2 and leave without issue when reminded of closing. The women\'s locker room has a flickering light near the entrance. You find a student ID card left on the Court 1 bleachers. Racquetball courts look good — no damage or issues.',
    clues: [
      'Students on Court 2 — left by 10:05 PM after closing reminder',
      'Women\'s locker room: flickering light near entrance — submitted work order',
      'Lost item: student ID card found on Court 1 bleachers — logged in lost and found',
      'Racquetball courts inspected — no issues',
    ],
    expectedItems: ['patron interaction', 'maintenance issue', 'lost and found', 'closing walkthrough'],
  },
  {
    id: 'belk-mid-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at Belk Gym, a player tweaks their ankle during pickup basketball on Court 2. They can walk on it but it\'s sore — you offer ice from the first aid kit. Meanwhile, a badminton group on Court 1 and a volleyball group both think they have the court reserved at 5:00 PM. You check the reservation system to sort it out.',
    clues: [
      'Ankle tweak on Court 2 — player walking, ice offered from first aid kit',
      'Documented the minor injury',
      'Court 1 scheduling mix-up: badminton vs volleyball — checked system, volleyball had the booking',
      'Badminton group moved to Court 3 without issue',
    ],
    expectedItems: ['minor injury', 'first aid', 'scheduling conflict', 'patron mediation'],
  },
  {
    id: 'belk-open-2',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'Opening Belk Gym at 7:00 AM. The AED unit near the main entrance has a blinking low battery light. Court 2 has a small section of tape peeling up near half court. The previous closing shift\'s report is missing from the front desk binder. A group of faculty members is waiting for the gym to open for their weekly game.',
    clues: [
      'AED near main entrance: low battery indicator — replacement requested through maintenance',
      'Court 2: tape peeling near half court — smoothed down, noted for full repair',
      'Previous closing shift report missing from binder — noted for supervisor follow-up',
      'Faculty group waiting — communicated opening time',
    ],
    expectedItems: ['safety equipment', 'facility condition', 'missing documentation', 'patron communication', 'opening checklist'],
  },
]

/** Pick a random scenario */
export function getRandomScenario() {
  return scenarios[Math.floor(Math.random() * scenarios.length)]
}

export function getAllScenarios() {
  return scenarios
}

export default scenarios
