export interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({
  children,
  isActive,
  ...props
}: TabButtonProps) {
  return (
    <li>
      <button className={isActive ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
