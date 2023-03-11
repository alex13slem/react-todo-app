export const MySelect = ({
  className,
  options,
  defaultOption,
  value,
  onChange,
}) => {
  return (
    <select
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
