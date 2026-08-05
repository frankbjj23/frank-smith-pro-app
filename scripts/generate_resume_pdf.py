from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Frank_Smith_III_Developer_Resume.pdf"

NAVY = colors.HexColor("#102A43")
BLUE = colors.HexColor("#1F5D8F")
TEXT = colors.HexColor("#1F2933")
MUTED = colors.HexColor("#52606D")
RULE = colors.HexColor("#D9E2EC")


def project(title, status, stack, summary, link):
    return KeepTogether(
        [
            Paragraph(
                f"<b>{title}</b> <font color='#52606D'>| {status}</font>",
                styles["ProjectTitle"],
            ),
            Paragraph(f"<b>Technologies:</b> {stack}", styles["Small"]),
            Paragraph(summary, styles["Body"]),
            Paragraph(f"<link href='{link}' color='#1F5D8F'>{link}</link>", styles["Link"]),
            Spacer(1, 6),
        ]
    )


def role(title, company, dates, bullets):
    items = [
        Paragraph(f"<b>{title}</b>", styles["RoleTitle"]),
        Paragraph(f"{company} | {dates}", styles["Small"]),
    ]
    items.extend(Paragraph(f"- {bullet}", styles["ResumeBullet"]) for bullet in bullets)
    items.append(Spacer(1, 5))
    return KeepTogether(items)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.line(doc.leftMargin, 0.43 * inch, letter[0] - doc.rightMargin, 0.43 * inch)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.27 * inch, "Frank Smith III | Full-Stack Developer Resume")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.27 * inch, f"Page {doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        "Name",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=22,
        leading=24,
        textColor=NAVY,
        alignment=TA_CENTER,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        "Headline",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=BLUE,
        alignment=TA_CENTER,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontSize=8.2,
        leading=10,
        textColor=MUTED,
        alignment=TA_CENTER,
        spaceAfter=9,
    )
)
styles.add(
    ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=12,
        textColor=NAVY,
        spaceBefore=7,
        spaceAfter=5,
        borderWidth=0,
    )
)
styles.add(
    ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.4,
        leading=10.8,
        textColor=TEXT,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        "Small",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.7,
        leading=9.5,
        textColor=MUTED,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        "Link",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.5,
        leading=9,
        textColor=BLUE,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        "ProjectTitle",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=9,
        leading=11,
        textColor=TEXT,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        "RoleTitle",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8.8,
        leading=10.5,
        textColor=TEXT,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        "ResumeBullet",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.2,
        leftIndent=8,
        firstLineIndent=-6,
        textColor=TEXT,
        spaceAfter=1,
    )
)


story = [
    Paragraph("FRANK SMITH III", styles["Name"]),
    Paragraph("Full-Stack Developer | Field Operations Specialist", styles["Headline"]),
    Paragraph(
        "Bergen County, New Jersey | "
        "<link href='mailto:frankbjj23@gmail.com' color='#1F5D8F'>frankbjj23@gmail.com</link> | "
        "<link href='https://www.linkedin.com/in/franksmithiii23' color='#1F5D8F'>LinkedIn</link> | "
        "<link href='https://github.com/frankbjj23' color='#1F5D8F'>GitHub</link> | "
        "<link href='https://franksmithlll.com' color='#1F5D8F'>Portfolio</link>",
        styles["Contact"],
    ),
    Paragraph("PROFESSIONAL SUMMARY", styles["Section"]),
    Paragraph(
        "Fullstack Academy graduate and full-stack developer with paid-client delivery, "
        "community-service web development, and verified project experience across responsive "
        "interfaces, APIs, authentication, relational data, custom domains, and deployment. "
        "My field-operations work in water treatment adds practical experience with safety, "
        "documentation, troubleshooting, communication, and dependable systems.",
        styles["Body"],
    ),
    Paragraph("TECHNICAL SKILLS", styles["Section"]),
]

skills = [
    ["Languages", "JavaScript, TypeScript, HTML5, CSS3, SQL"],
    ["Frameworks", "React, Next.js, Node.js, Express.js, React Router, Vite"],
    ["Data and services", "PostgreSQL, Supabase, REST APIs, authentication, Stripe Checkout, Twilio SMS"],
    ["Testing and tools", "Vitest, Supertest, Git, GitHub, VS Code, command line, Netlify"],
    ["Professional strengths", "Troubleshooting, technical documentation, responsive design, systems reliability"],
]
skills_table = Table(
    [[Paragraph(f"<b>{label}</b>", styles["Small"]), Paragraph(value, styles["Small"])] for label, value in skills],
    colWidths=[1.22 * inch, 5.72 * inch],
)
skills_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LINEBELOW", (0, 0), (-1, -2), 0.35, RULE),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
            ("TOPPADDING", (0, 0), (-1, -1), 2),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]
    )
)
story.extend([skills_table, Paragraph("SELECTED PROJECTS", styles["Section"])])

