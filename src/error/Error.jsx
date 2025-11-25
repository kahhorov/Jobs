import useGetApi from "../hooks/useGetApi";

function Error() {
  const { error } = useGetApi();
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-white flex flex-col gap-10 items-center justify-center font-bold">
      <img src="/error.png" alt="error" />
      <p className="text-5xl">{error}</p>
    </div>
  );
}

export default Error;
