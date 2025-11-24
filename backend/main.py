from fastapi import FastAPI
import json

app = FastAPI()

# Temporary in-memory data (we'll replace with PostGIS later if needed)
live_locations = [
    {
        "id": 1,
        "geometry": {
            "type": "Point",
            "coordinates": [77.2090, 28.6139]  # New Delhi sample location
        }
    }
]

@app.get("/")
def home():
    return {"message": "Smart City Geo Dashboard API is running!"}

@app.get("/locations/live")
def get_live_locations():
    return live_locations

@app.get("/nearest-hospital")
def nearest_hospital():
    return {"hospital": "AIIMS Hospital", "distance_meters": 1200}
