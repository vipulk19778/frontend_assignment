# Frontend Assignment - Question 3: CSS Centering Techniques

## Requirements

Create a CSS layout demonstrating **multiple centering techniques** with a red square container centered on the page and a white square centered inside it.

## Implementation

- Red square (95% width/height, max 400px) centered on page
- White square (50% of red container) centered inside red square
- Both squares have 8px border-radius
- Gray background (#ddd) for the page
- Responsive design maintaining centering at all screen sizes

## Centering Methods

### Method 1: Flexbox (Active)

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Method 2: CSS Grid (Alternative)

```css
body {
  display: grid;
  place-items: center;
}
```

### Method 3: Absolute Positioning (Alternative)

```css
#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Technology Stack

- HTML5
- CSS3 (Flexbox, Grid, Positioning)
- Responsive design with viewport units

## Setup

1. Open `index.html` directly in any web browser
2. No server setup required (pure HTML/CSS)

## File Structure

```
Question_3/
├── index.html          # HTML structure
├── style.css           # CSS with centering techniques
└── README.md           # Documentation
```

## Features

- Three different centering techniques implemented
- Perfect horizontal and vertical centering
- Responsive design for all screen sizes
- Clean, minimal code structure
- Cross-browser compatibility
