import React, { useState } from 'react';
import NavbarLayout from './layout';

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return <NavbarLayout open={open} onNavClick={setOpen} />;
};

export default Navbar;
