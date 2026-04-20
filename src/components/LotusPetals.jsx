import React from 'react';

const SPEED_MULTIPLIER = 0.95;

const PETALS = [
  { left: '4%', size: 34, delay: '0s', duration: '15s', drift: '-28px', rotate: '-18deg' },
  { left: '11%', size: 22, delay: '-4s', duration: '13s', drift: '26px', rotate: '22deg' },
  { left: '18%', size: 30, delay: '-8s', duration: '17s', drift: '-18px', rotate: '-12deg' },
  { left: '27%', size: 20, delay: '-2s', duration: '12s', drift: '22px', rotate: '18deg' },
  { left: '35%', size: 28, delay: '-6s', duration: '16s', drift: '-24px', rotate: '-20deg' },
  { left: '43%', size: 24, delay: '-10s', duration: '14s', drift: '18px', rotate: '16deg' },
  { left: '52%', size: 36, delay: '-1s', duration: '18s', drift: '-30px', rotate: '-26deg' },
  { left: '61%', size: 21, delay: '-7s', duration: '13s', drift: '20px', rotate: '24deg' },
  { left: '69%', size: 29, delay: '-11s', duration: '17s', drift: '-22px', rotate: '-14deg' },
  { left: '77%', size: 23, delay: '-3s', duration: '12.5s', drift: '24px', rotate: '18deg' },
  { left: '84%', size: 31, delay: '-9s', duration: '16.5s', drift: '-20px', rotate: '-24deg' },
  { left: '92%', size: 26, delay: '-5s', duration: '14.5s', drift: '16px', rotate: '20deg' }
];

function LotusPetals({ className = '' }) {
  return (
    <div className={`lotus-petals ${className}`.trim()} aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={`${petal.left}-${index}`}
          className="lotus-petal"
          style={{
            '--petal-left': petal.left,
            '--petal-size': `${petal.size}px`,
            '--petal-delay': petal.delay,
            '--petal-duration': `${parseFloat(petal.duration) * SPEED_MULTIPLIER}s`,
            '--petal-drift': petal.drift,
            '--petal-rotate': petal.rotate
          }}
        ></span>
      ))}
    </div>
  );
}

export default LotusPetals;
