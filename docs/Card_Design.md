# YDI Card Design v0.1

- Date: 2026-09-21
- Status: Design direction
- Scope: Visual and interaction language for Cards
- Implementation: Not yet reflected in the v0.0 Viewer

## Intent

YDI Card should feel like a **collectible card**, not a business database rendered as a rectangle.

The Card must remain useful as structured information, but the first reaction should be curiosity: something worth looking at, flipping over, collecting, and sharing.

The design is intended to work both on the Web and, eventually, as a physical printed card.

## Relationship to YDI

YDI Card is the first public product derived from YDI.

It should inherit YDI's design DNA without copying the parent mark directly.

Current shared design language:

- monochrome must work as the base form
- geometric structure and organic curves can coexist
- negative space is part of the design
- hidden structure is welcome; not every meaning needs to be explained
- gradients are not required for the identity
- product identities may differ from YDI while retaining a small amount of shared DNA

The YDI Card product identity is paired with:

> **A product of YDI**

The parent YDI mark can accompany this phrase to show origin without making the product logo a copy of the parent logo.

The selected logo concepts still need to be redrawn as production SVG assets before implementation.

## Front: feel the Card

The front is primarily an **art surface**.

Common information should be intentionally small in number:

- YDI Card identity
- Card number
- Attribute
- Artwork
- Card name / model
- Type
- Manufacturer

The Artwork should occupy most of the front.

### Artwork

Artwork style is deliberately **not standardized**.

Different Cards may use technical illustration, painting, pixel art, printmaking, photography-derived illustration, or another style. The common Card frame provides continuity; the artwork provides personality.

For a real product, creative style is free but factual identity is not.

Before creating Artwork:

1. Confirm the real product's appearance from reliable references.
2. Prefer official manufacturer or provider material when available.
3. Manuals can help confirm shape and details, but monochrome manual illustrations are not reliable evidence of color.
4. Use source images as factual references, not as artwork to reproduce directly.
5. If readable dimensions, labels, or other factual values appear inside Artwork, verify them. Otherwise keep such marks clearly illustrative.

Do not add invented advertising copy or decorative pseudo-explanations merely to fill space.

## Back: understand the Card

The back is a **Tech Spec Card**, but not a dense specification sheet.

Its job is to explain what the Card is capable of and how it relates to a system.

The current visual grammar has three primary blocks:

### System Diagram

The main element on the back.

Show what the Card receives, connects to, or provides. Prefer a clear abstract node over repeating the front Artwork.

For F5748Q, the conceptual pattern is:

```text
Internet
   |
XGS-PON
   |
F5748Q
   |-- 10GbE
   |-- Wi-Fi
   |-- TEL
   `-- IPTV
```

The diagram is about **how it connects**, not another product illustration.

### Capabilities

Show capabilities as large, readable glyph + label pairs.

Examples for the first Card may include items such as XGS-PON, 10GbE, Wi-Fi, VoIP, IPv6, and Router, but every published capability must be verified before implementation.

Avoid arbitrary ratings such as "Speed 9/10". A Card should describe capabilities, not invent a score.

Explanatory prose should be omitted when the label already communicates the capability.

### Specifications

A quiet factual table containing only useful identifying or distinguishing specifications.

The set of fields may vary by Card type. A network gateway, air conditioner, battery, sensor, and house do not need identical specification fields.

All factual values must be checked against reliable sources before publication.

### QR and Artwork credit

Keep Card metadata visually minimal.

The current direction is:

- QR code linking to the Web Card
- Artwork credit

Do not repeat Card number, Attribute, model, manufacturer, and other information here merely because space exists.

## Information hierarchy

The back should remain readable at physical-card scale and on a phone.

Current hierarchy:

1. System Diagram
2. Capabilities
3. Specifications
4. QR / Artwork credit

If text must become tiny to make everything fit, the Card contains too much information.

Information already prominent on the front does not need to be prominent again on the back. Necessary repetition inside a diagram or specification table is acceptable when it serves a different function.

## A grammar, not a rigid template

System Diagram, Capabilities, and Specifications are a design language, not mandatory boxes.

A Card may omit a block when it adds no value, or change the relative space given to each block.

The goal is consistency without turning YDI Card into a database report.

## Attribute Glyphs

The Network Glyph is intentionally **not finalized yet**.

Attribute Glyphs should be designed as a family after enough real Attributes exist to evaluate them together.

Constraints already identified:

- do not rely on emoji
- do not use color as the primary attribute classifier
- remain recognizable at small sizes
- share a coherent visual language
- avoid making one early Attribute define the whole system

Until then, the Viewer may use a provisional glyph or text label.

## Web implementation

The Card itself should be HTML/CSS rather than a pre-rendered card image.

The intended separation is:

```text
Structured Data = facts
Artwork         = image asset
HTML/CSS        = Card
SVG             = diagrams / glyphs / logos
PNG/PDF         = output
```

This keeps facts searchable and correctable, allows responsive rendering, and makes a real front/back flip interaction possible.

A future print stylesheet or export process can produce physical-card or social-media output from the same source.

## Future playground

Ideas worth preserving without making them v0.1 requirements:

- physical printed Cards
- multiple Artwork variants for the same Card
- Card comparison
- Deck building
- shared / forked Card Libraries
- placing Cards on a house floor plan and opening the corresponding Card from the map

The floor-plan idea belongs to a future Deck / house-context experience rather than to general Card facts.

## First Card

Card #0001 remains **F5748Q** with the **Network** Attribute.

Before implementing its final front/back design, verify all product facts from reliable primary or provider sources. Image-generation mockups are design references only and must not be treated as factual source material.

## Principle

**Front: feel it. Back: understand it.**

The Card should invite exploration before it asks to be read.
