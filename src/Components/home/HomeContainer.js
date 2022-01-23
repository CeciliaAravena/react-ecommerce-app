import React from 'react'
  import ItemListContainer from '../Item/ItemListContainer';
  import SlideBar from '../NavBar/SlideBar';

  function HomeContainer() {
      return (
          <>
              <SlideBar title='Surface' subtitle='Un Poco mas que Marketing' />
              <ItemListContainer heading='Servicios' />
          </>
      )
  }

  export default HomeContainer;