# AI Conclave '26

This repository contains the source code for the AI Conclave '26 website. It is built using React and Vite, featuring a responsive design and various sections to showcase event details, speakers, schedule, and more.

## Technologies Used
- **React**: Frontend UI library for building the components.
- **Vite**: Next-generation frontend tooling for fast development and building.
- **CSS**: Custom styling for components and sections.

## Project Structure

The project is structured into several key directories within the `src` folder:
- **`components/`**: Reusable UI components such as `Navbar`, `Footer`, `Hero`, `Countdown`, `Marquee`, `SectionHeading`, etc.
- **`sections/`**: Main page sections including `About`, `Events`, `Jury`, `Posters`, `Schedule`, and `Venue`.
- **`data/`**: Contains `content.js` which likely holds the structured data used across the application.
- **Assets**: Various images and posters are included in the components directory.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aiconclave26
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or the port specified by Vite).

### Building for Production

To create a production build:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory, ready for deployment.
