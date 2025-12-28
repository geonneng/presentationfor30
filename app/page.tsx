'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SlideContainer, { navigateToSlide } from '@/components/SlideContainer';
import Slide from '@/components/Slide';
import ShootingStars from '@/components/ShootingStars';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNavigateToStart = () => {
    navigateToSlide(0); // 페이지 1: 표지
  };

  const handleNavigateToSpace = () => {
    navigateToSlide(2); // 페이지 3: 사례 1 - 우주 프로젝트
  };

  const handleNavigateToHistory = () => {
    navigateToSlide(6); // 페이지 7: 새로운 도전 - 역사 (인덱스는 6)
  };

  return (
    <>
      <ShootingStars />
      <Header 
        onNavigateToStart={handleNavigateToStart}
        onNavigateToSpace={handleNavigateToSpace}
        onNavigateToHistory={handleNavigateToHistory}
        currentSlide={currentSlide}
        totalSlides={13}
      />
      
      <SlideContainer onSlideChange={setCurrentSlide}>
        {/* 페이지 1: 표지 */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
            <h1>5학년 체험 중심 수업</h1>
          </div>
        </Slide>

        {/* 페이지 2: 체험 접근 전략 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>5학년 교실의 '체험' 전략</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3>디지털 체험</h3>
                <p style={{ marginBottom: 0 }}>에듀테크, AI, 코딩</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 1.jpg" 
                    alt="디지털 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>역동적 체험</h3>
                <p style={{ marginBottom: 0 }}>체육 활동 융합</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 2.jpg" 
                    alt="역동적 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>창작자 체험</h3>
                <p style={{ marginBottom: 0 }}>프로젝트 기반 학습</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 3.jpg" 
                    alt="창작자 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 3: 사례 1 - 우주 프로젝트 */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center max-w-4xl mx-auto space-y-12">
            <h2>우주 프로젝트</h2>
            
            <div style={{ 
              width: '100%',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/8페이지 사진.jpg" 
                alt="우주 프로젝트 학생 활동"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 9: 우주 프로젝트 - 도구 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>우주 프로젝트 - 사용 도구</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3>미리캔버스</h3>
                <p>인포그래픽 제작. 정보 시각화.</p>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxWidth: '450px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/9페이지 미리캔버스 작업.jpg" 
                    alt="미리캔버스 작업물"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>놂삶앎 축제</h3>
                <p>'우리 반 우주 박람회장' 구축. 결과물 전시.</p>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxWidth: '450px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/9페이지 학생활동 사진.jpg" 
                    alt="우주 프로젝트 학생 활동"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 10: 우주 프로젝트 - 놂삶앎 축제 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-10">
            <div>
              <h2>우주 프로젝트 - 놂삶앎 축제</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                놂삶앎 나눔 축제: 지식의 향유
              </h3>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
              borderRadius: '0.25rem'
            }}>
              <video 
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '0.25rem',
                  backgroundColor: '#000'
                }}
              >
                <source src="/10페이지 놂삶앎 축제 우주 프로젝트.mp4" type="video/mp4" />
                영상을 재생할 수 없습니다.
              </video>
            </div>
            
            <div className="space-y-8">
              <p>
                학생이 '큐레이터'가 되어 동료 초대. 배운 지식을 직접 설명하고 공유.
              </p>
            </div>
          </div>
        </Slide>

        {/* 페이지 6: 새로운 도전 - 역사 */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2>역사 '추체험' 프로젝트</h2>
          </div>
        </Slide>

        {/* 페이지 7: 추체험 ① 선사시대 및 고조선 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <h2>추체험 ① 선사시대 및 고조선</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                선사시대 생활 모습 체험과 빗살무늬토기 만들기
              </h3>
            </div>
            
            <div className="space-y-10">
              <p>선사시대 생활 모습 체험</p>
              <p>빗살무늬토기 만들기</p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/신석기 빗살무늬토기 만들기.jpg" 
                alt="빗살무늬토기 만들기"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 8: 추체험 ① 선사시대 및 고조선 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>추체험 ① 선사시대 및 고조선</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: 0 }}>
                건국 신화와 국가 형성
              </h3>
            </div>
            
            <div>
              <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 500 }}>[디지털]</span> 전쟁 보드게임: 건국 신화 및 당시의 사회 모습 이해
              </p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: 'calc(100vh - 280px)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.25rem',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://side-project-ysda.vercel.app/"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="고조선 전쟁 보드게임"
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 9: 추체험 ② 삼국/남북국시대 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2>추체험 ② 삼국시대 & 남북국시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                영토 확장과 문화의 힘
              </h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>[신체]</p>
                <p style={{ marginBottom: 0 }}>
                  삼국시대 피구: 3팀(고,백,신) 구성. 동맹, 배신, 영토 획득 추체험.
                </p>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/19페이지 사진.jpg" 
                  alt="삼국시대 피구 활동"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 10: 추체험 ② 삼국/남북국시대 - 예술 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-10">
            <div>
              <h2>추체험 ② 삼국시대 & 남북국시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                문화유산 경매
              </h3>
            </div>
            
            <div>
              <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>[예술]</p>
              <p>문화유산 경매: 가상 화폐로 경매하며 가치 내면화.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div style={{ 
                width: '100%',
                height: '520px',
                border: '1px solid var(--border-color)',
                borderRadius: '0.25rem',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://auction-git-main-noid3719-5451s-projects.vercel.app/"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="문화유산 경매"
                />
              </div>
              
              <div style={{ 
                width: '100%',
                height: '520px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/20페이지 삼국시대 문화유산.jpg" 
                  alt="삼국시대 문화유산"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 11: 추체험 ④ 조선시대 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <h2>추체험 ④ 조선시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                에듀테크 · 예체능 연계 추체험
              </h3>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p style={{ fontWeight: 500 }}>[핵심]</p>
                <p>학급운영플랫폼 '상태창'으로 학습 상태를 공유하며 진행하는 에듀테크형 추체험</p>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '420px',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://statup.kr/student-login"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="상태창 로그인"
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 12: 추체험 ④ 조선시대 - 융합 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>추체험 ④ 조선시대 - 융합</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                예체능 기반 역사 뮤지컬 프로젝트
              </h3>
            </div>
            
            <div className="space-y-4">
              <p style={{ fontWeight: 500 }}>[융합]</p>
              <p>역사 뮤지컬 수업: 팀별 대본 작성 · 안무 제작 · 무대 연출</p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '420px',
              border: '1px solid var(--border-color)',
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.youtube.com/embed/5RuAqQmLyKU?feature=shared"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="역사 뮤지컬 수업 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 13: 디지털 추체험 게임 */}
        <Slide>
          <div className="max-w-6xl mx-auto">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.3fr 0.7fr', 
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* 왼쪽: 제목 및 내용 */}
              <div className="space-y-12">
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)' }}>디지털 추체험: {'<'}다시 쓰는 조선왕조실록{'>'}</h2>
                  <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                    교사 제작 '선택형 역사 게임(CYOA)'
                  </h3>
                </div>
                
                <div className="space-y-10">
                  <p style={{ fontWeight: 500 }}>게임 방식:</p>
                  
                  <div className="space-y-6">
                    <p>• 학생, 역사적 인물(이방원 등) 되기.</p>
                    <p>• 역사적 분기점에서 '선택지' 마주.</p>
                    <p>• 선택에 따른 실제/가상 결과 확인.</p>
                  </div>
                </div>
              </div>
              
              {/* 오른쪽: 모바일 형태 임베딩 */}
              <div style={{ 
                width: '100%',
                maxWidth: '550px',
                height: '70vh',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <iframe
                  src="https://history-rewrite2.vercel.app/"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="다시 쓰는 조선왕조실록 2"
                />
              </div>
            </div>
          </div>
        </Slide>
      </SlideContainer>
    </>
  );
}
