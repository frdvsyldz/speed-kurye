import React, { useState } from 'react';
import { User, MapPin, Package, Clock } from 'lucide-react';




interface CourierFormData {
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
}

const initialFormData: CourierFormData = {
  fullName: '',
  phone: '',
  email: '',
  pickupAddress: '',
  pickupDistrict: '',
  deliveryAddress: '',
  deliveryDistrict: '',
  packageType: '',
  packageWeight: '',
  packageValue: '',
  packageDescription: '',
  preferredDate: '',
  preferredTime: '',
  urgency: 'normal',
  paymentMethod: 'nakit',
  specialInstructions: ''
};

const CourierDetailForm: React.FC = () => {
  const [formData, setFormData] = useState<CourierFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async () => {
  setIsSubmitting(true);

const message = `Yeni Kurye Talebi!
👤 *İsim:* ${formData.fullName}
📞 *Telefon:* ${formData.phone}
📍 *Alış:* ${formData.pickupAddress} (${formData.pickupDistrict})
📦 *Teslim:* ${formData.deliveryAddress} (${formData.deliveryDistrict})
📦 *Paket:* ${formData.packageType}, ${formData.packageWeight}kg
💰 *Değer:* ${formData.packageValue}TL
🗓 *Tarih:* ${formData.preferredDate} ${formData.preferredTime}
⏱ *Aciliyet:* ${formData.urgency}
💳 *Ödeme:* ${formData.paymentMethod}
📝 *Not:* ${formData.specialInstructions}
✉️ *E-posta:* ${formData.email}`.trim();

  
  const url = `https://wa.me/${905378851441}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  alert("Talebiniz WhatsApp üzerinden iletilmek üzere hazırlandı.");
  setFormData(initialFormData);
  setCurrentStep(1);
  setIsSubmitting(false);
};
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.phone && formData.email;
      case 2:
        return formData.pickupAddress && formData.pickupDistrict && formData.deliveryAddress && formData.deliveryDistrict;
      case 3:
        return formData.packageType && formData.packageWeight && formData.packageDescription;
      case 4:
        return formData.preferredDate && formData.preferredTime;
      default:
        return false;
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      marginBottom: '2rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2rem'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#166534',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '1rem'
    },
    progressBar: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      position: 'relative' as const
    },
    progressStep: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      zIndex: 2,
      position: 'relative' as const
    },
    progressStepActive: {
      background: '#16a34a',
      color: 'white'
    },
    progressStepInactive: {
      background: '#e5e7eb',
      color: '#6b7280'
    },
    progressLine: {
      position: 'absolute' as const,
      top: '50%',
      left: '40px',
      right: '40px',
      height: '2px',
      background: '#e5e7eb',
      zIndex: 1,
      transform: 'translateY(-50%)'
    },
    stepContent: {
      minHeight: '400px'
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      color: '#374151',
      fontWeight: '500',
      marginBottom: '0.5rem',
      fontSize: '0.9rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box' as const
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box' as const,
      minHeight: '100px',
      resize: 'vertical' as const
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box' as const,
      background: 'white'
    },
    row: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    col: {
      flex: 1
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      marginTop: '2rem'
    },
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    buttonPrimary: {
      background: '#16a34a',
      color: 'white'
    },
    buttonSecondary: {
      background: '#f3f4f6',
      color: '#374151'
    },
    buttonDisabled: {
      background: '#e5e7eb',
      color: '#9ca3af',
      cursor: 'not-allowed'
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>
              <User size={20} />
              Kişisel Bilgiler
            </h3>
            <div style={styles.formGroup}>
              <label style={styles.label}>Ad Soyad *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Adınızı ve soyadınızı giriniz"
                style={styles.input}
              />
            </div>
            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0555 123 45 67"
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>E-posta *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ornek@email.com"
                  style={styles.input}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>
              <MapPin size={20} />
              Adres Bilgileri
            </h3>
            <div style={styles.formGroup}>
              <label style={styles.label}>Alınacak Adres *</label>
              <input
                type="text"
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleInputChange}
                placeholder="Detaylı adres bilgisi giriniz"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Alınacak İlçe *</label>
              <input
                type="text"
                name="pickupDistrict"
                value={formData.pickupDistrict}
                onChange={handleInputChange}
                placeholder="İlçe adı"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Teslim Adresi *</label>
              <input
                type="text"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                placeholder="Detaylı adres bilgisi giriniz"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Teslim İlçesi *</label>
              <input
                type="text"
                name="deliveryDistrict"
                value={formData.deliveryDistrict}
                onChange={handleInputChange}
                placeholder="İlçe adı"
                style={styles.input}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>
              <Package size={20} />
              Gönderi Bilgileri
            </h3>
            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Paket Türü *</label>
                <select
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Seçiniz</option>
                  <option value="Dokuman">Doküman</option>
                  <option value="Kargo">Kargo</option>
                  <option value="Yemek">Yemek</option>
                  <option value="Ilac">İlaç</option>
                  <option value="Diger">Diğer</option>
                </select>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Ağırlık *</label>
                <select
                  name="packageWeight"
                  value={formData.packageWeight}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Seçiniz</option>
                  <option value="0-1kg">0-1 kg</option>
                  <option value="1-5kg">1-5 kg</option>
                  <option value="5-10kg">5-10 kg</option>
                  <option value="10kg+">10 kg+</option>
                </select>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Tahmini Değer (TL)</label>
              <input
                type="number"
                name="packageValue"
                value={formData.packageValue}
                onChange={handleInputChange}
                placeholder="Paketin tahmini değeri"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Paket Açıklaması *</label>
              <textarea
                name="packageDescription"
                value={formData.packageDescription}
                onChange={handleInputChange}
                placeholder="Gönderilecek paketin içeriği hakkında bilgi veriniz"
                style={styles.textarea}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.sectionTitle}>
              <Clock size={20} />
              Zaman ve Ödeme
            </h3>
            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Tercih Edilen Tarih *</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Tercih Edilen Saat *</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Aciliyet Durumu</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Acil</option>
                  <option value="express">Express</option>
                </select>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Ödeme Yöntemi</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="nakit">Nakit</option>
                  <option value="kart">Kredi Kartı</option>
                  <option value="havale">Havale/EFT</option>
                </select>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Özel Talimatlar</label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleInputChange}
                placeholder="Kurye için özel notlar, talimatlar..."
                style={styles.textarea}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Kurye Talep Formu</h1>
          <p style={styles.subtitle}>Lütfen aşağıdaki bilgileri eksiksiz doldurunuz</p>
        </div>

        <div style={styles.progressBar}>
          <div style={styles.progressLine}></div>
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              style={{
                ...styles.progressStep,
                ...(step <= currentStep ? styles.progressStepActive : styles.progressStepInactive)
              }}
            >
              {step}
            </div>
          ))}
        </div>

        {renderStep()}

        <div style={styles.buttonGroup}>
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            style={{
              ...styles.button,
              ...(currentStep === 1 ? styles.buttonDisabled : styles.buttonSecondary)
            }}
          >
            Geri
          </button>

          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              style={{
                ...styles.button,
                ...(isStepValid() ? styles.buttonPrimary : styles.buttonDisabled)
              }}
            >
              İleri
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              style={{
                ...styles.button,
                ...(isStepValid() && !isSubmitting ? styles.buttonPrimary : styles.buttonDisabled)
              }}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Talebi Gönder'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourierDetailForm;