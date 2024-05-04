function Quotes({ quotes, author }) {
  return (
    <div className="p-12">
      <div className="bg-[#1F2937] text-[#fff] p-8 rounded-lg shadow-xl">
        <p className="text-3xl font-bold text-center">{quotes}</p>
        <p className="text-center pt-4 pb-10">{author}</p>
      </div>
    </div>
  );
}

export default Quotes;
