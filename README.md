# YDI Card

> Things are shared. Architecture is personal.

YDI Card is a small, open library of reusable knowledge about the things that can compose a digital home.

A **Card** describes **what a thing is** using general, reusable information.

An **Instance** identifies a specific real-world thing. Instance data is private by default and lives outside this public repository.

A **Deck** composes Cards for a purpose. A Deck may be shared; private Instance bindings do not need to be part of its public representation.

## Model

- **Card** — shared knowledge / building block.
- **Attribute** — a classification rule for Cards.
- **Instance** — a private identification of a specific real-world thing.
- **Deck** — an architecture composed from Cards, optionally bound to Instances in private contexts.

現在の3枚は、意図的に異なる性質の対象を扱う。

- **#0001 F5748Q** — 具体的な製品モデル。Attributeは **Network**。
- **#0002 Custom Domain** — 抽象的なデジタル資源。Attributeは暫定的に **Naming**。
- **#0003 IPv6** — 標準化されたネットワークプロトコル。Attributeは **Network**。

## Repository

```text
data/
  attributes.json
  cards/
    index.json
    f5748q.json
    custom-domain.json

docs/
  Card_Design.md

index.html
style.css
app.js
```

Structured Card data is the canonical source. The Viewer is only one presentation of that data.

The data model should not depend on a particular presentation. The same data may later feed a Card Viewer, list/table view, house view, encyclopedia, guidebook, API, or another application.

## Data direction

Card files currently keep only a small shared core and add knowledge that is meaningful for the thing being described.

Typical shared fields:

```text
id
number
name
attribute
type
summary
```

Thing-specific knowledge is allowed to differ. For example, a product may have a manufacturer and capabilities, while a Custom Domain may instead have uses and DNS-related facts.

Presentation concepts such as front, back, flip animation, and layout are intentionally not part of the canonical data model.

**Data knows meaning. Apps know presentation.**

## Philosophy

This project grows from real Cards rather than a complete schema designed in advance.

When a new Card exposes a limitation, the model can evolve.

**Grow, don't over-abstract.**

## Origin

YDI Card was born from the private YDI (Yaegashi Digital Infrastructure) architecture project. The public Card Library is separated from household-specific architecture so that Cards can be shared, forked, corrected, and reused independently.

## Status

Experimental — structured data v0.1 / Card design v0.1. The live Viewer remains intentionally simple while the data model evolves.
