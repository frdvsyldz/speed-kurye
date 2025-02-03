import React, { useState } from "react";
import "./BilimselProgram.css"
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";

const BilimselProgram: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("4 Nisan 2025, Cuma");

  const programData: { [key: string]: { time: string; topic: string; break: Boolean}[] } = {
    "4 Nisan 2025, Cuma": [
      {time: "16:20-16:40", topic: "Ankilozan Spondilit Patogenez", break: false},
      {
        time: "16:40-17:00", topic: "Ankilozan Spondilit Klinik Özellikleri",
        break: false
      },
      { time: "17:00-17:15", topic: "ARA" , break: true},
      {
        time: "17:15-17:40", topic: "Ankilozan Spondilit Tanısında MR Görüntüleme",
        break: false
      },
      {
        time: "17.40-18:00", topic: "Ankilozan Spondilit Tanısında Ultrasonografinin Yeri",
        break: false
      },
      { time: "18:00", topic: "Akşam Yemeği", break: true },
    ],
    "5 Nisan 2025, Cumartesi": [
      {
        time: "09:00-09:25", topic: "Ankilozan Spondilitte Tedavi",
        break: false
      },
      {
        time: "09:25-09:50", topic: "Ankilozan Spondilit ve Gastrointestinal Sistem Tutulumu",
        break: false
      },
      {
        time: "09:50-10:15", topic: "Ankilozan Spondilit ve Göz Tutulumu",
        break: false
      },
      { time: "10:15-10:30", topic: "ARA", break: true },
      {
        time: "10:35-11.00", topic: "Ankilozan Spondilittte Rehabilitasyon İlkeleri",
        break: false
      },
      {
        time: "11:00-11:20", topic: "Ankilozan Spondilitte Cerrahi Tedavinin Yeri",
        break: false
      },
      { time: "11:20-11.35", topic: "ARA",break: true },
      {
        time: "11:35-12:00", topic: "Ülseratif Kolit Tanısı ve Tedavi İlkeleri",
        break: false
      },
      {
        time: "12:00-12:20", topic: "Chron Hastalığı Tanısı ve Tedavi İlkeleri",
        break: false
      },
      { time: "12:20-13:30", topic: "ÖĞLEN YEMEĞİ", break: true },
      {
        time: "13:30-13:50", topic: "Psöriyazis Patogenez",
        break: false
      },
      {
        time: "13:50-14:15", topic: "Psöriyazis Tanı –Tedavi",
        break: false
      },
      {
        time: "14:15-15:40", topic: "Psöriyatik Artrit Tanı-Tedavi",
        break: false
      },
      { time: "15:40-16:00", topic: "ARA", break: true },
      {
        time: "16:00-16:20", topic: "Behçet Hastalığı Patogenez",
        break: false
      },
      {
        time: "16:20-16:40", topic: "Behçet Hastalığı’nda Klinik ve Tedavi",
        break: false
      },
      {
        time: "16:40-17:00", topic: "Behçet Hastalığı’nda Cilt Tutulumu Tanı-Tedavi",
        break: false
      },
    ],
    "6 Nisan 2025, Pazar": [
      {
        time: "09:00-09:25", topic: "Behçet Hastalığı’nda Vasküler Tutulum ve Görüntüleme",
        break: false
      },
      {
        time: "09:25-09:50", topic: "Behçet Hastalığı’nda Nörolojik Tutulum ve Tedavisi",
        break: false
      },
      {
        time: "09:50-10:15", topic: "Behçet Hastalığında Göz Tutulumu ve Tedavi İlkeleri",
        break: false
      },
      { time: "10:15-10:35", topic: "ARA", break: true },
      {
        time: "10:35-10:45", topic: "Behçet Hastalığı’nda Gastrointestinal Sistem Tutulumu ve Tedavisi",
        break: false
      },
      {
        time: "10:45-11:00", topic: "Behçet Hastalığı’nda Cerrahi Tedavinin Yeri",
        break: false
      },
    ],
  };

  return (
    <><div className="body-program">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="scientific-program  ">
        <h1>BİLİMSEL PROGRAM</h1>
        <div className="day-selector">
          {Object.keys(programData).map((day) => (
            <button
              key={day}
              className={selectedDay === day ? "active" : ""}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="program-details">
          {programData[selectedDay].map((item, index) => (
            <div
              key={index}
              className={`program-item ${item.break ? "break" : ""}`}
            >
              <span className="time">{item.time}</span>
              <span className="topic">{item.topic}</span>
            </div>
          ))}
        </div>
      </div>

    </div><Footer /></>
  );
};

export default BilimselProgram;