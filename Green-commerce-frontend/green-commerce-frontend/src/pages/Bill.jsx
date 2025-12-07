import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Bill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, totalPrice, date } = location.state || { items: [], totalPrice: 0, date: "" };

  const billRef = useRef();

  const downloadPDF = async () => {
    const element = billRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${new Date().getTime()}.pdf`);
  };

  if (!items || items.length === 0) {
    return (
      <div className="container mt-4">
        <h2>No Order Found</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/user/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4" style={{ backgroundColor: "#F5F5F5", borderRadius: "8px" }} ref={billRef}>
      <h2 style={{ color: "#2E7D32" }}>Invoice</h2>
      <p>Date: {date}</p>

      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: "#2E7D32", color: "white" }}>
            <th>Item</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.pricePerKg}</td>
            </tr>
          ))}
          <tr style={{ fontWeight: "bold" }}>
            <td>Total</td>
            <td>₹{totalPrice}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={downloadPDF}>
          Download PDF
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/user/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Bill;
