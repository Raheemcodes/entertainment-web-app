import { useEffect, useRef } from 'react';

let gap: number = 16;
let padding: number = 16;
let threshold: number;
let isDragging: boolean = false;
let startPos: number = 0;
let startPosY: number = 0;
let currentTranslate: number = 0;
let prevTranslate: number;
let initialTranslate: number;
let slideWidth: number;
let lastSlide: number;
let currentIndex: number = 0;
let slider: HTMLElement;

const useSwiper = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    slider = sliderRef.current!;

    addEventListener();
    initialize();

    () => removeEventListener();
  }, []);

  return {
    ref: sliderRef,
  };
};

const addEventListener = () => {
  setTransition();

  window.addEventListener('resize', resizeHandler);

  slider.addEventListener('dragstart', dragStartHandler, {
    passive: false,
  });

  // touch events
  slider.addEventListener('touchstart', touchStartHandler, {
    passive: false,
  });
  slider.addEventListener('touchend', touchEndHandler, {
    passive: false,
  });
  slider.addEventListener('touchmove', touchMoveHandler, {
    passive: false,
  });

  // mouse events
  slider.addEventListener('mousedown', touchStartHandler, {
    passive: false,
  });
  slider.addEventListener('mouseup', touchEndHandler, {
    passive: false,
  });
  slider.addEventListener('mousemove', touchMoveHandler, {
    passive: false,
  });
  slider.addEventListener('mouseleave', touchEndHandler, {
    passive: false,
  });
};

const removeEventListener = () => {
  window.removeEventListener('resize', resizeHandler);

  slider.removeEventListener('dragstart', dragStartHandler);
  // touch events
  slider.removeEventListener('touchstart', touchStartHandler);
  slider.removeEventListener('touchend', touchEndHandler);
  slider.removeEventListener('touchmove', touchMoveHandler);
  // mouse events
  slider.removeEventListener('mousedown', touchStartHandler);
  slider.removeEventListener('mouseup', touchEndHandler);
  slider.removeEventListener('mousemove', touchMoveHandler);
  slider.removeEventListener('mouseleave', touchEndHandler);
};

const addCursor = () => {
  slider.style.cursor = 'grab';
  slider.style.userSelect = 'none';
};

const removeCursor = () => {
  slider.style.cursor = '';
  slider.style.userSelect = '';
};

const initialize = () => {
  configureSize();
  slideWidth = slider.firstElementChild!.clientWidth + gap;
  initialTranslate = 0;

  prevTranslate = initialTranslate;
  threshold = slider.firstElementChild!.clientWidth / 3;
  lastSlide = slider.children.length - 1;

  setPositionByIndex();
};

const getPositionX = (event: MouseEvent | TouchEvent): number => {
  return event.type.includes('mouse')
    ? (event as MouseEvent).pageX
    : (event as TouchEvent).touches[0].clientX;
};

const getPositionY = (event: MouseEvent | TouchEvent): number => {
  return event.type.includes('mouse')
    ? (event as MouseEvent).pageY
    : (event as TouchEvent).touches[0].clientY;
};

const dragStartHandler = (e: MouseEvent | TouchEvent) => e.preventDefault();

const touchStartHandler = (e: MouseEvent | TouchEvent) => {
  startPos = getPositionX(e);
  startPosY = getPositionY(e);
  isDragging = true;
  addCursor();
};

const touchMoveHandler = (e: MouseEvent | TouchEvent) => {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    const currentTranslateX = getPositionX(e) - startPos;
    const currentTranslateY = getPositionY(e) - startPosY;

    if (Math.abs(currentTranslateY) < Math.abs(currentTranslateX)) {
      if (e.cancelable) e.preventDefault();
      currentTranslate = prevTranslate + currentPosition - startPos;
      setSliderPosition();
    }
  }
};

const touchEndHandler = () => {
  isDragging = false;

  const movedBy = currentTranslate - prevTranslate;
  // if moved enough negative then snap to next slide if there is one

  if (movedBy < -threshold && currentIndex < slider.children.length - 1)
    currentIndex++;

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > threshold && currentIndex > 0) currentIndex--;

  setPositionByIndex();

  removeCursor();
};

const configureSize = () => {
  if (innerWidth < 768) {
    padding = 16;
    gap = 16;
  } else if (innerWidth < 1440) {
    padding = 24;
    gap = 40;
  } else {
    padding = 36;
    gap = 40;
  }
};

const resizeHandler = () => {
  initialize();
};

const setPositionByIndex = () => {
  const maxTranslate =
    slideWidth * slider.children.length - gap - slider.clientWidth;
  const pontentialTranslate = currentIndex * -slideWidth;

  if (
    currentIndex == 0 ||
    (currentIndex > 0 && pontentialTranslate > -maxTranslate)
  ) {
    currentTranslate = currentIndex * -slideWidth;
  } else if (pontentialTranslate < -maxTranslate) {
    currentIndex =
      (maxTranslate - (maxTranslate % slideWidth)) / slideWidth + 1;
    currentTranslate = -maxTranslate;
  }

  prevTranslate = currentTranslate;
  setSliderPosition();
};

const setTransition = () => {
  Array.from(slider.children).forEach((child) => {
    const element = child as HTMLElement;
    element.style.transition = 'transform .3s ease-out';
  });
};

const setSliderPosition = () => {
  Array.from(slider.children).forEach((child) => {
    const element = child as HTMLElement;
    element.style.transform = `translateX(${currentTranslate}px)`;
  });
};

export default useSwiper;
