import { useState, useEffect } from "react";

// Common images used throughout the site
const CORE_IMAGES = [
  "/tedxmec white.svg",
  "/hero_hallway.jpg",
  "/about_stairwell.jpg",
  "/speakers_corridor.jpg",
  "/performances_hall.jpg",
  "/community_corridor.jpg",
  "/partners_stairwell.jpg",
  "/experience_stairwell.jpg",
];

// Team images
const TEAM_IMAGES = [
  "/team/Anjali.jpg",
  "/team/Anagha D.jpg",
  "/team/Aisha.jpg",
  "/team/aibel.jpeg",
  "/team/AaronGeorgeAbraham.jpg",
  "/team/aadithya.jpeg",
  "/team/aadil.jpeg",
];

// Performer images
const PERFORMER_IMAGES = [
  "/performers/watb.png",
  "/performers/sidharth.png",
  "/performers/george.png",
];

// Gallery images
const GALLERY_IMAGES = [
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM.jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (3).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM.jpeg",
];

const ALL_IMAGES = [
  ...CORE_IMAGES,
  ...TEAM_IMAGES,
  ...PERFORMER_IMAGES,
  ...GALLERY_IMAGES,
];

// Preload image function
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const useAssetLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let assetsLoaded = false;
    let minimumTimeElapsed = false;

    const checkComplete = () => {
      if (assetsLoaded && minimumTimeElapsed) {
        setIsLoading(false);
      }
    };

    // Minimum 3 second delay
    const minTimer = setTimeout(() => {
      minimumTimeElapsed = true;
      checkComplete();
    }, 3000);

    const loadAllAssets = async () => {
      try {
        // Load all images in parallel
        await Promise.allSettled(
          ALL_IMAGES.map((imageSrc) => preloadImage(imageSrc)),
        );

        assetsLoaded = true;
        checkComplete();
      } catch (error) {
        console.warn("Some assets failed to load:", error);
        // Still proceed even if some assets fail
        assetsLoaded = true;
        checkComplete();
      }
    };

    loadAllAssets();

    // Cleanup timer on unmount
    return () => {
      clearTimeout(minTimer);
    };
  }, []);

  return { isLoading };
};
