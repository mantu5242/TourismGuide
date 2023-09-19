// /* This is a React component that renders a carousel using the "react-spring-3d-carousel" library. The carousel slides are created by an array of objects, where each object contains a unique key generated using "uuidv4" and a content component "RandomImage". The component tracks the current slide, offset radius, and whether to show the navigation in its state. It also includes touch event handlers to allow for swipe navigation on mobile devices. The component allows for dynamic control over the slide position, offset radius and navigation display, by allowing the user to input values. */

// import React, { Component } from "react";
// import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
// import { config } from "react-spring";
// import RandomImage from "./random";

// const getTouches = (evt) => {
//   return (
//     evt.touches || evt.originalEvent.touches // browser API
//   );
// };

// export default class Example extends Component {
//   state = {
//     goToSlide: 1,
//     offsetRadius: 10,
//     showNavigation: true,
//     enableSwipe: true,
//     config: config.slow
//   };

//   slides = [
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     },
//     {
//       key: uuidv4(),
//       content: <RandomImage cloud_name="dqm00mcjs" tag="carousel" />
//     }
//   ].map((slide, index) => {
//     return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
//   });

//   onChangeInput = (e) => {
//     this.setState({
//       [e.target.name]: parseInt(e.target.value, 10) || 0
//     });
//   };

//   handleTouchStart = (evt) => {
//     if (!this.state.enableSwipe) {
//       return;
//     }

//     const firstTouch = getTouches(evt)[0];
//     this.setState({
//       ...this.state,
//       xDown: firstTouch.clientX,
//       yDown: firstTouch.clientY
//     });
//   };

//   handleTouchMove = (evt) => {
//     if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
//       return;
//     }

//     let xUp = evt.touches[0].clientX;
//     let yUp = evt.touches[0].clientY;

