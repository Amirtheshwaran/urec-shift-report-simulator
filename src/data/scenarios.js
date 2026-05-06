/**
 * UREC Shift Report Scenarios — UNC Charlotte
 * 4 scenarios per facility × 3 facilities = 12 total
 * Facilities: NRFC, Hayes Field Complex, Belk Gym
 */

const scenarios = [
  // ── NRFC (Northeast Recreational Field Complex) ──
  // 15+ acres synthetic turf, lights, outdoor fields, equipment checkout, intramural sports
  {
    id: 'nrfc-open-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Opening',
    context:
      'You arrive at the NRFC at 3:00 PM to open for evening intramural play. During your walkthrough of the synthetic turf fields, you notice a section of Field 2 near the north goal has a torn seam in the turf, about 3 feet long. The field lights were left on overnight from a previous event. The equipment checkout shed has footballs and soccer balls, but all cones are missing from inventory. There is a voicemail from the intramural coordinator about a flag football tournament bracket change.',
    clues: [
      'Torn turf seam on Field 2 near north goal — approximately 3 feet long',
      'Field lights left on overnight — turned off and restarted for evening schedule',
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
      'You are closing the NRFC at 10:00 PM after intramural soccer games. A group of students refuses to leave Field 3, claiming they have a Sport Club reservation until 11:00 PM. During your final equipment check, you find that 2 pinnies sets and a ball pump are missing from the checkout shed. The portable restroom near Field 1 is out of toilet paper and the hand sanitizer dispenser is empty.',
    clues: [
      'Students on Field 3 refusing to leave — claim Sport Club reservation until 11 PM',
      'Verified schedule: no reservation found after 10 PM',
      '2 pinnie sets (yellow + green) and 1 ball pump missing from checkout shed',
      'Portable restroom near Field 1: no toilet paper, empty hand sanitizer',
    ],
    expectedItems: ['patron interaction', 'policy enforcement', 'closing walkthrough', 'equipment inventory', 'facility maintenance'],
  },
  {
    id: 'nrfc-mid-1',
    facility: 'Northeast Recreational Field Complex',
    facilityShort: 'NRFC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at the NRFC, a sudden thunderstorm rolls in at 6:45 PM. You must activate the lightning protocol and clear all 4 fields. Approximately 60 students are on the fields for intramural ultimate frisbee and open recreation. One student twists their ankle on Field 1 while rushing to leave and needs first aid. Games will need to be rescheduled.',
    clues: [
      'Lightning detected at 6:45 PM — activated weather protocol',
      'All 4 fields cleared: ~60 students moved to parking area',
      'Ankle injury on Field 1 — ice applied, student declined EMS, incident report completed',
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
      'Opening the NRFC at 3:00 PM after a rainy weekend. The natural grass overflow area near the parking lot has standing water and is too soft for play. A campus maintenance crew is on-site replacing a broken light pole on Field 4 and has that field blocked off. You receive a call from a student org asking if they can reserve Field 2 for a charity kickball event this Saturday.',
    clues: [
      'Grass overflow area waterlogged — closed for safety',
      'Field 4 blocked off: maintenance crew replacing broken light pole',
      'Phone call from student org requesting Field 2 for Saturday charity kickball',
      'Fields 1, 2, 3 turf in good condition and ready for play',
    ],
    expectedItems: ['facility condition', 'field closures', 'maintenance coordination', 'reservation request', 'opening checklist'],
  },

  // ── Hayes Field Complex ──
  // 3 fields (2 natural grass, 1 synthetic turf), Sport Clubs practices/games, reservation-only access
  {
    id: 'hayes-open-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Opening',
    context:
      'You open the Hayes Field Complex at 4:00 PM for Sport Club practices. During your walkthrough, the synthetic turf field has debris (broken glass near the sideline) that needs to be cleaned before the rugby club arrives at 4:30. The natural grass Field A has a sprinkler head that is broken and spraying water across the walkway. The women\'s lacrosse club left equipment in the storage shed from last week that was not logged for return.',
    clues: [
      'Broken glass debris on synthetic turf field near east sideline — cleaned before 4:20 PM',
      'Field A sprinkler head broken — water spraying across walkway, submitted work order',
      'Unlabeled lacrosse equipment in storage shed — not logged in checkout system',
      'Rugby club arriving at 4:30 PM — field ready on time',
    ],
    expectedItems: ['safety hazard', 'facility walkthrough', 'maintenance issue', 'equipment inventory', 'opening checklist'],
  },
  {
    id: 'hayes-close-1',
    facility: 'Hayes Field Complex',
    facilityShort: 'Hayes',
    shiftType: 'Closing',
    context:
      'Closing Hayes at 9:00 PM after Sport Club games. The men\'s soccer club is upset because the opposing club team was 30 minutes late, cutting into their reserved field time. They want to extend past closing. During final rounds, you find a player\'s wallet and car keys left on the Field B bench. The portable goal posts on the turf field were not stored properly by the previous group.',
    clues: [
      'Men\'s soccer club requesting 30-min extension past closing — denied per policy',
      'Lost items: black leather wallet and Honda car keys found on Field B bench',
      'Portable goal posts left out on turf field — stored and secured',
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
      'During your mid-shift at Hayes, a Sport Club rugby practice gets heated and two players get into a physical altercation on the synthetic turf field at 5:45 PM. The club president separates them. One player has a bloody nose. You administer first aid, document the incident, and contact the Sport Clubs coordinator. The remaining practice continues without issue.',
    clues: [
      'Physical altercation between two rugby players at 5:45 PM on turf field',
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
      'Opening Hayes at 4:00 PM. The storage shed door lock is jammed and you cannot access the portable goals or field equipment. Two Sport Club teams (women\'s soccer and quidditch) are scheduled to start at 4:30 PM and need goals and cones. You also notice that the parking lot chain barrier is down, and unauthorized vehicles have parked on the grass near Field B.',
    clues: [
      'Storage shed lock jammed — cannot access goals, cones, or equipment',
      'Women\'s soccer (4:30 PM) and quidditch (4:30 PM) both need equipment from shed',
      'Called supervisor for backup key — arrived at 4:20 PM',
      'Unauthorized vehicles parked on grass near Field B — 2 cars, took plate numbers',
    ],
    expectedItems: ['equipment access issue', 'communication with supervisor', 'unauthorized access', 'opening checklist', 'scheduling'],
  },

  // ── Belk Gym ──
  // 3 hardwood courts, Roy R. Fielding Aquatic Center (25yd x 25m pool),
  // 2 racquetball courts, badminton, locker rooms
  {
    id: 'belk-open-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'You open Belk Gym at 7:00 AM. During your walkthrough, Court 1 has a wet spot near the free throw line from a roof leak overnight. The Aquatic Center pool temperature reads 76°F (target 78-82°F). The locker room has a clogged drain in the men\'s shower area with standing water. The front desk phone has a message from the aquatics coordinator about a lifeguard calling out for the afternoon shift.',
    clues: [
      'Court 1 wet spot near free throw line — roof leak, placed caution cones and mopped',
      'Pool temp 76°F — below target (78-82°F), adjusted heater',
      'Men\'s locker room: clogged shower drain, standing water, submitted work order',
      'Voicemail: lifeguard called out for 1-5 PM shift, aquatics coordinator notified',
    ],
    expectedItems: ['facility walkthrough', 'safety hazard', 'pool operations', 'maintenance issue', 'staffing communication'],
  },
  {
    id: 'belk-close-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Closing',
    context:
      'Closing Belk Gym at 10:00 PM. The pool pH reading is at 7.9 (target 7.2-7.6) during your closing chemical check. A group of students is playing pickup basketball on Court 3 and doesn\'t want to leave. Racquetball Court 2 has a cracked back wall panel that wasn\'t in the previous shift report. You find a pair of prescription swim goggles in the pool area lost and found.',
    clues: [
      'Pool pH 7.9 — above target (7.2-7.6), adjusted chemical feed, logged in binder',
      'Pickup basketball group on Court 3 — cleared by 10:10 PM after policy reminder',
      'Racquetball Court 2: cracked back wall panel, not in previous report, maintenance notified',
      'Prescription swim goggles (black, -2.5 diopter) logged in lost and found',
    ],
    expectedItems: ['chemical readings', 'patron interaction', 'equipment damage', 'lost and found', 'closing checklist'],
  },
  {
    id: 'belk-mid-1',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at Belk Gym, a patron slips on the pool deck near the diving area and hits their elbow. They have a small cut and bruising. You provide first aid while the lifeguard on duty clears the immediate area. Meanwhile, a volleyball intramural game on Court 2 has a noise complaint from the racquetball players next door. The pool vacuum has stopped mid-cycle and is stuck at the bottom of the deep end.',
    clues: [
      'Slip-and-fall on pool deck near diving area — cut and bruise on right elbow',
      'First aid applied, patron declined EMS, incident report completed, wet floor signs confirmed in place',
      'Noise complaint from racquetball Court 1 about volleyball game on Court 2 — mediated',
      'Pool vacuum stuck in deep end — error light blinking, pulled manually, maintenance notified',
    ],
    expectedItems: ['injury incident', 'first aid', 'incident report', 'patron mediation', 'equipment malfunction'],
  },
  {
    id: 'belk-open-2',
    facility: 'Belk Gymnasium',
    facilityShort: 'Belk',
    shiftType: 'Opening',
    context:
      'Opening Belk Gym at 7:00 AM. The AED unit mounted near the pool entrance has a low battery indicator blinking. Court 2 has a section of loose floorboard near half court. The pool area\'s chemical log from last night\'s closing shift is missing from the binder. Four lap swimmers are already waiting in the lobby for the 7:15 AM pool opening.',
    clues: [
      'AED near pool entrance — low battery indicator, replacement requested through maintenance',
      'Court 2: loose floorboard section near half court, taped off and reported',
      'Previous shift\'s pool chemical log page missing from binder — noted for supervisor',
      '4 lap swimmers waiting — communicated 7:15 AM pool open time',
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
