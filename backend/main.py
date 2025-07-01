from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import fastf1
import pandas as pd
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Get the port from the environment variable, default to 8000 if not set
PORT = int(os.environ.get("PORT", 8000))

# Define cache directory path
cache_dir = os.path.join(os.path.dirname(__file__), "cache")

# Create cache directory if it doesn't exist
if not os.path.exists(cache_dir):
    os.makedirs(cache_dir)

# Configure fastf1 cache
fastf1.Cache.enable_cache(cache_dir)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/latest-race")
def get_latest_race():
    try:
        # Get the latest race session
        # Using a specific race for now, e.g., 2024 Italian Grand Prix (Monza)
        session = fastf1.get_session(2024, "Monza", "R")
        session.load()
        results = session.results

        # Convert the results to a list of dictionaries
        results_list = []
        for _, row in results.iterrows():
            results_list.append({
                "position": row["Position"],
                "driver": row["Abbreviation"],
                "team": row["TeamName"],
                "time": str(row["Time"]),
                "status": row["Status"],
                "points": row["Points"],
            })

        return {"results": results_list}
    except Exception as e:
        return {"error": str(e), "message": "Failed to fetch race data. Ensure you have an internet connection and the fastf1 cache is working correctly."}