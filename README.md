# F1 Pitwall

[work-in-progress]
Web application for Formula 1 data analysis and visualization.
View archived race data, visualize live performance and race conditions, and predict qualifying and race outcomes.

## Project Structure

- `frontend`: Next.js application with Three.js for the user interface.
- `backend`: Python FastF1 application for the backend API.

## Getting Started

### Backend

1.  Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2.  Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```
3.  Run the backend server:
    ```sh
    uvicorn main:app --reload
    ```

### Frontend

1.  Navigate to the `frontend/f1-web-app` directory:
    ```sh
    cd frontend/pitwall
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Run the frontend development server:
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
