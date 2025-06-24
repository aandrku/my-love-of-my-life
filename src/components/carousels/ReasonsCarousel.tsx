import useEmblaCarousel from 'embla-carousel-react';

interface Props {
  reasons: string[];
}

export function ReasonsCarousel(props: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {props.reasons.map((reason) => {
          return (
            <div className="flex w-full flex-none items-center justify-center">
              <div className="bg-bg1 border-accent-border3 text-accent-text1 w-10/12 rounded-2xl border p-8 text-center text-4xl">
                {reason}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
