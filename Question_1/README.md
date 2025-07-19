# Frontend Assignment - Question 1: Item Reordering System

## Requirements
Create a JavaScript application that fetches item data from a JSON file and displays them with **active items first, followed by expired items**.

## Implementation
- Fetches data from `items.json` using JavaScript fetch API
- Sorts items: active items first, expired items last
- Visual distinction: green for active items, red for expired items
- Responsive design for all screen sizes
- Error handling for network issues

## Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- JSON data format

## Setup
1. **VS Code Live Server (Recommended):**
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   
2. **Alternative - Local Server:**
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## File Structure
```
Question_1/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic
├── style.css           # CSS styling
├── items.json          # Sample data
└── README.md           # Documentation
```

## Features
- Asynchronous data fetching
- Dynamic DOM manipulation
- Responsive mobile-friendly design
- Loading states and error handling
- Color-coded item status
