// Parse CSV string into array of objects
const parseCSV = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
};

export const loadVehicles = async () => {
  try {
    // In Vite, public directory files are served at the root path
    const response = await fetch('/db.csv');
    const csvText = await response.text();
    const records = parseCSV(csvText);

    // Convert array to object with ID as key
    return records.reduce((acc, vehicle) => {
      // Parse conditions from pipe-separated string
      const conditions = vehicle.conditions.split('|');
      
      // Format numbers and add missing fields needed by components
      const formattedVehicle = {
        ...vehicle,
        conditions,
        currentBid: Number(vehicle.currentBid).toLocaleString(),
        mileage: Number(vehicle.mileage).toLocaleString(),
        // Extract year, make, model from title
        year: vehicle.title.split(' ')[0],
        model: vehicle.title.split(' ').slice(2).join(' '),
        // Add placeholder fields needed by components
        controlNumber: `QB${Math.floor(Math.random() * 90000) + 10000}`,
        vin: `${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        image: `https://via.placeholder.com/400x300.png?text=${vehicle.make}+${vehicle.conditions[0].replace(/ /g, '+')}`,
      };

      acc[vehicle.id] = formattedVehicle;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error loading vehicle data:', error);
    return {};
  }
};

export const getMakes = (vehicles) => {
  const makeCounts = Object.values(vehicles).reduce((acc, vehicle) => {
    acc[vehicle.make] = (acc[vehicle.make] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(makeCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};
