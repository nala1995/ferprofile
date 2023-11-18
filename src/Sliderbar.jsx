import { useState, useEffect } from 'react';
import { useText } from './TextContex';
import itemData from './itemData';

function Sliderbar() {
  const [itemsVisibleProfile, setItemsVisibleProfile] = useState(false);
  const [menuIconProfileRotation, setMenuIconProfileRotation] = useState(0);

  const [itemsVisibleForeignTrade, setItemsVisibleForeignTrade] = useState(false);
  const [menuIconForeignTradeRotation, setMenuIconForeignTradeRotation] = useState(0);

  const [itemsVisibleEcommerce, setItemsVisibleEcommerce] = useState(false);
  const [menuIconEcommerceRotation, setMenuIconEcommerceRotation] = useState(0);

  const [itemsVisibleSoftwareEngine, setItemsVisibleSoftwareEngine] = useState(false);
  const [menuIconSoftwareEngineRotation, setMenuIconSoftwareEngineRotation] = useState(0);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const { setSelectedText, setSelectedTitle } = useText();
  

  const toggleProfileVisibility = () => {
    setItemsVisibleProfile(!itemsVisibleProfile);
    setMenuIconProfileRotation(itemsVisibleProfile ? 0 : 90);
  };

  const toggleForeignTradeVisibility = () => {
    console.log('toggleForeignTradeVisibility');
    setItemsVisibleForeignTrade(!itemsVisibleForeignTrade);
    setMenuIconForeignTradeRotation(itemsVisibleForeignTrade ? 0 : 90);
  };

  const toggleEcommerceVisibility = () => {
    console.log('toggleEcommerceVisibility');
    setItemsVisibleEcommerce(!itemsVisibleEcommerce);
    setMenuIconEcommerceRotation(itemsVisibleEcommerce ? 0 : 90);
  };

  const toggleSoftwareEngineVisibility = () => {
    console.log('toggleSoftwareEngineVisibility');
    setItemsVisibleSoftwareEngine(!itemsVisibleSoftwareEngine);
    setMenuIconSoftwareEngineRotation(itemsVisibleSoftwareEngine ? 0 : 90);
  };

  /* const toggleVisibility = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };
 */

  useEffect(() => {
    // Cargar la selección del Local Storage cuando el componente se monta
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem && itemData[storedItem]) {
      const { text, title, group } = itemData[storedItem];
      setSelectedText(text);
      setSelectedTitle(title);
      setSelectedItem(storedItem);
      setSelectedGroup(group); // Establece el grupo desde el Local Storage
    } else {
      setSelectedText('');
      setSelectedTitle('');
      setSelectedItem('');
      setSelectedGroup(null);
    }
  }, []);

  const handleLiItemClick = (event, item, group) => {
    event.stopPropagation();
    if (itemData[item]) {
      const { text, title } = itemData[item];
      setSelectedText(text);
      setSelectedTitle(title);
      setSelectedItem(item);
      setSelectedGroup(group);
      localStorage.setItem('selectedItem', item);
    }
  };

  return (
    <div>
      <div className='slide-box'>
        <ul
          className={`slide-titles ${itemsVisibleProfile ? 'active' : ''}`}
          onClick={() => {
            console.log('profile ul clicked');
            toggleProfileVisibility()}}
        >
          <svg
            className={`menu-icon ${itemsVisibleProfile ? 'active' : ''}`}
            style={{ transform: `rotate(${menuIconProfileRotation}deg)` }}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
          Profile patterns
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Introduction')}>
                Profile introduction
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Working')}>
                Working experience
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Study')}>
                Study experience
              </li>
        </ul>
      </div>
      <div className='slide-box'>
        <ul
          className={`slide-titles ${itemsVisibleForeignTrade ? 'active' : ''}`}
          onClick={toggleForeignTradeVisibility}
        >
          <svg
            className={`menu-icon ${itemsVisibleForeignTrade ? 'active' : ''}`}
            style={{ transform: `rotate(${menuIconForeignTradeRotation}deg)` }}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
          Foreign trade patterns
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Supplychain')}>
                Supply Chain
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'ForeignTrade')}>
                Foreign trade
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Logistics')}>
                Warehouse & customs
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Fulfillment')}>
                Logistics fulfilment
              </li>
        </ul>
      </div>
      <div className='slide-box'>
        <ul
          className={`slide-titles ${itemsVisibleEcommerce ? 'active' : ''}`}
          onClick={toggleEcommerceVisibility}
        >
          <svg
            className={`menu-icon ${itemsVisibleEcommerce ? 'active' : ''}`}
            style={{ transform: `rotate(${menuIconEcommerceRotation}deg)` }}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
          Ecommerce patterns
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Marketplaces')}>
                Handling marketplaces
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Ecommerce')}>
                Technologies into the ecommerce
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Marketing')}>
                Marketing tools
              </li>
        </ul>
      </div>
      <div className='slide-box'>
        <ul
          className={`slide-titles ${itemsVisibleSoftwareEngine ? 'active' : ''}`}
          onClick={toggleSoftwareEngineVisibility}
        >
          <svg
            className={`menu-icon ${itemsVisibleSoftwareEngine ? 'active' : ''}`}
            style={{ transform: `rotate(${menuIconSoftwareEngineRotation}deg)` }}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
          Software engine patterns
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Frontend')}>
                Frontend stuffs
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event, 'Languages')}>
                Nala Business
              </li>
              <li className='li-item' onClick={(event) => handleLiItemClick(event,'Software')}>
                Projects
              </li>
        </ul>
      </div>
    </div>
  );
}

export default Sliderbar; 