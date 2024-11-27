export interface TabProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer?: React.ElementType;
}

export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
}: TabProps) {
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
