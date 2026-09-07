import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YOUTUBE_VIDEO_ID = 'ym4o5F8ncY0';
const START_TIME_SEC = 15;

interface DevotionalAudioPlayerProps {
  shouldPlay: boolean;
}

export function DevotionalAudioPlayer({ shouldPlay }: DevotionalAudioPlayerProps) {
  const playerRef = useRef<any>(null);
  const isReadyRef = useRef(false);
  const shouldPlayRef = useRef(shouldPlay);

  // Keep shouldPlayRef in sync
  useEffect(() => {
    shouldPlayRef.current = shouldPlay;
  }, [shouldPlay]);

  // Initialize YouTube Iframe API
  useEffect(() => {
    let isMounted = true;

    function createPlayer() {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) return;

      const playerElement = document.getElementById('youtube-hidden-player');
      if (!playerElement) return;

      playerRef.current = new window.YT.Player('youtube-hidden-player', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0, // Never play on initial page load
          start: START_TIME_SEC,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID, // Required for loop in YouTube iframe API
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            if (!isMounted) return;
            isReadyRef.current = true;
            // If user already opened the letter while iframe was initializing
            if (shouldPlayRef.current) {
              try {
                event.target.unMute();
                event.target.setVolume(100);
                event.target.seekTo(START_TIME_SEC, true);
                event.target.playVideo();
              } catch (e) {
                console.warn('Playback error on ready:', e);
              }
            }
          },
          onError: (err: any) => {
            console.warn('Devotional player notice:', err);
          },
        },
      });
    }

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (isMounted) {
          createPlayer();
        }
      };
    } else {
      createPlayer();
    }

    return () => {
      isMounted = false;
      try {
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          playerRef.current.destroy();
        }
      } catch {
        // ignore cleanup
      }
    };
  }, []);

  // Handle play / pause based on whether the letter is opened
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current) return;

    try {
      if (shouldPlay) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        const currTime = playerRef.current.getCurrentTime?.() || 0;
        if (currTime < START_TIME_SEC) {
          playerRef.current.seekTo(START_TIME_SEC, true);
        }
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (err) {
      console.warn('Error updating playback state:', err);
    }
  }, [shouldPlay]);

  return (
    <div 
      className="fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden z-[-1]" 
      aria-hidden="true"
    >
      <div id="youtube-hidden-player" />
    </div>
  );
}
