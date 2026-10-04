const StorySection = ({ children }) => {
  return (
    <section className="flex flex-col max-w-full mx-20 gap-4 items-center min-h-125 bg-[#f7879a] py-4 px-8 rounded-2xl shadow-2xl">
      {children}
    </section>
  );
};

export default StorySection;
