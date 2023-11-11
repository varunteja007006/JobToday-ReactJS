/* eslint-disable react/prop-types */

function FormSelect({ label, name, value, optionList, handleChange }) {
  return (
    <>
      <label className="capitalize" htmlFor={name}>{label}</label>

      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="p-2 bg-white border border-gray-500"
      >
        {optionList.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FormSelect;
