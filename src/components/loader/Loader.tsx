interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loader = ({ size = 'md', className = '' }: LoaderProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-2',
  };

  return (
    <div className={`animate-spin rounded-full border-t-indigo-500 border-b-indigo-500 dark:border-t-indigo-400 dark:border-b-indigo-400 ${sizeClasses[size]} ${className}`} />
  );
};
