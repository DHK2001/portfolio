import { writeFileSync } from "node:fs";

const outputPath = "public/docs/CV-Derek Galeas.pdf";
const pageWidth = 612;
const pageHeight = 792;
const marginX = 52;
const marginTop = 46;
const marginBottom = 46;
const contentWidth = pageWidth - marginX * 2;

const cv = {
  name: "Derek Galeas",
  title: "Mobile Developer (React Native / Expo) | Software Engineer",
  contact:
    "El Progreso, Yoro | 9671-3155 | dhenrygk12@gmail.com | linkedin.com/in/derek-galeas-00ba83358 | github.com/DHK2001",
  summary:
    "Software Engineer focused on mobile and frontend development. Experienced building and maintaining iOS and Android applications with React Native, Expo, Swift, Flutter, React, Next.js, API integrations, responsive UI, and application data flows.",
  skills: [
    "Mobile: React Native, Expo, Swift, SwiftUI, UIKit, Flutter, Android Studio, Xcode",
    "Frontend: React, Next.js, TypeScript, JavaScript, HTML, CSS, TailwindCSS",
    "Backend/Data: API integration, REST APIs, MongoDB, Firebase Realtime Database, JSON data flows",
    "Tools: GitHub, Postman, VS Code, platform debugging, responsive UI implementation",
  ],
  experience: [
    {
      role: "Mobile Developer (React Native / Expo)",
      company: "Sans Services",
      dates: "April 2025 - Present",
      bullets: [
        "Build and maintain mobile features for iOS and Android from a shared React Native, Expo, and JavaScript codebase.",
        "Transitioned with the team from full-time iOS development to cross-platform mobile development using React Native and Expo.",
        "Apply native mobile experience with Swift, Xcode, Android Studio, and platform-specific debugging to solve mobile issues.",
        "Collaborate with cross-functional teams to improve app performance, UI quality, and user experience.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Project Collaboration",
      dates: "January 2025 - March 2025",
      bullets: [
        "Contributed to web projects using React, Next.js, HTML, CSS, TailwindCSS, and TypeScript-oriented UI patterns.",
        "Developed a QR code generator with customization options for colors, borders, dot patterns, and download output.",
        "Debugged and fixed frontend issues to improve usability and consistency in an existing web application.",
        "Collaborated remotely under a lead freelancer across multiple client-focused frontend tasks.",
      ],
    },
    {
      role: "Mobile Developer Intern",
      company: "Sans Services",
      dates: "April 2024 - September 2024",
      bullets: [
        "Maintained iOS and Android applications by fixing bugs and improving user interface details.",
        "Worked with the mobile development department using Android Studio, Xcode, and platform testing workflows.",
        "Collaborated with developers to support app maintenance and mobile UI improvements.",
      ],
    },
    {
      role: "Mobile Developer (Flutter)",
      company: "Grupo Incova",
      dates: "August 2022 - September 2023",
      bullets: [
        "Developed and maintained cross-platform mobile applications for Android and iOS using Flutter and Dart.",
        "Led messaging functionality in an existing application, covering frontend implementation and backend integration.",
        "Integrated new UI designs into existing application logic and maintained MongoDB data flows for app features.",
      ],
    },
  ],
  projects: [
    {
      name: "Movie App",
      detail:
        "React Native, Expo, TypeScript, TMDB API, bottom navigation, search, detail screens, custom hooks, typed API responses.",
    },
    {
      name: "Expense Tracker App",
      detail:
        "React Native, Expo, JavaScript, Firebase Realtime Database, CRUD operations, FlatList rendering, add/edit/delete flows.",
    },
    {
      name: "Weather App (SwiftUI - VIPER Architecture)",
      detail:
        "SwiftUI, API integration, 5-day forecast, local JSON fallback, VIPER separation of concerns.",
    },
    {
      name: "Portfolio Website",
      detail:
        "Next.js App Router, TypeScript, TailwindCSS, responsive layout, light/dark theme, project showcase, certificate viewer.",
    },
  ],
  education: [
    "Bachelor's Degree in Computer Systems Engineering - Unitec, San Pedro Sula, Honduras (2019 - 2024)",
  ],
  certificates: ["React Native - The Practical Guide [2025] - Udemy"],
  languages: ["Spanish: Native", "English: Professional working proficiency"],
};

function escapePdfText(text) {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");
}

function normalizeText(text) {
  return text
    .replaceAll("–", "-")
    .replaceAll("—", "-")
    .replaceAll("’", "'")
    .replaceAll("“", '"')
    .replaceAll("”", '"');
}

function estimateWidth(text, size) {
  let units = 0;
  for (const char of text) {
    if ("il.,'|!:;".includes(char)) units += 0.28;
    else if ("mwMW@#%".includes(char)) units += 0.85;
    else if (char === " ") units += 0.32;
    else units += 0.54;
  }
  return units * size;
}

function wrapText(text, size, maxWidth) {
  const words = normalizeText(text).split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (estimateWidth(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function createRenderer() {
  const pages = [];
  let commands = [];
  let y = pageHeight - marginTop;

  function newPage() {
    if (commands.length) pages.push(commands.join("\n"));
    commands = [];
    y = pageHeight - marginTop;
  }

  function ensureSpace(height) {
    if (y - height < marginBottom) newPage();
  }

  function text(line, x, lineY, size = 10, font = "F1", color = "0 0 0") {
    commands.push(
      `BT /${font} ${size} Tf ${color} rg ${x} ${lineY} Td (${escapePdfText(
        normalizeText(line)
      )}) Tj ET`
    );
  }

  function centeredText(line, lineY, size = 10, font = "F1", color = "0 0 0") {
    const textWidth = estimateWidth(line, size);
    text(line, (pageWidth - textWidth) / 2, lineY, size, font, color);
  }

  function rule() {
    commands.push(
      `0.18 0.24 0.34 RG 1.25 w ${marginX} ${y} m ${pageWidth - marginX} ${y} l S`
    );
    y -= 15;
  }

  function bulletMark(x, lineY) {
    commands.push(`0.08 0.16 0.30 rg ${x} ${lineY + 3.4} 3 3 re f`);
  }

  function paragraph(value, options = {}) {
    const {
      size = 9.5,
      leading = 12.5,
      font = "F1",
      indent = 0,
      bullet = false,
      after = 5,
      maxWidth = contentWidth - indent,
    } = options;
    const markerWidth = bullet ? 18 : 0;
    const lines = wrapText(value, size, maxWidth - markerWidth);
    ensureSpace(lines.length * leading + after);

    lines.forEach((line, index) => {
      if (bullet && index === 0) bulletMark(marginX + indent, y);
      text(line, marginX + indent + markerWidth, y, size, font);
      y -= leading;
    });

    y -= after;
  }

  function heading(label) {
    ensureSpace(42);
    y -= 13;
    text(label.toUpperCase(), marginX, y, 15.5, "F2", "0.08 0.16 0.30");
    y -= 8;
    rule();
  }

  function roleHeader(role, company, dates) {
    ensureSpace(38);
    text(role, marginX, y, 11.5, "F2", "0.08 0.16 0.30");
    const dateWidth = estimateWidth(dates, 9.4);
    text(
      dates,
      pageWidth - marginX - dateWidth,
      y,
      9.4,
      "F2",
      "0.24 0.29 0.37"
    );
    y -= 13;
    text(company, marginX, y, 9.8, "F2", "0.24 0.29 0.37");
    y -= 15;
  }

  function finish() {
    if (commands.length) pages.push(commands.join("\n"));
    return pages;
  }

  return {
    get y() {
      return y;
    },
    set y(value) {
      y = value;
    },
    text,
    centeredText,
    paragraph,
    heading,
    roleHeader,
    finish,
  };
}

function buildPages() {
  const renderer = createRenderer();

  renderer.centeredText(cv.name.toUpperCase(), renderer.y, 30, "F2", "0.08 0.16 0.30");
  renderer.y -= 26;
  renderer.centeredText(cv.title, renderer.y, 11, "F2", "0.10 0.22 0.42");
  renderer.y -= 17;
  renderer.centeredText(cv.contact, renderer.y, 9.5, "F1", "0.24 0.29 0.37");
  renderer.y -= 20;

  renderer.heading("Professional Summary");
  renderer.paragraph(cv.summary, { size: 10, leading: 13.6, after: 8 });

  renderer.heading("Work Experience");
  for (const item of cv.experience) {
    renderer.roleHeader(item.role, item.company, item.dates);
    for (const bullet of item.bullets) {
      renderer.paragraph(bullet, {
        bullet: true,
        indent: 6,
        size: 9.6,
        leading: 12.6,
        after: 2,
      });
    }
    renderer.y -= 8;
  }

  renderer.heading("Education");
  for (const item of cv.education) {
    renderer.paragraph(item, {
      bullet: true,
      size: 9.8,
      leading: 12.8,
      after: 2,
    });
  }

  renderer.heading("Skills");
  for (const skill of cv.skills) {
    renderer.paragraph(skill, {
      bullet: true,
      size: 9.6,
      leading: 12.6,
      after: 2,
    });
  }

  renderer.heading("Selected Projects");
  for (const project of cv.projects) {
    renderer.paragraph(`${project.name}: ${project.detail}`, {
      bullet: true,
      size: 9.4,
      leading: 12.4,
      after: 2,
    });
  }

  renderer.heading("Certifications");
  for (const item of cv.certificates) {
    renderer.paragraph(item, { bullet: true, size: 9.6, leading: 12.6, after: 2 });
  }

  renderer.heading("Languages");
  for (const item of cv.languages) {
    renderer.paragraph(item, { bullet: true, size: 9.6, leading: 12.6, after: 2 });
  }

  return renderer.finish();
}

function pdfString(pages) {
  const objects = [];
  const add = (content) => {
    objects.push(content);
    return objects.length;
  };

  const catalogId = add("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = add("");
  const fontRegularId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBoldId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  for (const pageContent of pages) {
    const stream = `<< /Length ${Buffer.byteLength(pageContent)} >>\nstream\n${pageContent}\nendstream`;
    const contentId = add(stream);
    const pageId = add(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  }

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds
    .map((id) => `${id} 0 R`)
    .join(" ")}] /Count ${pageIds.length} >>`;

  const offsets = [0];
  let pdf = "%PDF-1.4\n";

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

writeFileSync(outputPath, pdfString(buildPages()));
console.log(`Generated ${outputPath}`);
