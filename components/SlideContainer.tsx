'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface SlideContainerProps {
  children: React.ReactNode[];
  onSlideChange?: (index: number) => void;
}

export default function SlideContainer({ children, onSlideChange }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;

  // 슬라이드 변경 함수
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    onSlideChange?.(index);
    
    // 애니메이션 완료 후 상태 초기화
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [totalSlides, isAnimating, onSlideChange]);

  // 다음/이전 슬라이드
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // 클릭 네비게이션
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    
    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
    const clickX = e.clientX;
    
    // 화면 좌측 50% 클릭 시 이전, 우측 50% 클릭 시 다음
    if (clickX < containerWidth / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  }, [isAnimating, prevSlide, nextSlide]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating, nextSlide, prevSlide]);

  // 외부에서 슬라이드 이동 가능하도록 (앵커 링크용)
  useEffect(() => {
    const handleNavigate = (e: CustomEvent<number>) => {
      goToSlide(e.detail);
    };

    window.addEventListener('navigate-to-slide' as any, handleNavigate);
    return () => window.removeEventListener('navigate-to-slide' as any, handleNavigate);
  }, [goToSlide]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={handleClick}
      style={{ userSelect: 'none' }}
    >
      {/* 슬라이드 컨테이너 */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-600 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full ${
              index === currentSlide ? 'slide-enter' : ''
            }`}
            style={{
              opacity: index === currentSlide ? 1 : 0.3,
              transition: 'opacity 0.6s ease',
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* 네비게이션 인디케이터 */}
      <div className="fixed bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className="transition-all duration-300"
            style={{
              width: index === currentSlide ? '24px' : '6px',
              height: '6px',
              background: 'var(--text-color)',
              opacity: index === currentSlide ? 1 : 0.2,
              borderRadius: '3px',
            }}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* 좌/우 클릭 영역 힌트 (데스크톱만, 호버 시) */}
      <div className="hidden md:block fixed bottom-20 left-8 text-sm opacity-50 pointer-events-none">
        {currentSlide > 0 && '← 클릭: 이전'}
      </div>
      <div className="hidden md:block fixed bottom-20 right-8 text-sm opacity-50 pointer-events-none">
        {currentSlide < totalSlides - 1 && '클릭: 다음 →'}
      </div>
    </div>
  );
}

// 헬퍼 함수: 외부에서 슬라이드 이동
export function navigateToSlide(index: number) {
  window.dispatchEvent(new CustomEvent('navigate-to-slide', { detail: index }));
}

