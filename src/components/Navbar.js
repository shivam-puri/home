// import * as React from 'react';
import '../styling/navbar.css';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view'



const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const Ref = useRef(null);

  const handleClick = () => {

    Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDrawerOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }



  return (
    <div className='navbar' >
      <div className="nav_items_container">
        <div className="navdiv"></div>
        <div className="navdiv">
          <div className="link">
            <p>
              
              <ScrollIntoView selector="#homescroll">
              <a className='visible_links' href="#home">Home</a>
              </ScrollIntoView>
            </p>
          </div>

          <div className="link">
            <p>
              {/* <a className='visible_links' href="#about">About</a> */}
              <ScrollIntoView selector="#aboutmescroll">
              <a className='visible_links' href="#about">About</a>
              </ScrollIntoView>
            </p>
          </div>

          <div className="link">
            <p>
             

              <ScrollIntoView selector="#projectscroll">
              <a href="#projects" className='visible_links'
                >
                Projects
              </a>
              </ScrollIntoView>
            </p>
          </div>
          <div className="link">
            <p>
              
              <ScrollIntoView selector="#contactscroll">
              <a href="#contact" className='visible_links'>Contact</a>
              </ScrollIntoView>
            </p>
          </div>
          <div className="hidden_icons">
            {
              isDrawerOpen ? (
                null
              ) : (<i className="fa-solid fa-bars hidden_icons" onClick={toggleDrawer}></i>)
            }
          </div>
        </div>
      </div>


      {isDrawerOpen && (
        <div

          className={`drawer`} ref={wrapperRef}  >
          <div className="drawer-options">
            <div className="drawer-option" onClick={toggleDrawer}>
            <ScrollIntoView selector="#homescroll">
              <a  className='drawer-link' href="#home">Home</a>
              </ScrollIntoView>
            </div>
            <div className="drawer-option" onClick={toggleDrawer}>
            <ScrollIntoView selector="#aboutmescroll">
              <a  className='drawer-link' href="#aboutme">About Me</a>
              </ScrollIntoView>
            </div>
            <div className="drawer-option" onClick={toggleDrawer}>
            <ScrollIntoView selector="#projectscroll">
              <a  className='drawer-link' href="#projects">Projects</a>
              </ScrollIntoView>
            </div>
            <div className="drawer-option" onClick={toggleDrawer}>
            <ScrollIntoView selector="#contactscroll">
              <a  className='drawer-link' href="#contact">Contact</a>
              </ScrollIntoView>
            </div>
          </div>

          <div className="close">
            <div className="drawer-link" onClick={toggleDrawer} >Close</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
