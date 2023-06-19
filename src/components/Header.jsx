import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [menuHeader, setMenuHeader] = useState(false);

  const headerLinks = [
    { label: "О Холдинге", link: "/" },
    { label: "Инвестиции", link: "/" },
    {
      label: "Научный совет",
      link: "/",
      subgroup: [
        { label: "Академия RIM GROUP", link: "/" },
        { label: "НИОКР", link: "/" },
        { label: "Сотрудничество с институтами", link: "/" },
        { label: "Учебный центр при холдинге", link: "/" },
        { label: "Состав научного совета", link: "/" },
      ],
    },
    { label: "Пресс-центр", link: "/" },
    { label: "Контакты", link: "/" },
  ];

  const clearSearch = () => {
    setSearch("");
  };

  const hoverLi = (item) => {
    setMenuHeader(true);
  };

  const cancelHoverLi = (item) => {
    setMenuHeader(false);
  };

  return (
    <header className="header">
      <ul className="header__wrapper container">
        {headerLinks.map((item) => (
          <li
            key={item.label}
            onMouseEnter={(item) => hoverLi(item)}
            onMouseLeave={(item) => cancelHoverLi(item)}
          >
            <Link to={item.link}>{item.label}</Link>
            {menuHeader && item.subgroup && (
              <ul className="header__dropmenu">
                {item.subgroup?.map((subgroup) => (
                  <li>
                    <Link to={subgroup.link}>{subgroup.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="header__search">
          <input
            type="search"
            placeholder="Поиск"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {!search ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="header__search-icon"
              style={{ cursor: "none" }}
            >
              <path
                d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M13 14L20 20"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          ) : (
            <svg
              className="header__search-icon"
              width="21"
              height="21"
              id="Layer_1"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              onClick={clearSearch}
            >
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
