import { cn } from '@/lib/utils/_styles'

const SingleWave = ({
  className,
  opacity,
  delay,
  duration, // 1. Thêm prop duration
}: {
  className: string
  opacity: string
  delay: string
  duration?: string // Optional
}) => (
  <use
    href="#gentle-wave"
    x="48"
    y="0"
    className={`fill-water-light dark:fill-water-dark ${className}`}
    style={{
      opacity: opacity,
      animationDelay: delay,
      animationDuration: duration, // 2. Ghi đè tốc độ tại đây
    }}
  />
)

export default function OceanWaves({
  classNames,
}: {
  classNames?: { wrapper?: string }
}) {
  return (
    <div className={cn('relative', classNames?.wrapper)}>
      <div className="w-full h-48 bg-background dark:bg-background"></div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-37.5"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>

          {/* --- LỚP SÓNG SAU (Nền: Chạy vừa phải) --- */}
          <g>
            <SingleWave
              className="animate-wave-medium"
              opacity="0.7"
              delay="-5s"
              duration="12s" // Nhanh hơn (Cũ: ~20s)
            />
            <SingleWave
              className="animate-wave-slow"
              opacity="0.5"
              delay="-7s"
              duration="15s" // Nhanh hơn
            />
          </g>

          {/* --- LỚP SÓNG TRƯỚC (Sôi động: Chạy rất nhanh) --- */}
          <g>
            <SingleWave
              className="animate-wave-fast"
              opacity="0.3"
              delay="-2s"
              duration="5s" // Rất nhanh (Cũ: 10s)
            />
            <SingleWave
              className="animate-wave-turbo"
              opacity="0.9"
              delay="-1s"
              duration="3s" // Siêu nhanh (Turbo)
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
