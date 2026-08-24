import React, { useEffect, useState } from 'react';

interface CursorSpotlightProps {
  enabled: boolean;
}

export const CursorSpotlight: React.FC<CursorSpotlightProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, visible]);

  if (!enabled || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, var(--accent-glow, rgba(59, 130, 246, 0.08)), transparent 80%)`
      }}
    />
  );
};
