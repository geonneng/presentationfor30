'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateToSpace: () => void;
  onNavigateToHistory: () => void;
  onNavigateToStart: () => void;
  currentSlide: number;
  totalSlides: number;
}

export default function Header({ onNavigateToSpace, onNavigateToHistory, onNavigateToStart, currentSlide, totalSlides }: HeaderProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('전체화면 전환 오류:', err);
    }
  };
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
      style={{
        background: '#ffffff',
        borderBottom: '2px solid rgba(0, 199, 60, 0.1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="flex items-center justify-between gap-6 max-w-screen-2xl mx-auto">
        {/* 좌측: 제목 */}
        <div className="flex-shrink-0">
          <h1 style={{ 
            fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
            letterSpacing: '-0.02em',
            color: '#00c73c',
            marginBottom: 0,
            fontWeight: 700,
            paddingLeft: '0.5rem'
          }}>
            <span className="hidden sm:inline">2025. 5학년 프로젝트 나눔</span>
            <span className="sm:hidden">프로젝트 나눔</span>
          </h1>
        </div>

        {/* 중앙: 섹션 바로가기 - 네이버 스타일 버튼 */}
        <nav className="hidden md:flex gap-6 flex-shrink-0">
          <button
            onClick={onNavigateToStart}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
              fontWeight: 600,
              color: '#333333',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 199, 60, 0.08)';
              e.currentTarget.style.color = '#00c73c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333333';
            }}
          >
            시작
          </button>
          
          <button
            onClick={onNavigateToSpace}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
              fontWeight: 600,
              color: '#333333',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 199, 60, 0.08)';
              e.currentTarget.style.color = '#00c73c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333333';
            }}
          >
            우주
          </button>
          
          <button
            onClick={onNavigateToHistory}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
              fontWeight: 600,
              color: '#333333',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 199, 60, 0.08)';
              e.currentTarget.style.color = '#00c73c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333333';
            }}
          >
            역사
          </button>
        </nav>

        {/* 우측: 페이지 번호 & 전체화면 버튼 */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
            fontWeight: 600,
            color: '#00c73c',
            fontVariantNumeric: 'tabular-nums',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(0, 199, 60, 0.08)',
            borderRadius: '20px'
          }}>
            {currentSlide + 1}/{totalSlides}
          </div>
          <button
            onClick={toggleFullscreen}
            className="w-10 h-10 rounded-lg transition-all duration-200 flex items-center justify-center"
            style={{
              backgroundColor: isFullscreen ? '#00c73c' : 'transparent',
              border: '2px solid ' + (isFullscreen ? '#00c73c' : 'rgba(0, 199, 60, 0.2)'),
              color: isFullscreen ? '#ffffff' : '#00c73c',
            }}
            onMouseEnter={(e) => {
              if (!isFullscreen) {
                e.currentTarget.style.backgroundColor = 'rgba(0, 199, 60, 0.1)';
                e.currentTarget.style.borderColor = '#00c73c';
              }
            }}
            onMouseLeave={(e) => {
              if (!isFullscreen) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0, 199, 60, 0.2)';
              }
            }}
            aria-label={isFullscreen ? '전체화면 종료' : '전체화면'}
            title={isFullscreen ? '전체화면 종료' : '전체화면'}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isFullscreen ? (
                // 전체화면 종료 아이콘
                <>
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </>
              ) : (
                // 전체화면 아이콘
                <>
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

