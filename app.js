// Initialize map
var map = L.map('map').setView([28.6139, 77.2090], 12);

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Static demo markers
var demoLocations = [
    {id: 1, name: "Live Location 1", coords: [28.6139, 77.2090]},
    {id: 2, name: "Live Location 2", coords: [28.6200, 77.2100]},
    {id: 3, name: "Hospital AIIMS", coords: [28.5672, 77.2100]}
];

// Add markers to map
demoLocations.forEach(d => {
    L.marker(d.coords).addTo(map)
     .bindPopup(`<b>${d.name}</b><br>ID: ${d.id}`);
});
