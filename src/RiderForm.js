import React, { useState } from 'react';
import axios from 'axios';
import './ridercss.css'; // Ensure you import the styles

function RiderForm() {
  const [rideDetails, setRideDetails] = useState({
    bike: '',
    time: '',
    destination: '',
    fare: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setRideDetails({
      ...rideDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ride-share-backend-1.onrender.com/api/rides', rideDetails);
      setRideDetails({
        bike: '',
        time: '',
        destination: '',
        fare: '',
        contactNumber: ''
      });
    } catch (error) {
      console.error('Error saving ride details', error);
      alert('Error saving ride details');
    }
  };

  return (
    <div className="rider-container">
      <div className="rider-form-container">
        <h2>Rider Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="bike">Bike:</label>
            <input type="text" name="bike" value={rideDetails.bike} onChange={handleChange} required />
          </div>
          <div className="form-field date-container">
            <label htmlFor="time">Time:</label>
            <input type="date" name="time" value={rideDetails.time} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="destination">Destination:</label>
            <input type="text" name="destination" value={rideDetails.destination} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="fare">Fare:</label>
            <input type="text" name="fare" value={rideDetails.fare} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="text" name="contactNumber" value={rideDetails.contactNumber} onChange={handleChange} required />
          </div>
          <button type="submit" className="save-button">Save</button>
          <div className="form-footer">
            <p>Share your ride details here to let others see the information easily.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RiderForm;
