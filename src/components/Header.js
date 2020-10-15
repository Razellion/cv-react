import React, { useState } from 'react';
import { Menu } from './index';

function Header() {
  const contactList = [
    '+628972183875',
    'rizkyramadhan028@gmail.com',
    'github.com/razellion',
  ];
  const contactTitles = ['Mobile Phone', 'Email', 'Github'];
  const [contact, setContact] = useState(contactList[0]);
  const [contactTitle, setContactTitle] = useState(contactTitles[0]);
  const [contactIndex, setContactIndex] = useState(0);
  const onClickHandler = () => {
    setContactTitle(contactTitles[contactIndex]);
    setContact(contactList[contactIndex]);
    if (contactIndex === 2) {
      setContactIndex(0);
    } else {
      setContactIndex(contactIndex + 1);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <h2>Rizki Ramadhan</h2>
        <h4>Informatics Student</h4>
        <h4>Telkom University</h4>
      </div>
      <div className="header__right">
        <h3 className="contact no-select">{contactTitle}</h3>
        <h5>{contact}</h5>
        <button
          type="button"
          onClick={() => {
            onClickHandler();
          }}
          onKeyPress={() => {}}
        >
          More Info
        </button>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
