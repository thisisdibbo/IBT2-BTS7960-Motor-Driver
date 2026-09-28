// All copy and data for the site lives here. Edit this file to update the portfolio.

import portraitHero from './assets/portrait-hero.webp'
import portraitAbout from './assets/portrait-about.webp'
import workMedicalBox from './assets/work-medical-box.webp'
import workIbt2 from './assets/work-ibt2.webp'
import workBreakProject from './assets/work-breakproject.webp'
import workPmSensor from './assets/work-pm-sensor.webp'
import workWaterScada from './assets/work-waterscada.webp'
import workRfid from './assets/work-rfid.webp'
import researchOirs from './assets/research-oirs.webp'
import researchBench from './assets/research-bench.webp'

const GITHUB = 'https://github.com/thisisdibbo'

export const profile = {
  fullName: 'Md. Mahin Rahman',
  firstName: 'Mahin',
  lastName: 'Rahman',
  email: 'mr.d2003feb@gmail.com',
  location: 'Gazipur, Bangladesh',
  cv: 'Md-Mahin-Rahman-CV.pdf',
  links: {
    github: GITHUB,
    linkedin: 'https://www.linkedin.com/in/md-mahin-rahman-5b720a34b',
  },
}

export const hero = {
  label: 'Embedded systems · PCB design · Research',
  statement:
    'I design circuit boards and embedded instruments, from Mars rover power systems to research data loggers.',
  portrait: portraitHero,
}

// Competitions and communities, shown in the scrolling strip under the hero.
export const marquee = [
  'University Rover Challenge',
  'International Rover Challenge',
  'Anatolian Rover Challenge',
  'Project Altair',
  'IEEE Robotics & Automation Society',
  'IUT Robotics Society',
  'Islamic University of Technology',
]

export const services = [
  {
    index: '01',
    title: 'Hardware & PCB',
    body: 'Schematics, two-layer layouts and hand-assembled boards, from a BTS7960 motor driver to power distribution for competition rovers. I test what I draw.',
    tools: 'EAGLE · EasyEDA · Proteus · PSpice · PSIM',
    link: { label: 'See the builds', href: '#work' },
  },
  {
    index: '02',
    title: 'Embedded systems',
    body: 'ESP32 and Arduino instruments that log the real world: brake events on a rickshaw, dust at the roadside, water quality in the field. Every reading gets a timestamp.',
    tools: 'ESP32 · Arduino · C/C++ · Python · PyQt6 · Firebase',
    link: { label: 'Code on GitHub', href: GITHUB },
  },
  {
    index: '03',
    title: 'Research',
    body: 'Simulation research in optical wireless communication and transient electronics. I showed that a common mirror model overstates SNR by 6.3 dB, and published the code.',
    tools: 'Python · MATLAB · Silvaco TCAD · Cadence Virtuoso',
    link: { label: 'Read the research', href: '#research' },
  },
]

export type Project = {
  title: string
  stack: string
  year: string
  result: string
  image: string
  alt: string
  href: string
  /** 'cover' fills the frame; 'screen' shows a UI screenshot inset on the card. */
  fit?: 'cover' | 'screen'
  position?: string
}

