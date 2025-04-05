export const Card = ({ children, className }) => (
  <div className={`border rounded-xl shadow-sm ${className}`}>{children}</div>
);
export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
