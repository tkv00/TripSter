import React from 'react';

const PlaneAnimation = () => {
    return (
        <div style={{
            backgroundColor: 'transperent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            margin: 0,
        }}>
            <svg width="1920" height="931" viewBox="0 0 1920 931" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 비행기가 따라갈 경로 */}
                <path id="flightPath" d="M10,920 C490,700 1430,700 1910,10" stroke="white" strokeWidth="2" fill="none"/>
                {/* 비행기 모양 */}
                <g fill="white">
                    <path id="plane" d="M30,900 L60,920 L30,940 L0,920 Z" fill="red"/>
                    <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#flightPath"/>
                    </animateMotion>
                </g>
            </svg>
        </div>
    );
};

export default PlaneAnimation;
