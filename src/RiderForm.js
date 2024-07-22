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
          <label>
            Bike:
            <input type="text" name="bike" value={rideDetails.bike} onChange={handleChange} required />
          </label>
          <label>
            Time:
            <input type="text" name="time" value={rideDetails.time} onChange={handleChange} required />
          </label>
          <label>
            Destination:
            <input type="text" name="destination" value={rideDetails.destination} onChange={handleChange} required />
          </label>
          <label>
            Fare:
            <input type="text" name="fare" value={rideDetails.fare} onChange={handleChange} required />
          </label>
          <label>
            Contact Number:
            <input type="text" name="contactNumber" value={rideDetails.contactNumber} onChange={handleChange} required />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default RiderForm;
