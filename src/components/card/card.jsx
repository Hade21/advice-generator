import React from "react";
import Logo from "../../images/icon-dice.svg";

const Card = (props) => {
  return (
    <div className="card bg-dark-grayish-blue rounded-lg sm:w-1/2 md:w-1/3 w-5/6 text-center pt-8 mx-auto relative top-1/4 shadow-xl">
      <div className="text pb-6">
        <h3 className="font-manrope text-neon-green mb-4 tracking-[5px] text-sm">
          ADVICE #<span className="id">{props.adid}</span>
        </h3>
        <h1 className="font-manrope text-light-cyan text-4xl px-8">
          "<span>{props.advice}</span>"
        </h1>
      </div>
      <div className="bottomline flex justify-around items-center px-8">
        <div className="line bg-slate-600 h-px w-2/5"></div>
        <div className="strip flex gap-2">
          <div className="strip bg-light-cyan w-1 h-4 rounded-full"></div>
          <div className="strip bg-light-cyan w-1 h-4 rounded-full"></div>
        </div>
        <div className="line bg-slate-600 h-px w-2/5"></div>
      </div>
      <div
        className="dice relative p-3 w-fit bg-neon-green rounded-full left-[calc(50%-24px)] -bottom-6 cursor-pointer hover:shadow-xl hover:shadow-neon-green"
        onClick={props.click}
      >
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Card;
