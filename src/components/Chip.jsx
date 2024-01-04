import classNames from "classnames";

const Chip = (props) => {
  return (
    <div
      className={classNames(
        "relative inline max-w-min select-none items-center whitespace-nowrap rounded-full bg-gray-900/20 py-1.5 px-3 mr-1 font-sans text-xs font-semibold uppercase text-gray-900",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Chip;
