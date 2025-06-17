import React, { useState } from 'react';
import MenuModal from './MenuModal';

export default function FloatingMenu({ navigate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="floating-btn" onClick={() => setOpen(true)}>Menu</button>
      {open && <MenuModal onClose={() => setOpen(false)} navigate={navigate} />}
    </>
  );
}

