"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";
import { createPortal } from "react-dom";

import type { ProjectImage, ProjectImagePresentation } from "@/types/portfolio";

import { getAdjacentSlideIndex, getSwipeDirection } from "./project-gallery-state";
import styles from "./ui.module.css";

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
  presentation?: ProjectImagePresentation;
  title: string;
};

export function ProjectGallery({ images, presentation = "desktop", title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setIsExpanded(false);
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isExpanded]);

  function moveSlide(direction: -1 | 1) {
    setActiveIndex((currentIndex) =>
      getAdjacentSlideIndex(currentIndex, direction, images.length),
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX;

    if (endX !== undefined) {
      const direction = getSwipeDirection(touchStartX.current, endX);

      if (direction !== 0) {
        moveSlide(direction);
      }
    }

    touchStartX.current = null;
  }

  return (
    <div
      aria-label={`${title} product screenshots`}
      className={`${styles.projectGallery} ${presentation === "mobile" ? styles.mobileProjectGallery : ""}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className={styles.galleryViewport}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className={styles.gallerySlide} key={activeImage.src}>
          <button
            aria-label={`Open ${title} screenshot ${activeIndex + 1} full screen`}
            className={styles.galleryExpand}
            onClick={() => setIsExpanded(true)}
            type="button"
          >
            <Image
              alt={activeImage.alt}
              className={styles.galleryImage}
              fill
              unoptimized
              priority={activeIndex === 0}
              sizes="(max-width: 760px) 100vw, 1180px"
              src={activeImage.src}
            />
          </button>
        </div>

        {hasMultipleImages && (
          <>
            <button
              aria-label={`Previous ${title} screenshot`}
              className={`${styles.galleryArrow} ${styles.galleryArrowPrevious}`}
              onClick={() => moveSlide(-1)}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              aria-label={`Next ${title} screenshot`}
              className={`${styles.galleryArrow} ${styles.galleryArrowNext}`}
              onClick={() => moveSlide(1)}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <span aria-live="polite" className={styles.galleryCounter}>
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div aria-label={`${title} screenshot selector`} className={styles.galleryDots} role="group">
          {images.map((image, index) => (
            <button
              aria-label={`Show screenshot ${index + 1}: ${image.alt}`}
              aria-pressed={index === activeIndex}
              className={`${styles.galleryDot} ${index === activeIndex ? styles.galleryDotActive : ""}`}
              key={image.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      )}

      {isExpanded &&
        createPortal(
          <div
            aria-label={`${title} screenshot viewer`}
            aria-modal="true"
            className={styles.galleryLightbox}
            onClick={() => setIsExpanded(false)}
            role="dialog"
          >
            <button
              aria-label="Close full-screen screenshot"
              className={styles.lightboxClose}
              onClick={() => setIsExpanded(false)}
              type="button"
            >
              ×
            </button>
            <button
              aria-label="Previous screenshot"
              className={`${styles.lightboxArrow} ${styles.lightboxArrowPrevious}`}
              onClick={(event) => {
                event.stopPropagation();
                moveSlide(-1);
              }}
              type="button"
            >
              ‹
            </button>
            <div
              className={`${styles.lightboxImage} ${presentation === "mobile" ? styles.mobileLightboxImage : ""}`}
              onClick={(event) => event.stopPropagation()}
            >
              <Image alt={activeImage.alt} fill sizes="100vw" src={activeImage.src} unoptimized />
            </div>
            <button
              aria-label="Next screenshot"
              className={`${styles.lightboxArrow} ${styles.lightboxArrowNext}`}
              onClick={(event) => {
                event.stopPropagation();
                moveSlide(1);
              }}
              type="button"
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
