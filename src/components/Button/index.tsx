import { ButtonProps } from "./types";

export const Button = ({
  title,
  color = 'primary',
  variant = 'filled',
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {

  let bgColor = '';

  switch(color) {
    case 'primary':
      bgColor = 'bg-primary text-white';
      break;
    case 'secondary':
      bgColor = `bg-secondary-container text-on-secondary-container ${variant === 'outlined' ? 'hover:border-secondary' : '' }`;
      break;
  }

  const outlined = 'px-4 border-outline hover:border-primary'

  return (
    <button
      {...rest}
      className="h-10 flex items-center justify-center bg-primary text-white
        rounded-full px-3 label-large hover:elevation-1 w-full"
    >
      {title}
    </button>
  );
};
