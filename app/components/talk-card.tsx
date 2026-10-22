"use client";

import { useState } from "react";

function youtubeId(url: string) {
  return url.split("v=")[1]?.split("&")[0] ?? "";
}

export function TalkCard({ title, url, kind }: { title: string; url: string; kind: string }) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(url);

  return (
    <figure className="talk">
      <div className="talk-media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="talk-thumb" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
            <span
              className="thumb-img"
              style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
            />
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <span className="talk-kind">{kind}</span>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </figcaption>
    </figure>
  );
}
