import React from "react";

const Summary = (props) => {
  return (
    <div className="summary 篇">
      <div className="summary__name">Yi Liu</div>
      <div className="summary__title">Web Developer & Software Developer</div>
      <div className="summary__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        tristique, enim maximus facilisis scelerisque, mi tortor venenatis
        lectus, sit amet ultricies purus tortor quis ligula. Integer a auctor
        neque. Vivamus magna sem, iaculis eget facilisis non, auctor at nisl.
        Praesent eu mi vitae felis viverra viverra. Donec vel nunc lacus.
        Vivamus finibus felis imperdiet, fermentum enim id, porttitor nisl.
        Aliquam in sapien orci.
      </div>

      <div className="summary__button"></div>
    </div>
  );
};

export default Summary;
