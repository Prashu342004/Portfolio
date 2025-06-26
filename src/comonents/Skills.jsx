const Skills = () => {
  return (
    <div className="mx-5 my-10">
      <h3 className="subHeading mb-6">Skills</h3>
      <div className=" h-fit mx-auto bg-[rgba(148,87,33,.2)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-3/5  ">
      {/* create react componet for skill div */}
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor)">
          <img className="rounded-xl" src="https://th.bing.com/th?q=React+Icon.png&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
        </div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor)"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
        <div className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor) opacity-100"></div>
      </div>
    </div>
  );
};

export default Skills;
