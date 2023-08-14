import clsx from 'clsx';
import Image from 'next/image';
import Label from './label';

export function ProductCard({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-2 bg-white border-gray-900 hover:border-blue-600 ',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200': !active
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
            className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
