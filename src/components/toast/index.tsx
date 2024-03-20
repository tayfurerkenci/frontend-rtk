import { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  if (!active) return null;

  let color = '';
  switch (type) {
    case 'success':
      color = 'is-success';
      break;
    case 'error':
      color = 'is-danger';
      break;
    case 'warning':
      color = 'is-warning';
      break;
    default:
      color = 'is-info';
      break;
  }

  return (
    <div className={`notification ${color}`}>
      <button type="button" className="delete" onClick={() => setActive(false)} />
      {message}
    </div>
  );
};

export default Toast;
