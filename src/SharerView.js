import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sharecss.css'; // Ensure you import the styles

function SharerView() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get('https://ride-share-backend-1.onrender.com/api/rides');
        // Sort rides by creation time in descending order
        const sortedRides = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRides(sortedRides);
      } catch (error) {
        console.error('Error fetching ride details', error);
        alert('Error fetching ride details');
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="share-container">
      <h2>Available Rides</h2>
      <div className="ride-card-container">
        {rides.map((ride, index) => (
          <div key={index} className="ride-card">
            <div className="ride-card-info">
              <div className="ride-card-row">
                <strong>Bike:</strong> {ride.bike}
              </div>
              <div className="ride-card-row time-row">
                <strong>Time:</strong> <span className="ride-time">{ride.time}</span>
              </div>
              <div className="ride-card-row">
                <strong>Destination:</strong> {ride.destination}
              </div>
              <div className="ride-card-row">
                <strong>Fare:</strong> {ride.fare}
              </div>
              <div className="ride-card-row">
                <strong>Contact Number:</strong> {ride.contactNumber}
              </div>
            </div>
            <a href={`tel:${ride.contactNumber}`} className="contact-button">
              Contact
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharerView;
