const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 sm:border-4 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          // width={127}
          // height={103}
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
