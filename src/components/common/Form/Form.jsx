export const Form = ({
  children,
  className,
  onSubmit: submitCallback,
  isError,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      {isError && <pre style={{color: 'red'}}>{isError}</pre>}
      {children}
    </form>
  );
};