export const work: Project[] = [
  {
    title: 'Smart Medical Box',
    stack: 'ESP32 · ESP-NOW · 3D printing',
    year: '2025–26',
    result:
      'Dispenses pills on a schedule, then confirms each one with a piezo disc under the tray before pumping the syrup dose.',
    image: workMedicalBox,
    alt: 'The 3D-printed Smart Medical Box with three pill silos and a touchscreen on a swing arm',
    href: `${GITHUB}/Smart-Medical-Box`,
  },
  {
    title: 'IBT-2 motor driver PCB',
    stack: 'PCB design · Power electronics',
    year: '2025',
    result:
      'A BTS7960B H-bridge I designed in EAGLE, fabricated and bench-tested. At full drive, the output matches the supply.',
    image: workIbt2,
    alt: 'Assembled motor driver board with two BTS7960B half-bridges, status LEDs and screw terminals',
    href: `${GITHUB}/IBT2-BTS7960-Motor-Driver`,
  },
  {
    title: 'BreakProject',
    stack: 'ESP32 · VL53L0X · Rotary encoder',
    year: '2026',
    result: 'A braking-distance and motion logger, field-tested on the front wheel of a cycle rickshaw.',
    image: workBreakProject,
    alt: 'Encoder and time-of-flight sensor mounted on the front wheel of a cycle rickshaw',
    href: `${GITHUB}/BreakProject`,
  },
  {
    title: 'Portable air-quality logger',
    stack: 'ESP32 · PMS5003 · GPS · RTC',
    year: '2025',
    result:
      'Logs PM1.0, PM2.5 and PM10 with GPS position and RTC time to an SD card, fully offline. An earlier version streamed live to Firebase.',
    image: workPmSensor,
    alt: 'OLED screen showing live PM1.0, PM2.5 and PM10 readings',
    href: `${GITHUB}/ESP32-PM-Sensor`,
    position: '0% 50%',
  },
  {
    title: 'WaterSCADA',
    stack: 'ESP32 · PyQt6 · GPS',
    year: '2025–26',
    result: 'A GPS-tagged water-quality logger with a PyQt6 SCADA dashboard, packaged as a single Windows executable.',
    image: workWaterScada,
    alt: 'WaterSCADA dashboard with TDS, EC and temperature gauges, a GPS track map and a trend chart',
    href: `${GITHUB}/ESP32-Water-Quality-SCADA`,
    fit: 'screen',
  },
  {
    title: 'RFID rickshaw system',
    stack: 'Python · Firebase · RFID',
    year: '2025',
    result: 'Two RFID cards and a QR sticker tell anyone who is pulling a rickshaw right now, verified live.',
    image: workRfid,
    alt: 'USB RFID reader with owner and puller cards',
    href: `${GITHUB}/rfid-rickshaw-system`,
  },
]

export const moreBuilds = [
  {
    title: 'FPV drones, digital and analog video',
    meta: 'ExpressLRS · Betaflight · EdgeTX',
    year: '2025–26',
  },
  {
    title: 'Laser engraver with a custom power control panel',
    meta: 'Power electronics · GRBL · 3D printing',
    year: '2025–26',
  },
  {
    title: 'Smart Audio Recognition System',
    meta: 'Python · DSP · DTW · contributor',
    year: '2026',
  },
  {
    title: 'DialIndicatorReader',
    meta: 'Arduino Nano · caliper protocol decoding',
    year: '2025–26',
    href: `${GITHUB}/DialIndicatorReader`,
  },
  {
    title: 'Multi Serial Monitor',
    meta: 'PySide6 · multi-port load-cell logging',
    year: '2025–26',
    href: `${GITHUB}/MultiserialMonitor`,
  },
  {
    title: 'Digital Snake & Ladder in 74xx logic',
    meta: 'Digital logic · Proteus · Gerber output',
    year: '2024–25',
  },
]

/** A row in the Research or Case competitions list. */
export type TalkItem = {
  title: string
  description: string
  venue: string
  href?: string
  /** Image that follows the pointer on hover. Without one, thumbLabel is set in type instead. */
  thumb?: string
  thumbLabel?: string
  thumbKicker?: string
  /** Shown instead of the arrow when there is no link. */
  status?: string
}

export const research: TalkItem[] = [
  {
    title: 'Reflection models for optical IRS in Li-Fi',
    description:
      'Showed that omitting the law of reflection overstates SNR by 6.3 dB, and derived the mirror optimum in closed form.',
    venue: 'Lead & corresponding author · manuscript in preparation for Optics Communications',
    href: `${GITHUB}/oirs-vlc-reflection-model`,
    thumb: researchOirs,
  },
  {
    title: 'Transient chips with on-chip AI',
    description:
      'Biodegradable semiconductor devices paired with on-chip inference, simulated from Silvaco TCAD to Cadence Virtuoso.',
    venue: 'Sole author · simulation study targeting a Q1 journal',
    thumbLabel: 'TCAD → Virtuoso',
    thumbKicker: 'Simulation study',
  },
  {
    title: 'Instruments for transportation research',
    description:
      'Encoder and time-of-flight brake logging on a cycle rickshaw, and load-cell and dial-indicator capture in the lab.',
    venue: 'Undergraduate research assistant · Dr. Nazmus Sakib, Civil & Environmental Engineering, IUT',
    href: `${GITHUB}/BreakProject`,
    thumb: researchBench,
  },
]

