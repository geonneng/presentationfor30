'use client';

import { useEffect, useState } from 'react';

interface Dot {
  id: number;
  top: number;
  left: number;
}

export default function ShootingStars() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    let dotId = 0;

    const createDots = () => {
      // 3개의 플로팅 도트 생성
      const newDots: Dot[] = [
        {
          id: dotId++,
          top: Math.random() * 100, // 0-100%
          left: Math.random() * 100, // 0-100%
        },
        {
          id: dotId++,
          top: Math.random() * 100,
          left: Math.random() * 100,
        },
        {
          id: dotId++,
          top: Math.random() * 100,
          left: Math.random() * 100,
        },
      ];

      setDots(newDots);

      // 12초 후 도트 제거
      setTimeout(() => {
        setDots([]);
      }, 12000);
    };

    // 처음 시작
    createDots();

    // 15초마다 반복
    const interval = setInterval(createDots, 15000);

    return () => {
      clearInterval(interval);
      setDots([]);
    };
  }, []);

  return (
    <div className="shooting-stars">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="shooting-star-animated"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
          }}
        />
      ))}
    </div>
  );
}
