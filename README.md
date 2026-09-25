🌤️ Weather React App

A responsive weather application built with React that allows users to search for a location and view its current weather information.

🚀 Live Demo

https://weather-react-app-rj31.onrender.com/

✨ Features

- 🔍 Search weather by location name
- 🌡️ Displays current temperature
- 🌤️ Shows weather condition
- 💧 Displays humidity
- 💨 Shows wind speed
- 📍 Supports location-based weather information
- 📱 Responsive design for different screen sizes
- 🎨 Material UI components for a modern interface
- ⚡ Fast development and production build using Vite

🛠️ Tech Stack

- React
- JavaScript
- Vite
- Material UI (MUI)
- OpenWeather API
- CSS
- HTML

📂 Project Structure

Weather_React_App/
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/Muskan-Garg19/Weather_React_App.git

2. Navigate to the project

cd Weather_React_App

3. Install dependencies

npm install

4. Configure environment variables

Create a ".env" file in the root directory and add the required API configuration.

VITE_API_URL=your_api_url
VITE_API_KEY=your_api_key

Keep your API key private and do not commit the ".env" file to GitHub.

5. Run the application

npm run dev

The application will run on the local development server provided by Vite.

📦 Production Build

To create a production build:

npm run build

The generated files will be available in the "dist" folder.

🌐 Deployment

The application is deployed using Render.

Live application:

https://weather-react-app-rj31.onrender.com/

🔐 Environment Variables

This project uses environment variables for API configuration.

Make sure ".env" is included in ".gitignore" so that API credentials are not uploaded to GitHub.

👩‍💻 Author

Muskan Garg

GitHub: https://github.com/Muskan-Garg19

📄 License

This project is created for learning purposes.
