# Golf Handicap Tracker

A React application for tracking golf handicaps and player scores.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Application
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## 🎨 Design Guidelines

To maintain a cohesive and user-friendly design across the application, please follow these guidelines when making UI changes:

### ✳️ Framework & Styling
- **Use Tailwind CSS** for all styling.
- Avoid inline styles or external CSS files unless absolutely necessary.

### 🧠 User Experience
- Prioritize **clarity**, **simplicity**, and **intuitive interactions**.
- Design for responsiveness and accessibility (e.g. use semantic HTML and appropriate contrast).
- Prefer UI patterns that are familiar and minimize user learning curve.
- Ensure form fields, buttons, and interactive components are clearly styled and easy to use.

### 🎨 Color Palette
Use only the following colors in the UI:

| Color Name | HEX Code | Example Usage |
|------------|----------|----------------|
| Yellow     | `#FCF400` | Highlights, accents, call-to-action elements |
| Green      | `#005E23` | Buttons, success states, headers |
| Red        | `#ED0030` | Errors, alerts, destructive actions |
| White      | `#FFFFFF` | Backgrounds, text |
| Gray       | `#AEB4A9` | Borders, placeholders, secondary text |

### 🧪 Component Style Notes
- Use **rounded corners**, **soft shadows**, and **ample spacing** for a modern, clean aesthetic.
- Default to `rounded-2xl`, `shadow-md`, and `p-4` where appropriate.
- Prefer `text-base`, `text-lg`, and `text-xl` for clarity and hierarchy.
- Use Tailwind's utility classes to ensure consistency and speed up development.

## 🛠️ Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

### Responsive Form Component Example

```html
<div class="max-w-md mx-auto p-4">
  <form class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
    <input type="text" placeholder="First Name" class="flex-1 p-2 border rounded" />
    <input type="text" placeholder="Last Name" class="flex-1 p-2 border rounded" />
    <button type="submit" class="p-2 bg-blue-500 text-white rounded">Submit</button>
  </form>
</div>
```
