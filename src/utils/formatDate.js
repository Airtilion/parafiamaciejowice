export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
  
    const months = [
      'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
      'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
    ];
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Zwrócenie sformatowanej daty
    return `${hours}:${minutes}, ${day} ${month} ${year}`;
  }

  export function formatDateG(data) {
    // Tworzenie obiektu daty z podanego ciągu
    const date = new Date(data);
    
    // Sprawdzenie, czy data jest poprawna
    if (isNaN(date.getTime())) {
        return 'Niepoprawna data';
    }
    
    // Tablica z polskimi nazwami miesięcy
    const miesiace = [
        'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
        'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
    ];
    
    // Pobranie dnia, miesiąca i roku
    const dzien = date.getDate();
    const miesiac = miesiace[date.getMonth()];
    const rok = date.getFullYear();
    
    // Zwrócenie sformatowanej daty
    return `${dzien} ${miesiac} ${rok} r.`;
}