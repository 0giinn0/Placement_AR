import type { PlatformMode } from './types';

export async function detectPlatform(): Promise<PlatformMode> {
  const isWebXRSupported = 'xr' in navigator;

  if (isWebXRSupported) {
    try {
      const isARSupported = await navigator.xr!.isSessionSupported('immersive-ar');
      if (isARSupported) return 'full-ar';
    } catch {
      // XR API available but AR not supported
    }
  }

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) return 'screen-ar';

  return 'desktop-3d';
}

export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getCameraStream(): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment',
      width: { ideal: 1920 },
      height: { ideal: 1080 },
    },
  });
}
