# F1 Pitwall

[work-in-progress]
Web application for Formula 1 data analysis and visualization.
View archived race data, visualize live performance and race conditions, and predict qualifying and race outcomes.

## Project Structure

- `frontend`: Next.js application with Three.js for the user interface.
- `backend`: Python FastF1 application for the backend API.

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Create and activate a virtual environment:
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Run the development server:
   ```sh
   uvicorn main:app --reload
   ```
   The API will be available at [http://localhost:8000](http://localhost:8000)

### Frontend Setup

1. Navigate to the `frontend/pitwall` directory:
   ```sh
   cd frontend/pitwall
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

### Running the Full Stack

Open two terminal windows and run:

**Terminal 1 - Backend:**
```sh
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**
```sh
cd frontend/pitwall
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

### Frontend
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `uvicorn main:app --reload` - Development server with auto-reload
- `uvicorn main:app` - Production server
- `gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app` - Production with Gunicorn
