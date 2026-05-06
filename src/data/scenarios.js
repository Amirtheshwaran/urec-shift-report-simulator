/**
 * UREC Shift Report Scenarios
 * 4 scenarios per facility × 3 facilities = 12 total
 * Each scenario includes context, desk clues (text-based), and expected report items.
 */

const scenarios = [
  // ── Student Recreation Center (SRC) ──
  {
    id: 'src-open-1',
    facility: 'Student Recreation Center',
    facilityShort: 'SRC',
    shiftType: 'Opening',
    context:
      'You arrive at 6:00 AM to open the SRC. During your walkthrough, you notice the men\'s locker room has standing water near the shower drains. One treadmill in the cardio area has an "Out of Order" sign that wasn\'t logged in the previous closing report. The front desk phone has 2 voicemails from a member about a lost water bottle.',
    clues: [
      'Standing water in men\'s locker room near showers',
      'Treadmill #7 has an Out of Order sign — not in last night\'s report',
      'Two voicemails about a lost blue Hydro Flask',
      'All doors unlocked and lights on by 6:05 AM',
    ],
    expectedItems: ['facility walkthrough', 'maintenance issue', 'equipment status', 'lost and found', 'opening checklist'],
  },
  {
    id: 'src-close-1',
    facility: 'Student Recreation Center',
    facilityShort: 'SRC',
    shiftType: 'Closing',
    context:
      'You are closing the SRC at 11:00 PM. During final rounds, you find a group of students refusing to leave the basketball courts. One student claims they reserved the court until midnight. The weight room has several dumbbells not re-racked, and the smoothie bar left their blenders unwashed.',
    clues: [
      'Three students on Court B refusing to leave — claim midnight reservation',
      'Dumbbells scattered across weight room floor (15lb, 25lb, 35lb)',
      'Smoothie bar blenders still dirty with residue',
      'Building clear by 11:20 PM after resolving court issue',
    ],
    expectedItems: ['patron interaction', 'closing walkthrough', 'equipment re-rack', 'policy enforcement', 'closing time'],
  },
  {
    id: 'src-mid-1',
    facility: 'Student Recreation Center',
    facilityShort: 'SRC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at the SRC, the fire alarm goes off at 2:30 PM. You help evacuate the building and account for approximately 85 patrons. The fire department arrives and determines it was triggered by dust in a smoke detector near the climbing wall. Normal operations resume at 3:15 PM.',
    clues: [
      'Fire alarm activated at 2:30 PM — climbing wall area',
      'Building evacuated: ~85 patrons counted at assembly point',
      'Fire department arrived, cleared building at 3:10 PM',
      'Dust in smoke detector near climbing wall was the cause',
      'Operations resumed at 3:15 PM',
    ],
    expectedItems: ['emergency response', 'evacuation', 'patron count', 'fire department', 'resumption time'],
  },
  {
    id: 'src-open-2',
    facility: 'Student Recreation Center',
    facilityShort: 'SRC',
    shiftType: 'Opening',
    context:
      'Opening the SRC at 6:00 AM. The overnight cleaning crew left a note saying the pool chemical levels were slightly off during their check. The main entrance card reader is beeping intermittently and not scanning IDs reliably. You also notice new promotional banners need to be hung for the upcoming intramural registration.',
    clues: [
      'Note from cleaning crew: pool chlorine reading at 2.8 ppm (target 3.0-4.0)',
      'Main entrance card reader beeping, failing ~30% of scans',
      'Box of intramural registration banners left at front desk',
      'All other systems operational',
    ],
    expectedItems: ['pool chemicals', 'equipment malfunction', 'communication with staff', 'opening checklist'],
  },

  // ── Outdoor Adventures Center (OAC) ──
  {
    id: 'oac-open-1',
    facility: 'Outdoor Adventures Center',
    facilityShort: 'OAC',
    shiftType: 'Opening',
    context:
      'You open the Outdoor Adventures Center at 9:00 AM. During gear inspection, you find a climbing harness with frayed stitching on the belay loop. Three rental bikes were returned yesterday with flat tires. A campus group has a reservation for 10 kayak paddles at 11:00 AM that wasn\'t confirmed yet.',
    clues: [
      'Climbing harness #14 — frayed stitching on belay loop, pulled from service',
      'Bikes #3, #8, #11 returned with flat tires',
      'Unconfirmed reservation: Campus Outdoors Club, 10 kayak paddles, 11:00 AM',
      'All other rental gear accounted for',
    ],
    expectedItems: ['safety equipment', 'gear inspection', 'maintenance needed', 'reservation follow-up', 'inventory'],
  },
  {
    id: 'oac-close-1',
    facility: 'Outdoor Adventures Center',
    facilityShort: 'OAC',
    shiftType: 'Closing',
    context:
      'Closing the OAC at 7:00 PM. A student returns a tent rental 2 days late and is upset about the late fee. During final inventory, you notice 2 camping stoves are missing from the rental shelf. The trip board still shows tomorrow\'s sunrise hike as "TBD" for the leader assignment.',
    clues: [
      'Late tent return — student disputing $20 late fee, wants to speak to supervisor',
      '2 camping stoves (Coleman 2-burner) missing from shelf — last checked out 3 days ago',
      'Tomorrow\'s sunrise hike leader not yet assigned on trip board',
      'All kayaks and bikes accounted for',
    ],
    expectedItems: ['late return', 'patron conflict', 'missing equipment', 'inventory discrepancy', 'trip board update'],
  },
  {
    id: 'oac-mid-1',
    facility: 'Outdoor Adventures Center',
    facilityShort: 'OAC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift, a student comes in with a minor cut from a pocket knife while preparing for a camping trip in the parking lot. You administer basic first aid. Later, a delivery of new life jackets arrives (12 units) that need to be inspected, tagged, and added to inventory.',
    clues: [
      'First aid administered: small laceration on left index finger, cleaned and bandaged',
      'Incident report form completed, student declined further medical attention',
      'Delivery received: 12 new life jackets from REI wholesale',
      'Life jackets need inspection tags and inventory entry',
    ],
    expectedItems: ['first aid', 'incident report', 'delivery received', 'inventory update'],
  },
  {
    id: 'oac-open-2',
    facility: 'Outdoor Adventures Center',
    facilityShort: 'OAC',
    shiftType: 'Opening',
    context:
      'Opening the OAC at 9:00 AM after a stormy weekend. The outdoor storage shed has a small roof leak — several sleeping bags on the top shelf are damp. The van used for weekend trips was returned with a quarter tank of gas instead of full. A parent is calling about their student\'s upcoming whitewater trip waiver.',
    clues: [
      'Roof leak in storage shed — 4 sleeping bags damp on top shelf',
      'Trip van returned with 1/4 tank gas (policy: return full)',
      'Phone call from parent asking about whitewater trip waiver process',
      'All other gear dry and accounted for',
    ],
    expectedItems: ['facility damage', 'equipment condition', 'vehicle status', 'customer service', 'policy communication'],
  },

  // ── Aquatic Center (AC) ──
  {
    id: 'ac-open-1',
    facility: 'Aquatic Center',
    facilityShort: 'AC',
    shiftType: 'Opening',
    context:
      'You open the Aquatic Center at 6:00 AM. Pool temperature reads 76°F (target 78-82°F). The lap lane dividers in lanes 3 and 4 are tangled. A swim team coach is already at the door asking why the pool isn\'t ready yet. The chemical log from last night\'s closing is missing from the binder.',
    clues: [
      'Pool temp: 76°F — below target range (78-82°F)',
      'Lane dividers tangled in lanes 3 and 4',
      'Swim team coach waiting at 6:00 AM, pool not lane-ready',
      'Previous shift\'s chemical log page missing from binder',
    ],
    expectedItems: ['pool temperature', 'equipment setup', 'patron communication', 'missing documentation', 'chemical readings'],
  },
  {
    id: 'ac-close-1',
    facility: 'Aquatic Center',
    facilityShort: 'AC',
    shiftType: 'Closing',
    context:
      'Closing the Aquatic Center at 9:00 PM. During your final pool check, you notice the pH level is at 7.8 (target 7.2-7.6). A lifeguard reports that a child vomited in the shallow end at 8:15 PM — the contamination protocol was followed and the affected area was treated. Lost and found has a pair of prescription goggles.',
    clues: [
      'pH at 7.8 — above target range (7.2-7.6), adjusted chemical feed',
      'Contamination event at 8:15 PM — vomit in shallow end, protocol followed',
      'Pool section closed 20 min for treatment, reopened 8:35 PM',
      'Prescription goggles (black, -3.0) added to lost and found',
    ],
    expectedItems: ['chemical levels', 'contamination protocol', 'health/safety incident', 'lost and found', 'closing checklist'],
  },
  {
    id: 'ac-mid-1',
    facility: 'Aquatic Center',
    facilityShort: 'AC',
    shiftType: 'Mid-Shift',
    context:
      'During your mid-shift at the Aquatic Center, a patron slips on the pool deck near the diving boards and twists their ankle. They can bear weight but are in pain. You provide ice and complete an incident report. Meanwhile, the pool vacuum robot has stopped working mid-cycle and is sitting at the bottom of the deep end.',
    clues: [
      'Slip-and-fall near diving boards — patron twisted right ankle',
      'Ice applied, patron declined EMS, completed incident report',
      'Wet floor signs were in place at time of incident',
      'Pool vacuum robot stuck in deep end — error light blinking',
    ],
    expectedItems: ['injury incident', 'first aid', 'incident report', 'equipment malfunction', 'safety conditions'],
  },
  {
    id: 'ac-open-2',
    facility: 'Aquatic Center',
    facilityShort: 'AC',
    shiftType: 'Opening',
    context:
      'Opening the Aquatic Center at 6:00 AM. The hot tub is displaying an error code (E-04) and the jets are not running. Lap swim starts in 30 minutes and 4 regulars are already in the lobby. The AED unit near the lifeguard stand has a low battery indicator blinking.',
    clues: [
      'Hot tub error code E-04 — jets not functional, water temp normal',
      '4 regulars waiting for 6:30 AM lap swim',
      'AED battery indicator blinking low on Stand #2',
      'Main pool and water temp are within normal range',
    ],
    expectedItems: ['equipment malfunction', 'safety equipment', 'patron communication', 'opening checklist', 'maintenance request'],
  },
]

/** Pick a random scenario */
export function getRandomScenario() {
  return scenarios[Math.floor(Math.random() * scenarios.length)]
}

/** Get all scenarios (for dev/reference) */
export function getAllScenarios() {
  return scenarios
}

export default scenarios
