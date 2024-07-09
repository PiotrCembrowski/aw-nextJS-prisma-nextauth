"use client";

interface MenuLink {
  label: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label }) => {
  return <div>{label}</div>;
};

export default MenuLink;
