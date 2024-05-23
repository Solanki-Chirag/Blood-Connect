import React, { useState, useEffect, useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import "./bloodcerti.css";

function DownloadCerti() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  useEffect(() => {
    const fetchCertificateData = async () => {
      try {
        const response = await fetch("http://localhost:3500/getCertiData", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCertificateData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      ref={ref}
    >
      <div className="certificate-container" >
        {data.map((certificate, index) => (
          <div key={index} className="certificate">
            <div className="ribbon">
              <div className="ribbon-text">Certificate of Appreciation</div>
            </div>
            <div className="certificate-content">
              <h1>Blood Donation Certificate</h1>
              <p>This certificate is awarded to</p>
              <h2 className="donor-name">
                {certificate.FirstName} {certificate.LastName}
              </h2>
              <p>for their generous donation of blood at</p>
              <h2 className="hospital-name">{certificate.HospitalName}</h2>
              <p>on</p>
              <h2 className="date">{certificate.CampDate}</h2>
              <p>
                We extend our heartfelt gratitude for your selfless act of
                saving lives.
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <button type="button" className="download-button" onClick={onButtonClick}>
        Download
      </button>
    </div>
    
  );
}

export default DownloadCerti;
