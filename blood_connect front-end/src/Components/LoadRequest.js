import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const LoadRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch donor's requests from the backend
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:3500/loadRequest", {
          method: "GET",
          credentials: "include"
        });
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        const data = await response.json();
        console.log(data); // Check the response data in the console
        setRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    
    <div className="container">
    <div className="requests-container">
      {requests.length === 0 ? (
        <p>No requests available</p>
      ) : (
        requests.map((request) => (
            <div class="p-4 sm:ml-64">
          <div key={request._id} className="request-card">
            <Card variant="outlined" sx={{ minWidth: 275, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {request.patientName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Blood Type: {request.bloodType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Hospital: {request.hospitalName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Hospital Address: {request.hospitalAddress}
                </Typography>
                <div className="action-buttons">
                  <Button variant="contained" color="success" className="accept-button">
                    Accept
                  </Button>
                  <span style={{ marginRight: 8 }}></span>
                  <Button variant="contained" color="error" className="reject-button">
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
};

export default LoadRequest;
