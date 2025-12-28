interface SlideProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Slide({ children, className = '', fullWidth = false }: SlideProps) {
  if (fullWidth) {
    return (
      <div
        className={`w-screen h-screen ${className}`}
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 ${className}`}
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
}

