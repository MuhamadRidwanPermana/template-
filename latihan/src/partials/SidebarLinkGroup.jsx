import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-5`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;