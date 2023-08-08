import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
     {amount}
  </p>
);

export default Price;
