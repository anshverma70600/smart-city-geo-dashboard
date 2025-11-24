# GeoServer Workspace Setup

This file describes the steps to setup GeoServer workspace for Smart City Geo Dashboard.

## Steps:

1. Install GeoServer (https://geoserver.org/download/)  
2. Login to GeoServer admin panel (default: http://localhost:8080/geoserver)  
3. Create a new workspace: `smart_city_dashboard`  
4. Add a new store:
   - Type: PostGIS (or Shapefile for offline demo)
   - Database: `gisdb`
   - Host: localhost (or cloud DB)
   - User: postgres
   - Password: 1234
5. Publish layers (roads, live_locations, hospitals)  
6. Set SLD styles for visualization  
7. Test WMS/WFS layers in browser or frontend map
