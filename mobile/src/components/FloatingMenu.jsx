import React, { useState } from "react";
import MenuModal from './MenuModal';

export default function FloatingMenu({ navigate }) {
    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <button className="floating-btn" onClick={() => setOpen(true)}>Menu</button>
            {isOpen && <MenuModal onClose={() => setOpen(false)} />}
        </>
    );
}
