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
            <a className="me" href="/" title="Yogi Suria — the 3D portfolio">
              <img src="/profile.jpg" alt="" width="30" height="30" />
              <span className="me-n">Yogi Suria</span>
              <span className="pill-note">Design engineer</span>
            </a>
          </div>
          <div className="bar-r">
            <a
              className="pill icon"
              href="https://x.com/suriadesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yogi on X"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <a
              className="pill icon"
              href="mailto:hello@ysuriadesign.co"
              aria-label="Email hello@ysuriadesign.co"
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
            <a
              className="pill icon"
              href="https://t.me/runnersedge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yogi on Telegram, @runnersedge"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <path
                  d="M20.6 4.3 3.4 11c-.8.3-.8 1.4 0 1.7l4.2 1.4 1.6 5c.2.7 1 .9 1.5.4l2.4-2.3 4.4 3.2c.6.4 1.4.1 1.6-.6l2.8-13.9c.2-.8-.6-1.4-1.3-1.1Z M8 14 17.5 7.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <button className="pill icon" id="theme-btn" type="button" aria-label="Switch to light">
              <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
                <circle cx="8" cy="8" r="5.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 2.4a5.6 5.6 0 0 1 0 11.2z" fill="currentColor" />
              </svg>
            </button>
            <span className="pill clock" title="Yogi’s local time, India">
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
        <h1 className="vh">Yogi Suria — design engineer</h1>
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
