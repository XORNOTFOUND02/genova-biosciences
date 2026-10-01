import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './StoryModal.css';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoryModal({ isOpen, onClose }: StoryModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      videoRef.current?.play().catch(() => {});
    } else {
      dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC (native dialog handles it, but ensure state sync)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  const handleVideoEnd = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="story-modal"
      onClick={handleBackdropClick}
      aria-label="Our story video"
    >
      <div className="story-modal-inner">
        <button
          type="button"
          className="story-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} strokeWidth={2} />
        </button>
        <div className="story-modal-video-wrap">
          <video
            ref={videoRef}
            className="story-modal-video"
            controls
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/dna_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="story-modal-caption">
          <h3>Meet Dr. Mehta</h3>
          <p>
            Eighteen years of family medicine in one practice — see how Doctor
            Clinic puts listening before prescribing.
          </p>
        </div>
      </div>
    </dialog>
  );
}
