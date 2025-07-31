import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const districts = [

  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece",
  "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa",
  "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik",
  "Sancaktepe", "Sarıyer", "Şile", "Şişli", "Sultanbeyli", "Sultangazi", "Tuzla", "Ümraniye",
  "Üsküdar", "Zeytinburnu",

  "Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük",
  "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez",

  "Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey",
  "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi",
  "Osmangazi", "Yenişehir", "Yıldırım",

  "Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara",
  "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy",

  "Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Merkez", "Termal",

  "İzmit", "Gebze", "Darıca", "Çayırova", "Derince", "Körfez", "Kartepe", "Gölcük", "Başiskele", "Kandıra", "Dilovası", "Karamürsel",
  "Selçuklu", "Karatay", "Meram", "Beyşehir", "Akşehir", "Ereğli", "Seydişehir", "Ilgın", "Cihanbeyli", "Kadınhanı", "Kulu", "Yunak", "Çumra", "Bozkır",

  "Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Malkara", "Saray", "Muratlı", "Hayrabolu", "Ergene", "Marmaraereğlisi", "Şarköy",

  "Bornova", "Konak", "Karşıyaka", "Bayraklı", "Buca", "Çiğli", "Gaziemir", "Balçova", "Karabağlar", "Menemen", "Tire", "Torbalı", "Aliağa", "Foça", "Seferihisar", "Selçuk", "Menderes", "Urla", "Kemalpaşa", "Bergama", "Dikili", "Çeşme", "Ödemiş", "Kınık", "Kiraz", "Beydağ", "Bayındır", "Güzelbahçe", "Narlıdere",

  "Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Sincan", "Altındağ", "Etimesgut", "Gölbaşı", "Pursaklar", "Kahramankazan", "Elmadağ", "Beypazarı", "Polatlı", "Haymana", "Ayaş", "Nallıhan", "Akyurt", "Çubuk", "Şereflikoçhisar", "Evren"

];

const OrderForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<string[]>([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);

  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPickup(value);

    if (value.length > 0) {
      const filtered = districts.filter((d) =>
        d.toLowerCase().includes(value.toLowerCase())
      );
      setPickupSuggestions(filtered);
      setShowPickupSuggestions(true);
    } else {
      setShowPickupSuggestions(false);
    }
  };

  const handleDropoffChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDropoff(value);

    if (value.length > 0) {
      const filtered = districts.filter((d) =>
        d.toLowerCase().includes(value.toLowerCase())
      );
      setDropoffSuggestions(filtered);
      setShowDropoffSuggestions(true);
    } else {
      setShowDropoffSuggestions(false);
    }
  };

  const selectPickup = (district: string) => {
    setPickup(district);
    setShowPickupSuggestions(false);
  };

  const selectDropoff = (district: string) => {
    setDropoff(district);
    setShowDropoffSuggestions(false);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (pickup && dropoff) {
      navigate('/kurye-talep-formu'); // yönlendir
    } else {
      alert('Lütfen tüm alanları doldurun!');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      width: '100%',
      maxWidth: '28rem',
      position: 'relative' as const
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#166534',
      textAlign: 'center' as const,
      marginBottom: '2rem',
      marginTop: '0'
    },
    formGroup: {
      position: 'relative' as const,
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      color: '#15803d',
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
    inputFocus: {
      boxShadow: '0 0 0 2px #22c55e',
      borderColor: 'transparent'
    },
    suggestions: {
      position: 'absolute' as const,
      top: '100%',
      left: '0',
      right: '0',
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      maxHeight: '12rem',
      overflowY: 'auto' as const,
      zIndex: 10,
      marginTop: '0.25rem',
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    suggestionItem: {
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      borderBottom: '1px solid #f3f4f6',
      transition: 'background-color 0.15s ease'
    },
    suggestionItemHover: {
      backgroundColor: '#f0fdf4'
    },
    submitBtn: {
      width: '100%',
      background: '#16a34a',
      color: 'white',
      fontWeight: 'bold',
      padding: '1rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    infoNote: {
      marginTop: '1.5rem',
      padding: '0.75rem',
      background: '#f0fdf4',
      borderRadius: '0.5rem',
      border: '1px solid #bbf7d0',
      fontSize: '0.875rem',
      color: '#15803d',
      textAlign: 'center' as const
    }
  };

  return (

    <div style={styles.container}>
      {(showPickupSuggestions || showDropoffSuggestions) && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: "none"
          }}
          onClick={() => {
            setShowPickupSuggestions(false);
            setShowDropoffSuggestions(false);
          }}
        />
      )}
      <div style={styles.formCard}>
        <h2 style={styles.title}>
          Kurye Talep Formu
        </h2>

        <div>
          <div style={styles.formGroup}>
            <label htmlFor="pickup" style={styles.label}>
              Alınacak Semt
            </label>
            <input
              id="pickup"
              type="text"
              value={pickup}
              onChange={handlePickupChange}
              onFocus={() => pickup.length > 0 && setShowPickupSuggestions(true)}
              placeholder="Semt adı giriniz"
              style={styles.input}
            />
            {showPickupSuggestions && pickupSuggestions.length > 0 && (
              <ul style={styles.suggestions}>
                {pickupSuggestions.slice(0, 8).map((item, index) => (
                  <li
                    key={index}
                    onMouseDown={() => selectPickup(item)}   // 🔁 onClick yerine onMouseDown
                    style={styles.suggestionItem}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="dropoff" style={styles.label}>
              Teslim Edilecek Semt
            </label>
            <input
              id="dropoff"
              type="text"
              value={dropoff}
              onChange={handleDropoffChange}
              onFocus={() => dropoff.length > 0 && setShowDropoffSuggestions(true)}
              placeholder="Semt adı giriniz"
              style={styles.input}
            />
            {showDropoffSuggestions && dropoffSuggestions.length > 0 && (
              <ul style={styles.suggestions}>
                {dropoffSuggestions.slice(0, 8).map((item, index) => (
                  <li
                    key={index}
                    onMouseDown={() => selectDropoff(item)}  // 🔁 onClick yerine onMouseDown
                    style={styles.suggestionItem}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={handleSubmit}
            style={styles.submitBtn}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#15803d';
              (e.target as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#16a34a';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Kurye Çağır
          </button>
        </div>

        <div style={styles.infoNote}>
          Speed Kurye Olarak 81 İlde Şehirlerarası Kurye Hizmeti Sunuyor, Gönderilerinizi Zamanında ve Güvenle Teslim Ediyoruz.
        </div>
      </div>


    </div>
  );
};

export default OrderForm;