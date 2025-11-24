-- PostGIS extension (for geospatial support)
-- Note: Online demo, won't run directly on GitHub, just for resume demonstration
CREATE EXTENSION IF NOT EXISTS postgis;

-- Table for live locations
CREATE TABLE live_locations (
    id SERIAL PRIMARY KEY,
    geom GEOMETRY(Point, 4326)
);

-- Table for hospitals
CREATE TABLE hospitals (
    id SERIAL PRIMARY KEY,
    name TEXT,
    geom GEOMETRY(Point, 4326)
);
