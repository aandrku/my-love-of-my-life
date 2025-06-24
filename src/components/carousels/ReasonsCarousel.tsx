import useEmblaCarousel from 'embla-carousel-react';

interface Props {
  reasons: string[];
}

export function ReasonsCarousel(props: Props) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {props.reasons.map((reason) => {
          return (
            <div className="border-border2 w-full flex-none border">
              {reason}
            </div>
          );
        })}
      </div>
    </div>
  );
}
