from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Frank_Smith_III_Developer_Resume.pdf"

NAVY = colors.HexColor("#14213D")
BLUE = colors.HexColor("#1F5A94")
INK = colors.HexColor("#20242A")
MUTED = colors.HexColor("#586270")
RULE = colors.HexColor("#D8DEE6")


def add_page_number(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(0.58 * inch, 0.47 * inch, 7.92 * inch, 0.47 * inch)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.58 * inch, 0.28 * inch, "Frank Smith III - Developer Resume")
    canvas.drawRightString(7.92 * inch, 0.28 * inch, f"Page {doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=22,
        leading=24,
        textColor=NAVY,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=BLUE,
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7.7,
        leading=10,
        textColor=MUTED,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=9.2,
        leading=11,
        textColor=NAVY,
        spaceBefore=6,
        spaceAfter=4,
        borderWidth=0,
        borderColor=RULE,
        borderPadding=0,
    )
)
styles.add(
    ParagraphStyle(
        name="BodyCompact",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.4,
        textColor=INK,
        alignment=TA_LEFT,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Entry",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8.4,
        leading=10.5,
        textColor=INK,
        spaceBefore=2,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Meta",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.5,
        leading=9.3,
        textColor=MUTED,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="BulletCompact",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.7,
        textColor=INK,
        leftIndent=10,
        firstLineIndent=-6,
        bulletIndent=2,
        spaceAfter=1.2,
    )
)


def p(text, style="BodyCompact"):
    return Paragraph(text, styles[style])


def bullet(text):
    return Paragraph(f"• {text}", styles["BulletCompact"])


def section(title):
    return [
        Spacer(1, 2),
        Paragraph(title.upper(), styles["Section"]),
        Spacer(1, 1),
    ]


def project(name, status, stack, links, bullets):
    items = [
        p(f"{name} <font color='#1F5A94'>| {status}</font>", "Entry"),
        p(f"<b>Technologies:</b> {stack}", "Meta"),
        p(links, "Meta"),
    ]
    items.extend(bullet(item) for item in bullets)
    return KeepTogether(items)


def experience(role, company, dates, bullets):
    items = [
        p(f"{role} <font color='#586270'>| {company} | {dates}</font>", "Entry")
    ]
    items.extend(bullet(item) for item in bullets)
    return KeepTogether(items)


story = [
    p("Frank Smith III", "Name"),
    p("FULL-STACK DEVELOPER | FIELD OPERATIONS SPECIALIST", "Role"),
    p(
        "Bergen County, New Jersey | frankbjj23@gmail.com | "
        "<link href='https://www.linkedin.com/in/franksmithiii23'>linkedin.com/in/franksmithiii23</link> | "
        "<link href='https://github.com/frankbjj23'>github.com/frankbjj23</link> | "
        "<link href='https://franksmithlll.com'>franksmithlll.com</link>",
        "Contact",
    ),
]

story += section("Professional Summary")
story += [
    p(
        "Fullstack Academy graduate and full-stack developer with paid client delivery, "
        "community-service web development, and verified project work across responsive "
        "interfaces, APIs, authentication, relational data, custom domains, and deployment. "
        "Current field-operations work in water treatment adds practical experience with "
        "safety, documentation, troubleshooting, communication, and dependable systems."
    )
]

story += section("Technical Skills")
story += [
    p("<b>Languages:</b> JavaScript, TypeScript, HTML5, CSS3, SQL"),
    p("<b>Frameworks and Libraries:</b> React, Next.js, React Router, Node.js, Express.js, Vite"),
    p("<b>Data and Services:</b> PostgreSQL, Supabase, REST APIs, authentication"),
    p("<b>Tools and Practices:</b> Git, GitHub, VS Code, responsive design, testing, technical documentation, deployment"),
]

