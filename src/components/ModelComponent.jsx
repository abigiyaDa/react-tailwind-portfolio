import { useState } from "react";
import { X } from "lucide-react";

export const GalleryModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-card p-4 rounded-lg max-w-xl w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          <X size={24} />
        </button>
        <img
          src={images[currentIndex]}
          alt="Project screenshot"
          className="w-full h-96 object-contain mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={prevImage}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Prev
          </button>
          <button
            onClick={nextImage}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
