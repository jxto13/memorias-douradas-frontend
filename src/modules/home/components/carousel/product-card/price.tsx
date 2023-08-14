
const Price = ({
  amount,
  className
}: {
  amount: string;
  className?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
     {amount}
  </p>
);

export default Price;
