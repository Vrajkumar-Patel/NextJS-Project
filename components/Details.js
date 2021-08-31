import Image from "next/image";

function Details({ imageLogo, title, name, totalNum }) {
  return (
    <div className="flex flex-col mt-20">
      <div className="w-20 h-20 flex justify-center items-center  shadow-lg bg-gradient-to-b from-blue-200 to-transparent rounded-3xl">
        <Image src={imageLogo} />
      </div>
      <h3
        style={{
          fontFamily: "'Saira Semi Condensed', sans-serif",
          color: "#254CAC",
        }}
        className="font-medium text-2xl text-center mt-2"
      >
        {totalNum}+
      </h3>
      <p
        style={{
          fontFamily: "'Saira Semi Condensed', sans-serif",
          color: "#254CAC",
        }}
        className='text-sm text-center'
      >
        {title}
      </p>
    </div>
  );
}

export default Details;
