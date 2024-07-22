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
        <h2>Rider Details</h2>
        <p className="form-description">
          Provide your ride details here. This information will help others easily find and connect with you for a smooth ride experience.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>
              Bike:
              <input type="text" name="bike" value={rideDetails.bike} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-field">
            <label>
              Time:
              <input type="datetime-local" name="time" value={rideDetails.time} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-field">
            <label>
              Destination:
              <input type="text" name="destination" value={rideDetails.destination} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-field">
            <label>
              Fare:
              <input type="text" name="fare" value={rideDetails.fare} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-field">
            <label>
              Contact Number:
              <input type="text" name="contactNumber" value={rideDetails.contactNumber} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default RiderForm;
