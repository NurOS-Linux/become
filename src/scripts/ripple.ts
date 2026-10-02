const GROW_MS = 450;
const MIN_PRESS_MS = 225;
const FADE_MS = 375;

function startRipple(event: PointerEvent) {
  const host = event.currentTarget as HTMLElement;
  const rect = host.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = `${radius * 2}px`;
  ripple.style.left = `${x - radius}px`;
  ripple.style.top = `${y - radius}px`;
  host.append(ripple);

  ripple.animate([{ transform: 'scale(0.2)' }, { transform: 'scale(1)' }], {
    duration: GROW_MS,
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    fill: 'forwards',
  });

  const pressedAt = performance.now();
  const release = () => {
    host.removeEventListener('pointerup', release);
    host.removeEventListener('pointerleave', release);
    host.removeEventListener('pointercancel', release);
    const wait = Math.max(0, MIN_PRESS_MS - (performance.now() - pressedAt));
    setTimeout(() => {
      ripple
        .animate([{ opacity: getComputedStyle(ripple).opacity }, { opacity: 0 }], { duration: FADE_MS, easing: 'linear', fill: 'forwards' })
        .finished.then(() => ripple.remove());
    }, wait);
  };
  host.addEventListener('pointerup', release);
  host.addEventListener('pointerleave', release);
  host.addEventListener('pointercancel', release);
}

document.querySelectorAll<HTMLElement>('.btn, .nav-item').forEach((element) => {
  element.addEventListener('pointerdown', startRipple);
});
