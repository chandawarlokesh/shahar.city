const AppHeader = () => {
  return (
    <div className="flex w-full justify-between items-center absolute top-0 z-500 mt-6">
      <img alt="logo" className="ml-12 w-16 h-16" src={require("./logo.png")} />
      <img
        class="mr-12 w-12 h-12 rounded-full"
        src={require("./user.png")}
        alt="Rounded avatar"
      />
    </div>
  );
};

export default AppHeader;
