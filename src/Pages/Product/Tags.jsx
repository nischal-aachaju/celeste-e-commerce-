const TagComp = ({ e }) => {
  return (
    <div className="border-gray-400/30 border h-6.5 w-fit px-2  flex justify-center items-center font-mont text-sm font-light py-2">
      {e}
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className="h-10 w-full flex gap-2 items-center mb-6">
      {tags.map((item, idx) => {
        return <TagComp e={item} key={idx} />;
      })}
    </div>
  );
};

export default Tags;
