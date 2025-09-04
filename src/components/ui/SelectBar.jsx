import Select from "react-select";

export default function SelectBar({ options, ...props }) {
  return (
    <Select
      options={options}
      classNamePrefix="select"
      className="select select-sm w-[120px] select-control min-h-10 bg-gray-100 dark:bg-gray-700"
      unstyled
      menuPortalTarget={document.body}
      styles={{
        control: (base, state) => ({
          ...base,
        }),
        valueContainer: (base) => ({
          ...base,
        }),
        indicatorsContainer: (base) => ({
          ...base,
          paddingRight: "0.5rem",
        }),
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        menu: (base) => ({
          ...base,
          marginTop: "0.25rem",
          borderRadius: "0.5rem",
          backgroundColor: "white",
          border: "1px solid #e5e7eb", // gray-200
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", // shadow-lg
        }),
        option: (base, state) => ({
          ...base,
          padding: "0.5rem 0.75rem",
          fontSize: "0.875rem", // text-sm
          backgroundColor: state.isSelected
            ? "#3b82f6" // blue-500
            : state.isFocused
            ? "#eff6ff" // blue-50
            : "white",
          color: state.isSelected ? "white" : "#111827", // white : gray-900
          cursor: "pointer",
        }),
      }}
      {...props}
    />
  );
}
