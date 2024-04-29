const Button = ({ children, variant, ...rest }) => {
  return (
    <button
      className={`${
        variant == "primary"
          ? "text-white bg-secondary hover:bg-third"
          : "bg-third text-white"
      } w-full py-2 rounded-md flex items-center justify-center gap-2 hover:scale-[1.005]  duration-200 ease-in-out`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
