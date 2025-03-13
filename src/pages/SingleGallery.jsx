import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import TitleCard from "../components/TitleCard";
import FixedBg from "../components/FixedBg";
import ImageBrowserDialog from "../components/gallery/ImageBrowserDialog";

const SingleGallery = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]); // Wszystkie zdjęcia z API
  const [displayedPhotos, setDisplayedPhotos] = useState([]); // Obecnie wyświetlane zdjęcia
  const [columns, setColumns] = useState(3);
  const [coords, setCoords] = useState([]);
  const [siteHeight, setSiteHeight] = useState(0);
  const resizeTimeout = useRef(null);
  const [activePhoto, setActivePhoto] = useState("");
  const imageBrowser = useRef(null);
  const observerTarget = useRef(null); // Ref dla elementu obserwowanego przez IntersectionObserver
  const photosPerPage = 16; // Liczba zdjęć na stronę

  // Pobranie albumu
  const getAlbum = async () => {
    try {
      const response = await fetch(
        `https://parafiamaciejowice.pl/wp-json/custom/v1/folder-images/?folder_name=${id}`
      );

      if (!response.ok) {
        throw new Error("Nie udało się pobrać albumów");
      }

      const data = await response.json();
      setPhotos(data);
      setDisplayedPhotos(data.slice(0, photosPerPage)); // Ładuj początkowe 16 zdjęć
    } catch (err) {
      console.error(err);
    }
  };

  // Otwieranie przeglądarki zdjęć
  const openImageBrowser = (photoID) => {
    setActivePhoto(photoID);
    imageBrowser.current.showModal();
  };

  // Ustalenie liczby kolumn na podstawie szerokości okna
  const calculateColumns = () => {
    const width = window.innerWidth;
    if (width >= 1536) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    else return 1;
  };

  // Obliczanie pozycji zdjęć w układzie masonry
  const calculateMasonryLayout = useCallback(() => {
    if (displayedPhotos.length === 0) return;

    const newColumns = calculateColumns();
    setColumns(newColumns);

    let columnHeights = new Array(newColumns).fill(0);
    let newCoords = displayedPhotos.map((photo) => {
      const column = columnHeights.indexOf(Math.min(...columnHeights));
      const imgWidth = 290; // Stała szerokość zdjęć
      const imgHeight = (photo.height * imgWidth) / photo.width + 10; // Zachowanie proporcji + margines

      const x = column * (imgWidth + 10); // Odstęp 10px między kolumnami
      const y = columnHeights[column];

      columnHeights[column] += imgHeight;
      return { x, y };
    });

    setSiteHeight(Math.max(...columnHeights));
    setCoords(newCoords);
  }, [displayedPhotos]);

  // Funkcja ładująca kolejne zdjęcia
  const loadMorePhotos = useCallback(() => {
    const currentLength = displayedPhotos.length;
    const nextPhotos = photos.slice(currentLength, currentLength + photosPerPage);
    setDisplayedPhotos((prev) => [...prev, ...nextPhotos]);
  }, [displayedPhotos, photos]);

  // Obsługa IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && displayedPhotos.length < photos.length) {
          loadMorePhotos();
        }
      },
      { root: null, rootMargin: "100px", threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [displayedPhotos, photos, loadMorePhotos]);

  // Obliczanie układu masonry przy zmianie liczby zdjęć lub kolumn
  useEffect(() => {
    calculateMasonryLayout();
  }, [displayedPhotos, calculateMasonryLayout]);

  // Obsługa zmiany rozmiaru okna
  const handleResize = () => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      setColumns(calculateColumns());
      calculateMasonryLayout(); // Ponowne obliczanie układu przy resize
    }, 500);
  };

  useEffect(() => {
    getAlbum();
    setColumns(calculateColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  return (
    <>
      <TitleCard title="Galeria" />
      <section
        className="w-[1190px] mx-auto relative mb-[64px] max-2xl:w-[890px] max-lg:w-[590px] max-md:w-[90%] max-md:flex max-md:flex-col max-md:items-center max-md:gap-[8px] overflow-hidden"
        style={{ height: columns > 1 ? siteHeight : "auto" }}
      >
        {displayedPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.link}
            alt="Zdjęcie z albumu"
            loading="lazy"
            width={290}
            height={(photo.height * 290) / photo.width}
            className="absolute transition-all duration-300 rounded-lg max-md:relative hover:brightness-75 cursor-pointer"
            style={{
              transform: columns > 1 && `translate(${coords[index]?.x}px, ${coords[index]?.y}px)`,
            }}
            onClick={() => openImageBrowser(index)}
          />
        ))}
        {/* Element obserwowany przez IntersectionObserver, umieszczony na dole */}
          <div
            ref={observerTarget}
            style={{
              position: columns !== 1 && 'absolute',
              bottom: 0,
              left: 0,
              width: "100%",
              height: "10px",
            }}
          />
        
      </section>

      <ImageBrowserDialog
        imageBrowserRef={imageBrowser}
        photos={photos}
        activePhotoID={activePhoto}
      />

      <FixedBg />
    </>
  );
};

export default SingleGallery;