//     let xDiff = this.state.xDown - xUp;
//     let yDiff = this.state.yDown - yUp;
//     if (Math.abs(xDiff) > Math.abs(yDiff)) {
//       if (xDiff > 0) {
//         /* left swipe */
//         this.setState({
//           goToSlide: this.state.goToSlide + 1,
//           xDown: null,
//           yDown: null
//         });
//       } else {
//         /* right swipe */
//         this.setState({
//           goToSlide: this.state.goToSlide - 1,
//           xDown: null,
//           yDown: null
//         });
//       }
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     switch (e.keyCode) {
//       case 37:
//         this.setState({ goToSlide: this.state.goToSlide - 1 });
//         break;
//       case 39:
//         this.setState({ goToSlide: this.state.goToSlide + 1 });
//         break;
//       default:
//         break;
//     }
//   };

//   render() {
//     return (
//       <div
//         style={{ width: "80%", height: "500px", margin: "0 auto" }}
//         onTouchStart={this.handleTouchStart}
//         onTouchMove={this.handleTouchMove}
//       >
//         <Carousel
//           slides={this.slides}
//           goToSlide={this.state.goToSlide}
//           offsetRadius={this.state.offsetRadius}
//           showNavigation={this.state.showNavigation}
//           animationConfig={this.state.config}
//         />
//         <div
//           style={{
//             margin: "0 auto",
//             marginTop: "2rem",
//             width: "50%",
//             display: "flex",
//             justifyContent: "space-around"
//           }}
//         >
//           {/*         <div>
//             <label>Go to slide: </label>
//             <input name="goToSlide" onChange={this.onChangeInput} />
//           </div>
//           <div>
//             <label>Offset Radius: </label>
//             <input name="offsetRadius" onChange={this.onChangeInput} />
//           </div>
//           <div>
//             <label>Show navigation: </label>
//             <input
//               type="checkbox"
//               checked={this.state.showNavigation}
//               name="showNavigation"
//               onChange={(e) => {
//                 this.setState({ showNavigation: e.target.checked });
//               }}
//             />
//           </div>
//           <div>
//             <label>Enable swipe: </label>
//             <input
//               type="checkbox"
//               checked={this.state.enableSwipe}
//               name="enableSwipe"
//               onChange={(e) => {
//                 this.setState({ enableSwipe: e.target.checked });
//               }}
//             />
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 this.setState({ config: config.gentle });
//               }}
//               disabled={this.state.config === config.gentle}
//             >
//               Gentle Transition
//             </button>
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 this.setState({ config: config.slow });
//               }}
//               disabled={this.state.config === config.slow}
//             >
//               Slow Transition
//             </button>
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 this.setState({ config: config.wobbly });
//               }}
//               disabled={this.state.config === config.wobbly}
//             >
//               Wobbly Transition
//             </button>
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 this.setState({ config: config.stiff });
//               }}
//               disabled={this.state.config === config.stiff}
//             >
//               Stiff Transition
//             </button>
//             </div> */}
//         </div>
//       </div>
//     );
//   }
// }





// import React, { Component } from "react";
// import Carousel from "react-spring-3d-carousel";
// import { v4 as uuidv4 } from "uuid";
// import { config } from "react-spring";
import bg1 from "../../../image/bg1.jpg"
import bg2 from "../../../image/bg2.jpg"
import bg3 from "../../../image/bg3.jpg"
import bg4 from "../../../image/bg4.jpg"
import bg5 from "../../../image/bg5.jpg"
import bg6 from "../../../image/bg6.jpg"


// export default class Tool extends Component {
//   state = {
//     goToSlide: 1,
//     offsetRadius: 10,
//     showNavigation: true,
//     enableSwipe: true,
//     config: config.slow,
//     slides: [
//       {
//         key: uuidv4(),
//         content: <img  src={bg4} alt="Image 4" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg6} alt="Image 6" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg5} alt="Image 5" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg4} alt="Image 4" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg5} alt="Image 5" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg6} alt="Image 6" />, // Replace with your image URL
//       },
//       {
//         key: uuidv4(),
//         content: <img src={bg5} alt="Image 5" />, // Replace with your image URL
//       },
//       // {
//       //   key: uuidv4(),
//       //   content: "https://example.com/image7.jpg", // Replace with your image URL
//       // },
//       // {
//       //   key: uuidv4(),
//       //   content: "https://example.com/image8.jpg", // Replace with your image URL
//       // },
//     ],
//   };

//   onChangeInput = (e) => {
//     this.setState({
//       [e.target.name]: parseInt(e.target.value, 10) || 0,
//     });
//   };

//   handleTouchStart = (evt) => {
//     if (!this.state.enableSwipe) {
//       return;
//     }

//     const firstTouch = evt.touches[0];
//     this.setState({
//       ...this.state,
//       xDown: firstTouch.clientX,
//       yDown: firstTouch.clientY,
//     });
//   };

//   handleTouchMove = (evt) => {
//     if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
//       return;
//     }

//     let xUp = evt.touches[0].clientX;
//     let yUp = evt.touches[0].clientY;

//     let xDiff = this.state.xDown - xUp;
//     let yDiff = this.state.yDown - yUp;
//     if (Math.abs(xDiff) > Math.abs(yDiff)) {
//       if (xDiff > 0) {
//         /* left swipe */
//         this.setState({
//           goToSlide: this.state.goToSlide + 1,
//           xDown: null,
//           yDown: null,
//         });
//       } else {
//         /* right swipe */
//         this.setState({
//           goToSlide: this.state.goToSlide - 1,
//           xDown: null,
//           yDown: null,
//         });
//       }
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     switch (e.keyCode) {
//       case 37:
//         this.setState({ goToSlide: this.state.goToSlide - 1 });
//         break;
//       case 39:
//         this.setState({ goToSlide: this.state.goToSlide + 1 });
//         break;
//       default:
//         break;
//     }
//   };

//   render() {
//     return (
//       <div
//         style={{position:"absolute", width: "80%", height: "500px", margin: "0 auto" }}
//         onTouchStart={this.handleTouchStart}
//         onTouchMove={this.handleTouchMove}
//       >
//         <Carousel
//           slides={this.state.slides}
//           goToSlide={this.state.goToSlide}
//           offsetRadius={this.state.offsetRadius}
//           showNavigation={this.state.showNavigation}
//           animationConfig={this.state.config}
//         />
//         {/* <div
//           style={{
//             margin: "0 auto",
//             marginTop: "2rem",
//             width: "50%",
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//         </div> */}
//       </div>
//     );
//   }
// }

///////////////////////////////////////////////////


/* This is a React component that renders a carousel using the "react-spring-3d-carousel" library. The carousel slides are created by an array of objects, where each object contains a unique key generated using "uuidv4" and a content component "RandomImage". The component tracks the current slide, offset radius, and whether to show the navigation in its state. It also includes touch event handlers to allow for swipe navigation on mobile devices. The component allows for dynamic control over the slide position, offset radius and navigation display, by allowing the user to input values. */

import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Tool extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow
  };

  slides = [
          {
            key: uuidv4(),
            content: <img className="h-full w-full" src={bg4} alt="Image 4" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img className="h-full w-full" src={bg4} alt="Image 6" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img src={bg4} alt="Image 5" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img src={bg4} alt="Image 4" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img className="h-full w-full" src={bg4} alt="Image 5" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img className='h-full w-full'src={bg4} alt="Image 6" />, // Replace with your image URL
          },
          {
            key: uuidv4(),
            content: <img className="h-full w-full" src={bg4} alt="Image 5" />, // Replace with your image URL
          },
          // {
          //   key: uuidv4(),
          //   content: "https://example.com/image7.jpg", // Replace with your image URL
          // },
          // {
          //   key: uuidv4(),
          //   content: "https://example.com/image8.jpg", // Replace with your image URL
          // },
        ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        this.setState({ goToSlide: this.state.goToSlide - 1 });
        break;
      case 39:
        this.setState({ goToSlide: this.state.goToSlide + 1 });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
        style={{position:"absolute", left:"130px", width: "80%", height: "300px", margin: "0 auto" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          {/*         <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <label>Enable swipe: </label>
            <input
              type="checkbox"
              checked={this.state.enableSwipe}
              name="enableSwipe"
              onChange={(e) => {
                this.setState({ enableSwipe: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
            </div> */}
        </div>
      </div>
    );
  }
}
