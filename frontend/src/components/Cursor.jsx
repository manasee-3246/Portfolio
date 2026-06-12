import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let requestRef;

    const updateMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };

    const animateCursor = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      setFollowerPos({ x: followerX, y: followerY });
      requestRef = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', updateMouse);
    requestRef = requestAnimationFrame(animateCursor);

    // Hover logic
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-card, .skill-pill, .social-icon, .form-input, .open-modal-btn')) {
        setIsHovering(true);
        document.body.classList.add('cursor-hover');
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .project-card, .skill-pill, .social-icon, .form-input, .open-modal-btn')) {
        setIsHovering(false);
        document.body.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ left: position.x, top: position.y }}
      ></div>
      <div 
        className="custom-cursor-follower" 
        style={{ left: followerPos.x, top: followerPos.y }}
      ></div>
    </>
  );
};

export default Cursor;
