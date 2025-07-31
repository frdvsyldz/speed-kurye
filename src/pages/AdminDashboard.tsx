import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface CourierFormData {
  id: number;
  created_at: string;
  details: {
    fullName: string;
    phone: string;
    email: string;
    pickupAddress: string;
    pickupDistrict: string;
    deliveryAddress: string;
    deliveryDistrict: string;
    packageType: string;
    packageWeight: string;
    packageValue: string;
    packageDescription: string;
    preferredDate: string;
    preferredTime: string;
    urgency: string;
    paymentMethod: string;
    specialInstructions: string;
  };
}

const AdminDashboard: React.FC = () => {
  const [requests, setRequests] = useState<CourierFormData[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from("courier_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Veri alınamadı:", error.message);
      } else {
        setRequests(data || []);
      }
    };

    fetchRequests();
  }, []);


  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("courier_requests")
      .delete()
      .eq("id", id);

    if (!error) {
      setRequests(prev => prev.filter(item => item.id !== id));
      setExpandedIndex(null);
    }
  };
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Gelen Kurye Talepleri</h2>
      {requests.length === 0 ? (
        <p>Henüz kayıtlı talep yok.</p>
      ) : (
        requests.map((req, index) => (
          <div
            key={req.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginBottom: "1rem",
              padding: "1rem",
              backgroundColor: "#f9fafb",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{req.details.fullName}</strong> — {req.details.phone}<br />
                <small>{new Date(req.created_at).toLocaleString()}</small>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}>
                  {expandedIndex === index ? "Kapat" : "Detay"}
                </button>
                <button onClick={() => handleDelete(req.id)}>Sil</button>
              </div>
            </div>

            {expandedIndex === index && (
              <div style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
                <p><strong>Alış Adresi:</strong> {req.details.pickupAddress} ({req.details.pickupDistrict})</p>
                <p><strong>Teslim Adresi:</strong> {req.details.deliveryAddress} ({req.details.deliveryDistrict})</p>
                <p><strong>Paket Tipi:</strong> {req.details.packageType}</p>
                <p><strong>Ağırlık:</strong> {req.details.packageWeight}</p>
                <p><strong>Değer:</strong> {req.details.packageValue}</p>
                <p><strong>Açıklama:</strong> {req.details.packageDescription}</p>
                <p><strong>Tercih Edilen Tarih:</strong> {req.details.preferredDate}</p>
                <p><strong>Saat:</strong> {req.details.preferredTime}</p>
                <p><strong>Ödeme:</strong> {req.details.paymentMethod}</p>
                <p><strong>Aciliyet:</strong> {req.details.urgency}</p>
                <p><strong>Özel Not:</strong> {req.details.specialInstructions}</p>
                <p><strong>E-posta:</strong> {req.details.email}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