story.extend(
    [
        project(
            "Il Veliero Porticello",
            "Live paid-client website",
            "Next.js, React, TypeScript, responsive design, GitHub, custom DNS",
            "Converted photographs of a printed menu and waterfront venue into a responsive customer-facing website and digital menu with map, review, QR-code, source, and custom-domain access.",
            "https://ilvelieroporticello.com/",
        ),
        project(
            "Cutz By Casper",
            "Deployed",
            "Next.js, TypeScript, Tailwind CSS, Supabase, Stripe, Twilio",
            "Mobile-first booking application connecting scheduling, deposit checkout, messaging, and administrative workflows for a single-barber studio.",
            "https://github.com/frankbjj23/Cutz-By-Casper",
        ),
        project(
            "Greater Expectation",
            "Live community-service website",
            "Next.js, React, TypeScript, responsive design, accessibility",
            "Created a clear ministry website for Pastor Troy and the Greater Expectation congregation, organizing visitor, message, prayer, and ministry paths while leaving unconfirmed details marked as coming soon.",
            "https://www.greaterexpectation.org/",
        ),
        project(
            "Jukebox Pro",
            "Coursework",
            "Node.js, Express, PostgreSQL, JWT, bcrypt, Vitest, Supertest",
            "Authenticated playlist API with registration, login, protected user-owned routes, relational data, seed data, and tests.",
            "https://github.com/frankbjj23/jukebox-pro",
        ),
        project(
            "Book Buddy",
            "Coursework",
            "JavaScript, React, React Router, Vite, REST API",
            "React catalog client with book details, registration, login, account actions, reservations, and returns.",
            "https://github.com/frankbjj23/Book-Buddy",
        ),
        KeepTogether(
            [
                Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]),
                role(
                    "Field Operations Specialist",
                    "Water Treatment Operations | Bergen County, New Jersey",
                    "Current role",
                    [
                        "Support field operations with attention to safety, monitoring, documentation, communication, and dependable procedures.",
                        "Troubleshoot operational issues, document observations, and remain composed when real systems require attention.",
                    ],
                ),
            ]
        ),
        role(
            "Full-Stack Developer",
            "Independent Project Development",
            "2025 - Present",
            [
                "Build responsive projects using JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Supabase.",
                "Delivered the live Il Veliero paid-client website and Greater Expectation community-service website with verified content and public documentation.",
                "Document project status, setup, technical decisions, and current limitations through repositories and portfolio case studies.",
            ],
        ),
        role(
            "Independent Master Trainer",
            "Self Employed | New Jersey / New York",
            "2019 - Present",
            [
                "Design structured programs using goal analysis, progress tracking, scheduling, and clear communication.",
                "Manage client communication, digital tracking, and daily operations independently.",
            ],
        ),
        role(
            "Owner / Operator",
            "Eagle Holdings Corp | New York, New York",
            "2018 - 2020",
            ["Managed operations, workflow design, client onboarding, reporting, budgeting, and vendor coordination."],
        ),
        role(
            "Chief Operating Officer",
            "Premier Capital | Brooklyn, New York",
            "2015 - 2018",
            ["Directed daily operations and supported team accountability, communication, internal workflows, and performance tracking."],
        ),
        Paragraph("EDUCATION", styles["Section"]),
        role(
            "Software Engineering Bootcamp",
            "Fullstack Academy",
            "Graduated March 2026",
            [
                "Completed immersive training in JavaScript, React, backend fundamentals, SQL databases, authentication, testing, data structures, algorithms, and application development."
            ],
        ),
        Paragraph("PROFESSIONAL LINKS", styles["Section"]),
        Paragraph(
            "Portfolio: <link href='https://franksmithlll.com' color='#1F5D8F'>franksmithlll.com</link> | "
            "Projects: <link href='https://franksmithlll.com/projects' color='#1F5D8F'>franksmithlll.com/projects</link> | "
            "Writing: <link href='https://franksmithlll.com/blog' color='#1F5D8F'>franksmithlll.com/blog</link> | "
            "Resume site: <link href='https://frank-smith-developer-resume.netlify.app' color='#1F5D8F'>frank-smith-developer-resume.netlify.app</link>",
            styles["Body"],
        ),
    ]
)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    rightMargin=0.62 * inch,
    leftMargin=0.62 * inch,
    topMargin=0.48 * inch,
    bottomMargin=0.58 * inch,
    title="Frank Smith III Full-Stack Developer Resume",
    author="Frank Smith III",
    subject="Recruiter-focused software development and field operations resume",
)
document.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
