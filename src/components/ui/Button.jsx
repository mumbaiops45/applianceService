// components/ui/Button.jsx

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    white: 'bg-white text-blue-600 hover:bg-gray-50 shadow-md',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}