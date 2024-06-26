import './AccessibilityButton.css';
import { useEffect, useState } from 'react';

const AccessibilityButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextReaderActive, setIsTextReaderActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMonocromaticoActive, setIsMonocromaticoActive] = useState(false);

  useEffect(() => {
    const toggleTextReader = () => {
      setIsTextReaderActive(!isTextReaderActive);
      clearStyles();
    };

    const detectElements = (event) => {
      if (isTextReaderActive) {
        event.preventDefault();
        setSelectedElement(event.target);
        event.target.style.cssText =
          'outline: 2px dashed red; animation: pulseOutline 1s infinite;';
        const text = event.target.innerText || event.target.textContent;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      }
    };

    const clearStyles = () => {
      if (selectedElement) {
        selectedElement.style.cssText = '';
      }
      setSelectedElement(null);
    };

    const toggleZoom = () => {
      const startZoom = isZoomed ? 1.15 : 1;
      const endZoom = isZoomed ? 1 : 1.15;
      const duration = 500;
      const stepTime = 20;
    
      let currentZoom = startZoom;
      const stepZoom = (endZoom - startZoom) / (duration / stepTime);
    
      const zoomAnimation = setInterval(() => {
        currentZoom += stepZoom;
        document.body.style.zoom = currentZoom;
    
        if ((stepZoom > 0 && currentZoom >= endZoom) || (stepZoom < 0 && currentZoom <= endZoom)) {
          clearInterval(zoomAnimation);
        }
      }, stepTime);
    
      setIsZoomed(!isZoomed);
    };

    const toggleMonocromatico = () => {
      setIsMonocromaticoActive(!isMonocromaticoActive);
      if (isMonocromaticoActive) {
        document.documentElement.classList.remove('monocromatico-animate-to');
        document.documentElement.classList.add('monocromatico-animate-from');
      } else {
        document.documentElement.classList.remove('monocromatico-animate-from');
        document.documentElement.classList.add('monocromatico-animate-to');
      }
    };
    
    document.documentElement.addEventListener('animationend', (event) => {
      if (event.animationName === 'fadeToGray') {
        document.documentElement.classList.add('monocromatico');
      }
      if (event.animationName === 'fadeFromGray') {
        document.documentElement.classList.remove('monocromatico');
      }
      document.documentElement.classList.remove('monocromatico-animate-to', 'monocromatico-animate-from');
    });

    const openModalBtnClickHandler = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const speakerBtnClickHandler = () => {
      toggleTextReader();
    };

    const searchButtonClickHandler = () => {
      toggleZoom();
    };

    const monocromaticoButtonClickHandler = () => {
      toggleMonocromatico();
    };

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulseOutline {
        0%, 100% {
          outline: 2px dashed red;
        }
        50% {
          outline: 4px dashed red;
        }
      }`;
    document.head.appendChild(style);

    const openModalBtn = document.getElementById('openModalBtn');
    const speakerBtn = document.getElementById('speakerBtn');
    const searchButton = document.getElementById('zoomBtn');
    const monocromaticoButton = document.getElementById('monocromaticoBtn');

    if (openModalBtn) {
      openModalBtn.addEventListener('click', openModalBtnClickHandler);
    }

    if (speakerBtn) {
      speakerBtn.addEventListener('click', speakerBtnClickHandler);
    }

    document.addEventListener('mousedown', detectElements);

    document.addEventListener('mouseup', clearStyles);

    if (searchButton) {
      searchButton.addEventListener('click', searchButtonClickHandler);
    }

    if (monocromaticoButton) {
      monocromaticoButton.addEventListener('click', monocromaticoButtonClickHandler);
    }

    return () => {
      if (openModalBtn) {
        openModalBtn.removeEventListener('click', openModalBtnClickHandler);
      }

      if (speakerBtn) {
        speakerBtn.removeEventListener('click', speakerBtnClickHandler);
      }

      document.removeEventListener('mousedown', detectElements);

      document.removeEventListener('mouseup', clearStyles);
      document.head.removeChild(style);

      if (searchButton) {
        searchButton.removeEventListener('click', searchButtonClickHandler);
      }

      if (monocromaticoButton) {
        monocromaticoButton.removeEventListener('click', monocromaticoButtonClickHandler);
      }
    };
  }, [isMenuOpen, isTextReaderActive, selectedElement, isZoomed, isMonocromaticoActive]);

  return (
    <div className="sidebar">
      <button id="openModalBtn" className="open-btn" aria-label="Menú de accesibilidad">
      <i className="fa-solid fa-universal-access"></i>
      </button>
      <div id="radialMenu" className={isMenuOpen ? 'radial-menu show' : 'radial-menu'}>
        <button
          id="monocromaticoBtn"
          aria-label="Activar/Desactivar modo monocromático"
          title="Activar/Desactivar modo monocromático"
        >
          <i
            className={
              isMonocromaticoActive ? 'fas fa-eye monocromatico' : 'fas fa-eye-slash'
            }
          ></i>
        </button>
        <button
          id="speakerBtn"
          aria-label="Activar/Desactivar lector de texto."
          title="Activar/Desactivar lector de texto. Mantener pulsado sobre el texto a leer."
          >
          <i
            className={`fas ${isTextReaderActive ? 'fa-volume-up' : 'fa-volume-mute'}`}
          ></i>
        </button>
        <button
          id="zoomBtn"
          aria-label="Aumentar/Disminuir zoom"
          title="Aumentar/Disminuir zoom"
        >
          <i className={isZoomed ? 'fa fa-search-minus' : 'fa fa-search-plus'}></i>
        </button>
      </div>
      <div id="contentContainer"></div>
    </div>
  );
};

export default AccessibilityButton;
