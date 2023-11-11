import PropTypes from "prop-types";

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  optionList: PropTypes.any,
  handleChange: PropTypes.func,
};

function FormField({ label, type, name, value, handleChange }) {
  return (
    <>
      <label className="capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        className="border border-gray-500 bg-white text-black p-2"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default FormField;