story += section("Selected Technical Projects")
story += [
    project(
        "Greater Expectation",
        "Live Community Service Website",
        "Next.js, React, TypeScript, CSS, responsive design",
        "<link href='https://www.greaterexpectation.org/'>greaterexpectation.org</link> | "
        "<link href='https://github.com/frankbjj23/pastor-troy-site'>GitHub</link> | "
        "<link href='https://franksmithlll.com/building-greater-expectation-faith-community-service-frank-smith-iii'>Project story</link>",
        [
            "Created and deployed a faith-centered ministry website as community service for Pastor Troy, a good friend and my pastor.",
            "Organized clear visitor paths for ministry information, messages, visits, and prayer resources while marking unconfirmed operational details as coming soon.",
        ],
    ),
    Spacer(1, 3),
    project(
        "Il Veliero Porticello",
        "Live Paid Client Website and Digital Menu",
        "Next.js, React, TypeScript, CSS, GitHub, custom DNS",
        "<link href='https://ilvelieroporticello.com/'>ilvelieroporticello.com</link> | "
        "<link href='https://github.com/frankbjj23/il-veliero-porticello'>GitHub</link>",
        [
            "Contracted to transform photographs of a printed menu and waterfront venue into a responsive customer-facing website.",
            "Extracted and organized menu content, recreated the nautical visual identity, and delivered Maps, review, QR-code, repository, and custom-domain access.",
        ],
    ),
    Spacer(1, 3),
    project(
        "Cutz By Casper",
        "Deployed Booking Platform",
        "Next.js, TypeScript, Tailwind CSS, Supabase, Stripe, Twilio",
        "<link href='https://cutz-by-casper-umri.vercel.app'>Live application</link> | "
        "<link href='https://github.com/frankbjj23/Cutz-By-Casper'>GitHub</link>",
        [
            "Developed a mobile-first booking application with scheduling, deposit checkout, messaging, and administrative workflows.",
            "Connected a service-business interface to database, payment, and communication systems.",
        ],
    ),
    Spacer(1, 3),
    project(
        "Sturgis Options",
        "Group Trip Planning Application",
        "JavaScript, React, Node.js, Express.js, PostgreSQL",
        "<link href='https://github.com/frankbjj23/Sturgis-Options'>GitHub repository</link>",
        [
            "Built a planning tool that centralizes housing choices, links, dates, comments, and voting for group decisions.",
        ],
    ),
    Spacer(1, 3),
    project(
        "Isaac Wright Jr. Advocacy Website",
        "In Development",
        "HTML, CSS, JavaScript",
        "<link href='https://franksmithlll.com/isaac-wright-jr-advocacy-website-project'>Project page</link> | "
        "<link href='https://github.com/frankbjj23/isaac-wright-Jr'>GitHub</link>",
        [
            "Developing an advocacy website with Isaac Wright Jr.'s knowledge and approval, focused on clear content organization and accessible public presentation.",
        ],
    ),
]

story += [PageBreak()]
story += section("Professional Experience")
story += [
    experience(
        "Field Operations Specialist",
        "Water Treatment Operations, Bergen County, New Jersey",
        "Current role",
        [
            "Support water-treatment field operations with attention to safety, monitoring, documentation, and dependable procedures.",
            "Troubleshoot operational issues, communicate observations clearly, and remain composed when systems require attention.",
            "Apply disciplined verification and practical problem-solving to both operational work and software projects.",
        ],
    ),
    Spacer(1, 3),
    experience(
        "Full-Stack Developer",
        "Independent Project Development",
        "2025 - Present",
        [
            "Build and deploy responsive web projects using JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Supabase.",
            "Delivered live paid-client and community-service websites and document project status through case studies and repository READMEs.",
            "Develop workflows involving APIs, authentication, relational data, booking, payments, notifications, and deployment where supported by each project.",
        ],
    ),
    Spacer(1, 3),
    experience(
        "Independent Master Trainer",
        "Self Employed, New Jersey / New York",
        "2019 - Present",
        [
            "Design structured programs using goal analysis, progress tracking, and clear communication.",
            "Manage scheduling, client communication, digital tracking, and daily operations independently.",
            "Build long-term trust through consistency, accountability, and clear expectations.",
        ],
    ),
    Spacer(1, 3),
    experience(
        "Owner / Operator",
        "Eagle Holdings Corp, New York, New York",
        "2018 - 2020",
        [
            "Managed business operations, workflow design, client onboarding, reporting, budgeting, and vendor coordination.",
            "Applied structured problem-solving to operational processes and day-to-day decisions.",
            "Built client relationships through clear communication and accountability.",
        ],
    ),
    Spacer(1, 3),
    experience(
        "Chief Operating Officer",
        "Premier Capital, Brooklyn, New York",
        "2015 - 2018",
        [
            "Directed daily operations and supported team accountability, communication, performance tracking, and internal reporting.",
            "Managed and mentored teams while implementing repeatable reporting and workflow practices.",
            "Partnered with executive leadership on organizational planning and execution.",
        ],
    ),
]

story += [Spacer(1, 8)]
story += section("Education")
story += [
    p("Fullstack Academy | Software Engineering Bootcamp | Graduated March 2026", "Entry"),
    p(
        "Immersive software engineering program covering JavaScript, React, backend fundamentals, "
        "SQL databases, authentication, testing, data structures, algorithms, and application development."
    )
]

story += [Spacer(1, 6)]
story += section("Professional Writing")
story += [
    p(
        "<link href='https://medium.com/@franksmithiii23'>Medium</link> | "
        "<link href='https://dev.to/franksmithiii'>DEV Community</link> | "
        "<link href='https://franksmithiii.hashnode.dev'>Hashnode</link> | "
        "<link href='https://franksmithlll.com/blog'>Portfolio writing</link>"
    )
]

doc = BaseDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    leftMargin=0.58 * inch,
    rightMargin=0.58 * inch,
    topMargin=0.46 * inch,
    bottomMargin=0.58 * inch,
    title="Frank Smith III - Full-Stack Developer Resume",
    author="Frank Smith III",
    subject="Full-stack development, technical projects, and field operations experience",
)
frame = Frame(
    doc.leftMargin,
    doc.bottomMargin,
    doc.width,
    doc.height,
    leftPadding=0,
    rightPadding=0,
    topPadding=0,
    bottomPadding=0,
)
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=add_page_number)])
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.build(story)
print(OUTPUT)
