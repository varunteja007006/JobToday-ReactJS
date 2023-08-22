function FormField({ label, type, name, value, handleChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-500"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default FormField;
