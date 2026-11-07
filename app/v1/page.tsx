'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

export default function V1Page() {
  useEffect(() => {
    // Add theme attribute to documentElement
    document.documentElement.dataset.theme = 'dark';
    try {
      const t = localStorage.getItem('pg.theme');
      if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
    } catch {}

    // Load v1 stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/index-BVlPseOz.css';
    link.id = 'v1-css';
    document.head.appendChild(link);

    // Load v1 script
    const script = document.createElement('script');
    script.id = 'v1-script';
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.src = '/assets/index-YvKAThsl.js';
    document.body.appendChild(script);

    return () => {
      const elCss = document.getElementById('v1-css');
      if (elCss) elCss.remove();
      const elJs = document.getElementById('v1-script');
      if (elJs) elJs.remove();
      delete document.documentElement.dataset.theme;
    };
  }, []);

  return (
    <div className="v1-container">
      <header className="bar">
        <div className="bar-in">
          <div className="bar-l">
            <a className="me" href="/" title="Harshit Mishra — the 3D portfolio">
              <span className="me-n">Harshit Mishra</span>
              <span className="pill-note">Design engineer</span>
            </a>
          </div>
          <div className="bar-r">
            <a
              className="pill icon"
              href="https://www.linkedin.com/in/harshit-mishra-7264b4431/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harshit on LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M5.08 18.5h2.76v-8.37H5.08v8.37Z" />
              </svg>
            </a>
            <a
              className="pill icon"
              href="mailto:harshit9497@gmail.com"
              aria-label="Email harshit9497@gmail.com"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m4 7.5 8 5.5 8-5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button className="pill icon" id="theme-btn" type="button" aria-label="Switch to light">
              <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
                <circle cx="8" cy="8" r="5.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 2.4a5.6 5.6 0 0 1 0 11.2z" fill="currentColor" />
              </svg>
            </button>
            <span className="pill clock" title="Harshit’s local time, India">
              <span className="clock-dot" aria-hidden="true"></span>
              <time id="clock"></time>
              <span className="clock-z">IST</span>
            </span>
          </div>
        </div>
      </header>

      {/* the way out: to the 3D portfolio */}
      <a className="out" href="/" aria-label="Visit my crazier portfolio, ysuriadesign.co">
        <span className="pill">Visit crazier portfolio</span>
        <span className="pill icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path
              d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <main className="desk" id="desk">
        <h1 className="vh">Harshit Mishra — design engineer</h1>
      </main>

      <div
        className="sheet"
        id="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        hidden
      >
        <div className="sheet-back" data-close></div>
        <div className="sheet-card">
          <header className="sheet-head">
            <div className="sheet-name">
              <h2 id="sheet-title"></h2>
              <span className="sheet-tag" id="sheet-tag"></span>
            </div>
            <button className="pill icon" type="button" data-close aria-label="Close">
              <svg viewBox="0 0 12 12" width="14" height="14" aria-hidden="true">
                <path d="M3.5 3.5l5 5m0-5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </header>
          <p className="sheet-desc" id="sheet-desc"></p>
          <div className="sheet-media" id="sheet-media"></div>
        </div>
      </div>

      <svg className="defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="trail" x="-60%" y="-2%" width="220%" height="104%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="18 0" />
        </filter>
      </svg>
    </div>
  );
}
