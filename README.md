# YDI Card

> Things are shared. Architecture is personal.

YDI Card is a small, open Card Library for describing the things that can compose a digital home.

A **Card** describes **what a thing is** using general, reusable information.

A **Deck** describes **why that Card is here** in a particular home or system. Decks are intentionally outside this repository for now.

## Model

- **Card** — general information about a thing.
- **Attribute** — a classification rule for Cards.
- **Deck** — environment-specific responsibility, rationale, constraints, and relationships.

YDI Card begins deliberately small. The first Card is **F5748Q**, classified with the **Network** Attribute.

## Repository

```text
data/
  cards.csv
  attributes.csv

docs/
  Card_Design.md

index.html
style.css
app.js
```

The CSV files are the source data. The static Viewer reads them directly.

The current Card visual and interaction direction is documented in [Card Design v0.1](docs/Card_Design.md). The live Viewer is still the earlier v0.0 prototype; the design document intentionally comes before implementation.

## Philosophy

This project grows from real Cards rather than a complete schema designed in advance.

When a new Card exposes a limitation, the model can evolve.

**Grow, don't over-abstract.**

## Origin

YDI Card was born from the private YDI (Yaegashi Digital Infrastructure) architecture project. The public Card Library is separated from household-specific architecture so that Cards can be shared, forked, corrected, and reused independently.

## Status

Experimental — v0.0 Viewer / v0.1 Card design direction.
