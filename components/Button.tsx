
interface IButton  {
    onClick: () => void;
    children: React.ReactNode;
}
function Button({onClick, children, ...rest}: IButton & Record<string, any>) {
  return (
    <button onClick={onClick} {...rest}>{children}</button>
  )
}

export default Button