import axios from "axios";

const API_KEY = "YOUR_GOOGLE_API_KEY";

// Function to fetch hospitals based on PIN code
export const fetchHospitals = async (pin) => {
  try {
    const locationRes = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${pin}&key=${API_KEY}`
    );

    if (
      locationRes.data.results &&
      locationRes.data.results[0] &&
      locationRes.data.results[0].geometry
    ) {
      const { lat, lng } = locationRes.data.results[0].geometry.location;

      const hospitalsRes = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=${API_KEY}`
      );

      const hospitals = hospitalsRes.data.results.map((hospital) => hospital.name);

      return hospitals;
    } else {
      throw new Error("Could not fetch location for the given PIN.");
    }
  } catch (error) {
    console.error("Error fetching hospitals:", error.message);
    throw new Error("Unable to fetch hospitals. Please try again.");
  }
};
