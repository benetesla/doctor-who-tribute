import React from "react";
import "./style.css";

export const DoctorWhoTribute = (): JSX.Element => {
  return (
    <div className="doctor-who-tribute">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="img" alt="Bg" src="https://c.animaapp.com/FUgcKINs/img/bg-2.png" />
          <img className="img" alt="Bg" src="https://c.animaapp.com/FUgcKINs/img/bg-1.png" />
          <img
            className="img"
            alt="Desktop wallpaper"
            src="https://c.animaapp.com/FUgcKINs/img/desktop-wallpaper-doctor-who-dr-who-1.png"
          />
          <div className="player">
            <div className="buttons">
              <div className="go-to-series">
                <div className="text-wrapper">Go to Series</div>
              </div>
            </div>
            <div className="play-from-beginning">
              <img className="icon" alt="Icon" src="https://c.animaapp.com/FUgcKINs/img/icon.svg" />
              <div className="text-wrapper">From Beginning</div>
            </div>
            <p className="os-weeping-angels-ou">
              <span className="span">
                Os Weeping Angels ou Anjos Lamentadores, <br />
                são uma raça de criaturas predadoras da longa série de{" "}
              </span>
              <a
                href="https://pt.wikipedia.org/wiki/Fic%C3%A7%C3%A3o_cient%C3%ADfica"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-2">ficção científica</span>
              </a>
              <span className="span">
                {" "}
                da
                <br />{" "}
              </span>
              <a href="https://pt.wikipedia.org/wiki/BBC" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">BBC</span>
              </a>
              <span className="span">&nbsp;</span>
              <a href="https://pt.wikipedia.org/wiki/Doctor_Who" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">Doctor Who</span>
              </a>
              <span className="span">
                , assemelhando-se a estátuas de pedra. <br />
                Também são conhecidos como &#34;Os Assassinos Solitários&#34; <br />e foram introduzidos no episódio
                &#34;Não Pisque&#34; (
              </span>
              <a href="https://pt.wikipedia.org/wiki/2007" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">2007</span>
              </a>
              <span className="span">
                ), <br />
                fazendo aparições repetidas em &#34;O Tempo dos Anjos&#34; / &#34;Carne e Pedra&#34; (
              </span>
              <a href="https://pt.wikipedia.org/wiki/2010" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">2010</span>
              </a>
              <span className="span">) e &#34;Os Anjos Dominam Manhattan&#34; (</span>
              <a href="https://pt.wikipedia.org/wiki/2012" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">2012</span>
              </a>
              <span className="span">), bem como aparições em &#34;O Complexo de Deus&#34; (</span>
              <a href="https://pt.wikipedia.org/wiki/2011" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">2011</span>
              </a>
              <span className="span">) e &#34;A Hora do Doutor&#34; (</span>
              <a href="https://pt.wikipedia.org/wiki/2013" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-2">2013</span>
              </a>
              <span className="span">).</span>
            </p>
            <div className="tabs">
              <div className="info">
                <div className="div">Info</div>
              </div>
            </div>
            <img className="close" alt="Close" src="https://c.animaapp.com/FUgcKINs/img/close.svg" />
            <img className="download" alt="Download" src="https://c.animaapp.com/FUgcKINs/img/download-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
