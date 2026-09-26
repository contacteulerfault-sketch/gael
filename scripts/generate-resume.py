#!/usr/bin/env python3
"""Generate public/files/resume.pdf without third-party packages."""

from pathlib import Path

PAGE_W = 612
PAGE_H = 792
MARGIN_X = 50
FONT_SIZE_BODY = 9.5
LEADING = 13

# Approximate Helvetica widths for wrapping (average char width).
AVG_CHAR = {
    9.5: 4.75,
    10.5: 5.3,
    11: 5.6,
    12: 6.1,
    22: 11.4,
}


def wrap(text, size, max_width):
    words = text.split()
    lines = []
    current = ""
    width = AVG_CHAR[size]
    for word in words:
        next_line = f"{current} {word}".strip()
        if len(next_line) * width <= max_width:
            current = next_line
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def esc(text):
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def text_op(x, y, font, size, content):
    return f"BT /{font} {size} Tf {x:.1f} {y:.1f} Td ({esc(content)}) Tj ET"


ops = []
y = PAGE_H - 46
content_w = PAGE_W - MARGIN_X * 2


def centered(text, font, size, dy=4):
    global y
    est = len(text) * AVG_CHAR.get(size, size * 0.5)
    x = max(MARGIN_X, (PAGE_W - est) / 2)
    ops.append(text_op(x, y, font, size, text))
    y -= size + dy


def section(title):
    global y
    y -= 8
    ops.append(text_op(MARGIN_X, y, "F2", 10.5, title.upper()))
    y -= 6
    ops.append(f"{MARGIN_X:.1f} {y:.1f} m {PAGE_W - MARGIN_X:.1f} {y:.1f} l S")
    y -= 16


centered("Gael Alves", "F2", 22, 6)
centered("Full-Stack Developer", "F1", 12, 4)
centered("Rio de Janeiro, Brazil  |  gaelalves.business@gmail.com", "F1", 9.5, 10)

section("Summary")
summary = (
    "Freelance full-stack developer helping clients build, improve, and maintain websites, "
    "online stores, mobile apps, dashboards, API integrations, and automation systems. "
    "Experienced with WordPress, WooCommerce, Shopify, React, Next.js, Node.js, PHP, "
    "Laravel, Firebase, Supabase, and AI chatbot integrations. Focused on clear communication, "
    "clean code, responsive design, testing, and reliable delivery."
)
for line in wrap(summary, FONT_SIZE_BODY, content_w):
    ops.append(text_op(MARGIN_X, y, "F1", FONT_SIZE_BODY, line))
    y -= LEADING

jobs = [
    (
        "Full-Stack Developer",
        "Freelance / Self-Employed",
        "February 2025 - March 2026",
        [
            "Built, improved, and maintained websites, online stores, mobile apps, dashboards, API integrations, and automation systems for clients.",
            "Worked across WordPress, WooCommerce, Shopify, React, Next.js, Node.js, PHP, Laravel, Firebase, Supabase, and AI chatbot integrations.",
            "Delivered with a focus on clear communication, clean code, responsive design, testing, and reliable handoff.",
        ],
    ),
    (
        "WordPress & WooCommerce Developer",
        "Freelance",
        "December 2023 - February 2025",
        [
            "Developed and optimized WordPress and WooCommerce websites for small businesses and online stores.",
            "Handled custom themes, plugin setup, checkout configuration, payment integration, and product catalog management.",
            "Improved SEO basics, page speed, bug fixes, and mobile responsiveness.",
        ],
    ),
    (
        "Shopify Developer",
        "Freelance",
        "August 2019 - May 2023",
        [
            "Built and customized Shopify stores, including product pages, collection pages, cart adjustments, and theme customization.",
            "Implemented responsive layouts and basic SEO setup for client storefronts.",
            "Helped clients improve store structure, user experience, and conversion-focused pages.",
        ],
    ),
]

section("Experience")
for title, meta, dates, bullets in jobs:
    ops.append(text_op(MARGIN_X, y, "F2", 11, title))
    date_w = len(dates) * AVG_CHAR[9.5]
    ops.append(text_op(PAGE_W - MARGIN_X - date_w, y, "F1", 9.5, dates))
    y -= 14
    ops.append(text_op(MARGIN_X, y, "F3", 9.5, meta))
    y -= 15
    for bullet in bullets:
        lines = wrap(bullet, FONT_SIZE_BODY, content_w - 14)
        for i, line in enumerate(lines):
            if i == 0:
                ops.append(text_op(MARGIN_X, y, "F1", FONT_SIZE_BODY, "-"))
            ops.append(text_op(MARGIN_X + 12, y, "F1", FONT_SIZE_BODY, line))
            y -= LEADING
        y -= 2
    y -= 8

section("Technical Skills")
skills = [
    ("Platforms", "Shopify, WordPress, WooCommerce"),
    ("Frontend", "React, Next.js, responsive layouts, conversion-focused pages"),
    ("Backend", "Node.js, PHP, Laravel, API integrations, automation"),
    ("Services", "Firebase, Supabase, AI chatbot integrations, payment setup"),
    ("Delivery", "Theme customization, SEO basics, speed optimization, testing"),
]
for label, value in skills:
    line = f"{label}: {value}"
    wrapped = wrap(line, FONT_SIZE_BODY, content_w)
    ops.append(text_op(MARGIN_X, y, "F2", FONT_SIZE_BODY, f"{label}:"))
    label_w = (len(label) + 2) * AVG_CHAR[9.5] + 2
    first = value
    rest = []
    if wrapped and wrapped[0].startswith(f"{label}:"):
        first = wrapped[0][len(label) + 2 :].strip()
        rest = wrapped[1:]
    ops.append(text_op(MARGIN_X + label_w, y, "F1", FONT_SIZE_BODY, first))
    y -= LEADING
    for line in rest:
        ops.append(text_op(MARGIN_X + label_w, y, "F1", FONT_SIZE_BODY, line))
        y -= LEADING

stream = "0.82 0.83 0.85 RG 0.8 w\n" + "\n".join(ops) + "\n"
stream_bytes = stream.encode("latin-1", "replace")

objects = []


def add_obj(body: bytes) -> int:
    objects.append(body)
    return len(objects)


add_obj(
    b"<< /Type /Catalog /Pages 2 0 R >>"
)
add_obj(
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>"
)
add_obj(
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>"
)
add_obj(b"<< /Length %d >>\nstream\n" % len(stream_bytes) + stream_bytes + b"\nendstream")
add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>")

pdf = bytearray(b"%PDF-1.4\n")
offsets = [0]
for i, body in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf.extend(f"{i} 0 obj\n".encode("ascii"))
    pdf.extend(body)
    pdf.extend(b"\nendobj\n")

xref_pos = len(pdf)
pdf.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
pdf.extend(b"0000000000 65535 f \n")
for off in offsets[1:]:
    pdf.extend(f"{off:010d} 00000 n \n".encode("ascii"))
pdf.extend(
    f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode(
        "ascii"
    )
)

out = Path(__file__).resolve().parents[1] / "public" / "files" / "resume.pdf"
out.write_bytes(bytes(pdf))
print(f"wrote {out} ({out.stat().st_size} bytes)")
