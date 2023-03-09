export const MySelect = ({options, defaultOption, value, onChange}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
