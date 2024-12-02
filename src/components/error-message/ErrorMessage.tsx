interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage = ({ message, className = '' }: ErrorMessageProps) => {
  return (
    <div className={`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 ${className}`}>
      <div className="flex items-center">
        <svg
          className="h-5 w-5 text-red-400 dark:text-red-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-red-700 dark:text-red-200">{message}</p>
      </div>
    </div>
  );
};
