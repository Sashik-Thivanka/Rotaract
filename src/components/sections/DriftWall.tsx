import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

export interface DriftWallItem {
  image: string;
  title?: string;
  href?: string;
}

interface DriftWallProps {
  items: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: 'up' | 'down';
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  overlayColor?: string;
  grayscale?: boolean;
  offsetX?: number;
  className?: string;
  style?: React.CSSProperties;
}

const columnFactor = (index: number, variance: number) => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function DriftWall({
  items,
  columns = 5,
  tileWidth = 200,
  tileHeight = 132,
  gap = 18,
  radius = 14,
  tilt = 16,
  turn = -14,
  roll = 0,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = 'up',
  variance = 0.45,
  parallax = 0.6,
  pauseOnHover = false,
  lift = 64,
  fade = 0.6,
  dim = 0.55,
  overlayColor = '#060010',
  grayscale = false,
  offsetX = 0,
  className = '',
  style,
}: DriftWallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const hoveredColRef = useRef(-1);
  const wallHoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const [containerHeight, setContainerHeight] = useState(600);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);

  const columnItems = useMemo(() => {
    const cols = Array.from({ length: columns }, () => [] as DriftWallItem[]);
    items.forEach((item, index) => cols[index % columns].push(item));
    return cols.map((column) => (column.length ? column : items.slice(0, 1)));
  }, [items, columns]);

  const columnMeta = useMemo(() => {
    const unit = tileHeight + gap;
    return columnItems.map((column) => {
      const copyHeight = Math.max(unit, column.length * unit);
      const copies = Math.max(2, Math.ceil((containerHeight * 1.6) / copyHeight) + 1);
      return { copyHeight, copies };
    });
  }, [columnItems, tileHeight, gap, containerHeight]);

  const baseVelocities = useMemo(() => {
    const directionSign = direction === 'up' ? 1 : -1;
    return columnItems.map((_, column) => {
      const alternateSign = column % 2 === 0 ? 1 : -1;
      return speed * columnFactor(column, variance) * directionSign * alternateSign;
    });
  }, [columnItems, speed, direction, variance]);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height || 600);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, column) => meta.copyHeight * ((column * 0.37) % 1));
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback(
    (pointerX: number, pointerY: number) => {
      const plane = planeRef.current;
      if (!plane) return;
      plane.style.transform =
        `translate(calc(-50% + ${offsetX}px), -50%) scale(1.18) rotateX(${tilt + pointerY}deg) ` +
        `rotateY(${turn + pointerX}deg) rotateZ(${roll}deg) translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth, offsetX]
  );

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (lastTsRef.current === null) lastTsRef.current = timestamp;
      const delta = Math.min(0.05, Math.max(0, timestamp - lastTsRef.current) / 1000);
      lastTsRef.current = timestamp;

      const maxTilt = parallax * 8;
      const targetX = pointerRef.current.x * maxTilt;
      const targetY = -pointerRef.current.y * maxTilt;
      const damping = 1 - Math.exp(-delta / 0.12);
      pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damping;
      pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damping;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

      columnMeta.forEach((meta, column) => {
        const track = trackRefs.current[column];
        if (!track) return;
        const paused = wallHoveredRef.current && pauseOnHover;
        const factor = paused ? 0 : 1;
        const target = reduced ? 0 : baseVelocities[column] * factor;
        const easing = 1 - Math.exp(-delta / (target === 0 ? 0.16 : 0.28));
        velocitiesRef.current[column] += (target - velocitiesRef.current[column]) * easing;
        let next = (offsetsRef.current[column] ?? 0) + velocitiesRef.current[column] * delta;
        next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
        offsetsRef.current[column] = next;
        track.style.transform = `translate3d(0, ${-next}px, 0)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [applyPlaneTransform, baseVelocities, columnMeta, parallax, pauseOnHover, reduced]);

  const activate = useCallback((id: string, column: number) => {
    activeIdRef.current = id;
    hoveredColRef.current = column;
    setActiveId(id);
  }, []);

  const release = useCallback(() => {
    activeIdRef.current = null;
    hoveredColRef.current = -1;
    setActiveId(null);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        };
      }
      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const tile = hit?.closest('[data-tile-id]');
      if (!tile) return;
      const id = tile.getAttribute('data-tile-id');
      if (!id || id === activeIdRef.current) return;
      activate(id, Number(tile.getAttribute('data-col')));
    },
    [activate, parallax, reduced]
  );

  const cssVars = useMemo(
    () =>
      ({
        '--dw-tile-w': `${tileWidth}px`,
        '--dw-tile-h': `${tileHeight}px`,
        '--dw-gap': `${gap}px`,
        '--dw-radius': `${radius}px`,
        '--dw-lift': `${lift}px`,
        '--dw-dim': dim,
        '--dw-gray': grayscale ? 1 : 0,
        '--dw-overlay': overlayColor,
        '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%`,
        perspective: `${perspective}px`,
        perspectiveOrigin: '50% 50%',
        WebkitMaskImage:
          'radial-gradient(ellipse 78% 82% at 50% 46%, #000 var(--dw-edge), transparent 100%), linear-gradient(to top, #000 var(--dw-edge), transparent 100%)',
        maskImage:
          'radial-gradient(ellipse 78% 82% at 50% 46%, #000 var(--dw-edge), transparent 100%), linear-gradient(to top, #000 var(--dw-edge), transparent 100%)',
        ...style,
      } as React.CSSProperties),
    [tileWidth, tileHeight, gap, radius, lift, dim, grayscale, overlayColor, fade, perspective, style]
  );

  const renderTile = (item: DriftWallItem, id: string, column: number) => {
    const inner = (
      <span className="pointer-events-none absolute inset-[calc(var(--dw-gap)/2)] block overflow-hidden rounded-[var(--dw-radius)] bg-[#0b0b12] opacity-[var(--dw-dim)] transition-[transform,opacity,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-[.is-active]/tile:opacity-100 group-[.is-active]/tile:[transform:translateZ(var(--dw-lift))] group-[.is-active]/tile:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7)] group-focus-visible/tile:opacity-100 group-focus-visible/tile:[transform:translateZ(var(--dw-lift))]">
        <img
          src={item.image}
          alt={item.title ?? ''}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="block h-full w-full select-none object-cover [filter:grayscale(var(--dw-gray))_saturate(0.92)] transition-[filter] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-[.is-active]/tile:[filter:grayscale(0)_saturate(1.05)] group-focus-visible/tile:[filter:grayscale(0)_saturate(1.05)]"
        />
        <span className="pointer-events-none absolute inset-0 bg-[var(--dw-overlay)] opacity-[0.42] transition-opacity duration-[420ms] group-[.is-active]/tile:opacity-0" aria-hidden="true" />
      </span>
    );
    const commonProps = {
      className: `group/tile relative block h-[calc(var(--dw-tile-h)+var(--dw-gap))] w-full flex-none cursor-pointer outline-none ${activeId === id ? 'is-active' : ''}`,
      'data-tile-id': id,
      'data-col': column,
      onFocus: () => activate(id, column),
      onBlur: release,
    };

    if (item.href) {
      return <a key={id} href={item.href} target="_blank" rel="noreferrer noopener" {...commonProps}>{inner}</a>;
    }
    return <div key={id} tabIndex={0} role="button" aria-label={item.title ?? 'Gallery tile'} {...commonProps}>{inner}</div>;
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => { wallHoveredRef.current = true; }}
      onPointerLeave={() => {
        wallHoveredRef.current = false;
        pointerRef.current = { x: 0, y: 0 };
        release();
      }}
      role="group"
      aria-label="Drifting wall of gallery tiles"
    >
      <div ref={planeRef} className="absolute left-1/2 top-1/2 flex cursor-pointer flex-row [transform-style:preserve-3d] [transform-origin:50%_50%] will-change-transform">
        {columnItems.map((columnItemsForColumn, column) => {
          const meta = columnMeta[column];
          return (
            <div className="relative w-[calc(var(--dw-tile-w)+var(--dw-gap))] [transform-style:preserve-3d]" key={`column-${column}`}>
              <div className="flex flex-col [transform-style:preserve-3d] will-change-transform" ref={(element) => { trackRefs.current[column] = element; }}>
                {Array.from({ length: meta.copies }).flatMap((_, copyIndex) =>
                  columnItemsForColumn.map((item, itemIndex) => renderTile(item, `${column}-${copyIndex}-${itemIndex}`, column))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}