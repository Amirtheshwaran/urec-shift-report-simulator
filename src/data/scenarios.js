/**
 * UREC Shift Report Scenarios — UNC Charlotte
 * 4 scenarios per facility × 3 facilities = 12 total
 *
 * NRFC: Field 15 (15-1, 15-2, 15-3, 15-4) and Field 16
 * Hayes: Field 13A (blue, USA Field Hockey / women's hockey club only), 13B, Field 15
 * Belk Gym: 3 hardwood courts, racquetball courts, locker rooms (NOT responsible for pool)
 */

const scenarios = [
  // ── NRFC ──
  {
    id: 'nrfc-open-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Opening',
    context:
      'You arrive at the NRFC at 3:00 PM to open for evening intramural play. During your walkthrough, you notice a torn seam in the synthetic turf on Field 15-2, about 3 feet long near the north goal. The field lights on Field 16 were left on overnight. The equipment checkout shed has footballs and soccer balls but all cones are missing from inventory. There is a voicemail from the intramural coordinator about a flag football tournament bracket change for tonight.',
    clues: [
      'Torn turf seam on Field 15-2 near north goal — approximately 3 feet long',
      'Field 16 lights left on overnight — turned off and restarted for evening schedule',
      'Equipment checkout: all cones missing from inventory (should be 40)',
      'Voicemail from IM coordinator re: flag football bracket change tonight',
    ],
    expectedItems: ['facility walkthrough', 'maintenance issue', 'equipment status', 'communication', 'opening checklist'],
  },
  {
    id: 'nrfc-close-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Closing',
    context:
      'You are closing the NRFC at 10:00 PM after intramural soccer on Field 16. A group of students refuses to leave Field 15-3, claiming they have a Sport Club reservation until 11:00 PM. During your final equipment check, you find that 2 pinnie sets and a ball pump are missing from the checkout shed. The portable restroom near Field 15-1 is out of toilet paper and the hand sanitizer dispenser is empty.',
    clues: [
      'Students on Field 15-3 refusing to leave — claim Sport Club reservation until 11 PM',
      'Verified schedule: no reservation found after 10 PM',
      '2 pinnie sets (yellow + green) and 1 ball pump missing from checkout shed',
      'Portable restroom near Field 15-1: no toilet paper, empty hand sanitizer',
    ],
    expectedItems: ['patron interaction', 'policy enforcement', 'closing walkthrough', 'equipment inventory', 'facility maintenance'],
  },
  {
    id: 'nrfc-mid-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at the NRFC, a sudden thunderstorm rolls in at 6:45 PM. You must activate the lightning protocol and clear Fields 15-1 through 15-4 and Field 16. Approximately 60 students are playing intramural ultimate frisbee and open rec. One student twists their ankle on Field 15-4 while rushing off the field and needs first aid. Three intramural games need to be rescheduled.',
    clues: [
      'Lightning detected at 6:45 PM — activated weather protocol',
      'Fields 15-1 through 15-4 and Field 16 cleared: ~60 students moved to parking area',
      'Ankle injury on Field 15-4 — ice applied, student declined EMS, incident report completed',
      'Three intramural ultimate frisbee games postponed — notified IM coordinator',
    ],
    expectedItems: ['emergency response', 'weather protocol', 'patron count', 'first aid', 'incident report'],
  },
  {
    id: 'nrfc-open-2',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Opening',
    context:
      'Opening the NRFC at 3:00 PM after a rainy weekend. Fields 15-1 and 15-2 have standing water in the low spots and are too wet for safe play. A campus maintenance crew is on-site repairing a broken light fixture on Field 16 and has it blocked off. You receive a call from a student org asking if they can use Field 15-3 for a charity kickball event this Saturday.',
    clues: [
      'Fields 15-1 and 15-2 waterlogged — closed for safety',
      'Field 16 blocked off: maintenance crew repairing broken light fixture',
      'Phone call from student org requesting Field 15-3 for Saturday charity kickball',
      'Fields 15-3 and 15-4 in good condition and ready for play',
    ],
    expectedItems: ['facility condition', 'field closures', 'maintenance coordination', 'reservation request', 'opening checklist'],
  },

  // ── Hayes Field Complex ──
  // 13A = blue turf, USA Field Hockey / women's hockey club only
  // 13B and Field 15 for Sport Clubs
  {
    id: 'hayes-open-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Opening',
    context:
      'You open Hayes Field Complex at 4:00 PM for Sport Club practices. During your walkthrough, Field 13B has debris (broken glass near the sideline) that needs to be cleaned before the rugby club arrives at 4:30. Field 15 has a divot near midfield from last night\'s game. The women\'s lacrosse club left equipment in the storage shed from last week that was not logged for return. Field 13A is set up for USA Field Hockey\'s evening session.',
    clues: [
      'Broken glass debris on Field 13B near east sideline — cleaned before 4:20 PM',
      'Field 15: divot near midfield — flagged and emailed grounds crew',
      'Unlabeled lacrosse equipment in storage shed — not logged in checkout system',
      'Field 13A prepped for USA Field Hockey — no issues',
    ],
    expectedItems: ['safety hazard', 'facility walkthrough', 'maintenance issue', 'equipment inventory', 'opening checklist'],
  },
  {
    id: 'hayes-close-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Closing',
    context:
      'Closing Hayes at 9:00 PM after Sport Club games. The men\'s soccer club on Field 15 is upset because the opposing club team was 30 minutes late, cutting into their reserved field time. They want to extend past closing. During final rounds, you find a player\'s wallet and car keys left on the Field 13B bench. The portable goal posts on Field 15 were not stored properly by the previous group.',
    clues: [
      'Men\'s soccer club on Field 15 requesting 30-min extension past closing — denied per policy',
      'Lost items: black leather wallet and Honda car keys found on Field 13B bench',
      'Portable goal posts left out on Field 15 — stored and secured',
      'All clubs checked out by 9:15 PM, complex secured',
    ],
    expectedItems: ['patron conflict', 'policy enforcement', 'lost and found', 'equipment storage', 'closing walkthrough'],
  },
  {
    id: 'hayes-mid-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at Hayes, a Sport Club rugby practice on Field 13B gets heated and two players get into a physical altercation at 5:45 PM. The club president separates them. One player has a bloody nose. You administer first aid, document the incident, and contact the Sport Clubs coordinator. The remaining practice continues without issue on Field 13B.',
    clues: [
      'Physical altercation between two rugby players at 5:45 PM on Field 13B',
      'Club president intervened and separated players',
      'First aid: bloody nose — gauze applied, bleeding stopped, player sat out',
      'Incident report completed, Sport Clubs coordinator notified via phone at 5:55 PM',
    ],
    expectedItems: ['incident report', 'first aid', 'patron interaction', 'policy enforcement', 'communication with supervisor'],
  },
  {
    id: 'hayes-open-2',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Opening',
    context:
      'Opening Hayes at 4:00 PM. The storage shed door lock is jammed and you cannot access the portable goals or field equipment. Two Sport Club teams (women\'s soccer on Field 15 and quidditch on Field 13B) are scheduled at 4:30 PM and both need goals and cones. You also notice someone has dumped trash bags near the entrance to Field 13B.',
    clues: [
      'Storage shed lock jammed — cannot access goals, cones, or equipment',
      'Women\'s soccer (4:30 PM, Field 15) and quidditch (4:30 PM, Field 13B) both need equipment',
      'Called supervisor for backup key — arrived at 4:20 PM',
      'Trash bags dumped near Field 13B entrance — cleaned up and reported to facilities',
    ],
    expectedItems: ['equipment access issue', 'communication with supervisor', 'facility maintenance', 'opening checklist', 'scheduling'],
  },

  // ── Belk Gym ──
  // 3 hardwood courts, racquetball courts, locker rooms — NOT responsible for pool
  {
    id: 'belk-open-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'You open Belk Gym at 7:00 AM. During your walkthrough, Court 1 has a wet spot near the free throw line from a roof leak overnight. The men\'s locker room has a clogged drain in the shower area with standing water. One of the basketball hoops on Court 3 has a torn net. The front desk received an email overnight about an intramural volleyball league starting next week that needs court reservations confirmed.',
    clues: [
      'Court 1 wet spot near free throw line — roof leak, placed caution cones and mopped',
      'Men\'s locker room: clogged shower drain, standing water, submitted work order',
      'Court 3: torn basketball net on south hoop — noted for replacement',
      'Email from IM coordinator: volleyball league starting next week, needs Court 2 confirmed',
    ],
    expectedItems: ['facility walkthrough', 'safety hazard', 'maintenance issue', 'equipment condition', 'communication'],
  },
  {
    id: 'belk-close-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Closing',
    context:
      'Closing Belk Gym at 10:00 PM. A group of students is playing pickup basketball on Court 3 and doesn\'t want to leave. Racquetball Court 2 has a cracked back wall panel that wasn\'t in the previous shift report. The women\'s locker room has a flickering overhead light. You find a student ID card and a pair of wireless earbuds left on the Court 1 bleachers.',
    clues: [
      'Pickup basketball group on Court 3 — cleared by 10:10 PM after policy reminder',
      'Racquetball Court 2: cracked back wall panel, not in previous report, maintenance notified',
      'Women\'s locker room: flickering overhead light near sinks — submitted work order',
      'Lost items: student ID (name on card) and white wireless earbuds found on Court 1 bleachers',
    ],
    expectedItems: ['patron interaction', 'equipment damage', 'maintenance issue', 'lost and found', 'closing checklist'],
  },
  {
    id: 'belk-mid-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at Belk Gym, a player rolls their ankle during a pickup basketball game on Court 2 and goes down hard. They can\'t put weight on it. You provide ice and assist them to a bench. Meanwhile, a badminton group on Court 1 is arguing loudly with a volleyball group about who reserved the court. The vending machine near the lobby is jammed and a student is asking for a refund.',
    clues: [
      'Ankle injury on Court 2 — ice applied, player cannot bear weight, friend driving to student health',
      'Incident report completed for ankle injury',
      'Court 1 scheduling conflict: badminton vs volleyball group — checked reservation, volleyball had booking, badminton relocated to Court 3',
      'Vending machine jammed — took student\'s info for refund, reported to facilities',
    ],
    expectedItems: ['injury incident', 'first aid', 'incident report', 'patron mediation', 'facility issue'],
  },
  {
    id: 'belk-open-2',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'Opening Belk Gym at 7:00 AM. The AED unit mounted near the main entrance has a low battery indicator blinking. Court 2 has a section of loose floorboard near half court that\'s a trip hazard. The previous closing shift\'s report is missing from the binder at the front desk. A group of 6 faculty members is waiting in the lobby for the 7:15 AM open for their weekly basketball game.',
    clues: [
      'AED near main entrance — low battery indicator, replacement requested through maintenance',
      'Court 2: loose floorboard section near half court, taped off and reported',
      'Previous closing shift report missing from front desk binder — noted for supervisor',
      '6 faculty members waiting — communicated 7:15 AM open time',
    ],
    expectedItems: ['safety equipment', 'facility hazard', 'missing documentation', 'patron communication', 'opening checklist'],
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
