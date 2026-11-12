// Liste des caractères, classés par catégorie.
// Pour en ajouter : ajoutez-les dans la chaîne "chars" (séparés par des espaces)
// ou créez une nouvelle catégorie.
const CATEGORIES = [
  {
    nom: "Ponctuation & typographie",
    chars: "… — – · • ‣ ¡ ¿ « » ‹ › “ ” ‘ ’ „ ‚ † ‡ § ¶ © ® ™ ‰ ′ ″ ※ ‽ ⁂"
  },
  {
    nom: "Flèches",
    chars: "← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ↩ ↪ ↺ ↻ ⟵ ⟶ ⟷ ➔ ➜ ➤ ▶ ◀ ▲ ▼"
  },
  {
    nom: "Mathématiques",
    chars: "± × ÷ ≠ ≈ ≡ ≤ ≥ < > ∞ √ ∛ ∑ ∏ ∫ ∂ ∆ ∇ ∈ ∉ ∩ ∪ ⊂ ⊃ ⊆ ⊇ ∀ ∃ ∄ ∅ ∧ ∨ ¬ ⊕ ⊗ ∝ ∠ ⊥ ∥ ° ′ ″ ‰ ⁄ ½ ⅓ ¼ ¾ ⅛"
  },
  {
    nom: "Exposants & indices",
    chars: "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁿ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌"
  },
  {
    nom: "Monnaies",
    chars: "€ $ £ ¥ ¢ ₣ ₹ ₽ ₩ ₪ ₺ ₿ ฿ ₫ ₴ ₦ ¤"
  },
  {
    nom: "Lettres accentuées",
    chars: "à â ä é è ê ë î ï ô ö ù û ü ÿ ç œ æ ñ ã õ å ø À Â Ä É È Ê Ë Î Ï Ô Ö Ù Û Ü Ÿ Ç Œ Æ Ñ Ã Õ Å Ø ß"
  },
  {
    nom: "Lettres grecques",
    chars: "α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω"
  },
  {
    nom: "Symboles",
    chars: "✓ ✔ ✗ ✘ ✚ ✱ ✶ ✿ ❀ ❤ ♡ ★ ☆ ☀ ☁ ☂ ☃ ☎ ☑ ☒ ☠ ☮ ☯ ☺ ☻ ♀ ♂ ♠ ♣ ♥ ♦ ♪ ♫ ♭ ♮ ♯ ⚠ ⚡ ⚙ ✈ ✉ ✂ ✎ ⌘ ⌥ ⇧ ⏎ ⌫"
  },
  {
    nom: "Formes & cadres",
    chars: "■ □ ▪ ▫ ● ○ ◆ ◇ ◉ ◌ ▬ ▭ ░ ▒ ▓ █ ▀ ▄ ─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ ═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬"
  },
  {
    nom: "Espaces & invisibles",
    chars: "\u00A0 \u202F \u2003 \u2009 \u200B"
  }
];
