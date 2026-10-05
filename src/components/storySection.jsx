const StorySection = ({ children }) => {
  return (
    <section className="flex flex-col max-w-full mx-20 gap-4 items-center  bg-[#f7879a] overflow-visible py-4 px-8 rounded-2xl shadow-2xl">
      {children}
    </section>
  );
};

export default StorySection;
