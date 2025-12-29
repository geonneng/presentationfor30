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
        totalSlides={15}
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
                    src="/page-6-activity-1.jpg" 
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
                    src="/page-6-activity-2.jpg" 
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
                    src="/page-6-activity-3.jpg" 
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
                src="/page-8-photo.jpg" 
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
                    src="/page-9-miricanvas.jpg" 
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
                    src="/page-9-activity.jpg" 
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
                src="/neolithic-pottery.jpg" 
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
                  src="/page-19-photo.jpg" 
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
                    src="/page-20-heritage.jpg"
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

        {/* 페이지 13: 2026학년도 운영 계획 */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2>2026학년도 운영 계획</h2>
          </div>
        </Slide>

        {/* 페이지 14: 에듀테크 기반 학급 운영 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>에듀테크 기반 학급 운영: '상태창'</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                플랫폼과 기술이 결합한 스마트한 교실 생태계
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3>플랫폼 활용 전략</h3>
                <ul className="space-y-4" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>• 학생 개별 역량(경험치/능력치) 시각화로 성취감 고취</li>
                  <li>• 데이터 기반의 체계적인 행동 발달 및 학습 이력 관리</li>
                  <li>• 학급 활동과 연동된 게임화(Gamification) 요소 적용</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3>키오스크 활용</h3>
                <ul className="space-y-4" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>• 출석 확인 및 학급운영플랫폼 로그인 자동화 시스템 구축</li>
                  <li>• 직접 개발한 키오스크 프로그램을 통한 등교 루틴의 디지털화</li>
                  <li>• 학생의 활동 데이터를 플랫폼과 실시간 연동하여 운영 효율성 극대화</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 15: 상태창 플랫폼 */}
        <Slide>
          <div style={{ 
            width: '100%',
            height: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2rem 0'
          }}>
            <div style={{ 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <p style={{ 
                fontSize: '1.1rem',
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                로그인이 필요한 경우 새 창에서 열어주세요
              </p>
              <button
                onClick={() => window.open('https://statup.kr/', '_blank')}
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                새 창에서 상태창 열기 ↗
              </button>
            </div>
            
            <iframe
              src="https://statup.kr/"
              width="100%"
              style={{ 
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                flex: 1,
                minHeight: 0
              }}
              title="상태창 플랫폼"
            />
          </div>
        </Slide>

        {/* 페이지 16: 진로 프로젝트 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>진로 프로젝트: '안녕, 내 일!'</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                창체·실과 연계 실전형 직업 체험 프로그램
              </h3>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <h3>교육과정 재구성 전략</h3>
                <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>• 실과 6단원(나의 진로) 및 창의적 체험활동 진로 영역 통합 운영</li>
                  <li>• 진로교육원 체험 활동 연계를 통한 진로 탐색의 심화</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3>주요 활동 내용</h3>
                <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>• 직업 체험 부스 운영: '놂삶앎 축제'와 연계하여 키자니아와 비슷한 직업 체험 부스 운영 예정</li>
                  <li>• 자기주도적 기획: 학생들이 직접 직업인이 되어 부스를 설계하고 서비스를 제공</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3>기대 효과</h3>
                <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>• 미래의 나(Tomorrow)와 나의 직업(Job)을 만나는 입체적 경험</li>
                  <li>• 실제적인 직무 체험을 통한 소질 발견 및 주체적인 진로 설계 역량 강화</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      </SlideContainer>
    </>
  );
}