// Business case competitions. The section and its nav link appear once this has an entry.
// Example:
//   {
//     title: 'Deck title',
//     description: 'The problem and your recommendation, in one line.',
//     venue: 'Competition name, organiser · Result · 2025',
//     href: 'link to the deck (optional)',
//     thumb: importedSlideImage,
//   },
export const cases: TalkItem[] = []

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  ...(cases.length ? [{ label: 'Cases', href: '#cases' }] : []),
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
]

export const experience = [
  {
    title: 'B.Sc. in Electrical and Electronic Engineering, CGPA 3.64 / 4.00',
    org: 'Islamic University of Technology, Gazipur',
    year: '2023–27',
  },
  {
    title: 'Senior member, electrical sub-team',
    org: 'Project Altair, IUT Mars rover team',
    year: '2024–',
  },
  {
    title: 'On-site finalist at URC, IRC and the Anatolian Rover Challenge',
    org: 'Project Altair',
    year: '2026',
  },
  {
    title: 'University Rover Challenge finalist (18th of 36) and IRC on-site finalist',
    org: 'Project Altair',
    year: '2025',
  },
  {
    title: 'Undergraduate research assistant, transportation engineering',
    org: 'Dept. of Civil & Environmental Engineering, IUT',
    year: '2025–',
  },
  {
    title: 'Joint Secretary; Arduino workshop instructor for 50+ participants',
    org: 'IEEE Robotics & Automation Society, IUT Student Branch Chapter',
    year: '2026–',
  },
  {
    title: 'Project Coordinator',
    org: 'IUT Robotics Society',
    year: '2023–',
  },
  {
    title: 'Industrial attachment at Ghorashal Power Station, BAEC, Robi Axiata and Walton Hi-Tech',
    org: 'IUT Industrial Attachment Program',
    year: '2026',
  },
  {
    title: 'HSC and SSC in Science, GPA 5.00 / 5.00',
    org: 'Govt. Edward College · Pabna Zilla School',
    year: '2022 · 2020',
  },
]

export const numbers = [
  { value: '5', label: 'International rover-challenge finals with Project Altair, 2025–26' },
  { value: '6.3', unit: 'dB', label: 'SNR overstated by optical IRS models that omit the law of reflection' },
  { value: '50+', label: 'Participants in the Arduino workshop I taught for IEEE RAS' },
  { value: '3.64', label: 'CGPA at IUT, out of 4.00' },
]

export const quote = {
  lead: 'The box counts the pills it has ',
  highlight: 'actually',
  rest: ' delivered, rather than the pills it thinks it delivered.',
  name: 'Md. Mahin Rahman',
  role: 'Design note, Smart Medical Box',
}

export const about = {
  portrait: portraitAbout,
  paragraphs: [
    "I'm a fourth-year Electrical and Electronic Engineering student at the Islamic University of Technology in Gazipur, Bangladesh. I'm from Pabna.",
    "On Project Altair, IUT's Mars rover team, I lead power distribution, protection and PCB design for our competition rovers, along with embedded control and telemetry. As a research assistant in civil and environmental engineering, I build the instruments behind transportation research.",
    "I also run my own simulation research in optical wireless communication and transient electronics, and I'm Joint Secretary of the IEEE Robotics and Automation Society chapter at IUT. I speak Bangla and English.",
  ],
  toolkit: [
    { label: 'Hardware', value: 'ESP32, Arduino, power electronics, H-bridge drivers, FPV builds, 3D printing' },
    {
      label: 'CAD & simulation',
      value:
        'EAGLE, EasyEDA, Proteus, PSpice, PSIM, MATLAB, COMSOL, Silvaco TCAD, Cadence Virtuoso, Lumerical FDTD, SolidWorks',
    },
    { label: 'Code', value: 'C, C++, Python, MATLAB, Kotlin, LaTeX, PyQt6 / PySide6, Firebase, SQLite' },
    { label: 'Interfaces', value: 'I²C, SPI, UART, 1-Wire, ESP-NOW, GPS, IMU, ToF, RFID, TFT and OLED' },
  ],
}

export const contact = {
  heading: "Let's talk about the build.",
  paragraphs: [
    'Tell me what you are building, what it has to measure or control, and when it needs to work. If something has already been tried and failed, include that too. It is usually the most useful part.',
    'Open to internships, research collaborations and hardware projects. Based in Gazipur, Bangladesh (GMT+6).',
  ],
}
