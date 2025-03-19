import React from "react";

export default function Preloader() {
    return (
        <>
            <style>
                {`
                .preloader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 10000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100dvh;
                    transition: opacity 0.3s;
                    background-color: #fff;
                }
                .preloader.loaded {
                    opacity: 1;
                }
                .loader {
                    color: #0401FF;
                    width: 4px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
                    transform: translateX(-38px);
                    animation: l21 .5s infinite alternate linear;
                }
                @keyframes l21 {
                    50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
                    100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
                }
                `}
            </style>
            <div className="preloader">
                <div className="loader"></div>
            </div>
        </>
    );
}