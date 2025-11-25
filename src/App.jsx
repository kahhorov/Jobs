import Lists from "./components/list/Lists";
import Navbar from "./components/navbar/Navbar";
import Error from "./error/Error";
import useGetApi from "./hooks/useGetApi";
import Loading from "./loading/Loading";

function App() {
  const { data, error, loading } = useGetApi();
  console.log(data);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="container pt-[77px] pb-[120px]">
        <Lists data={data} />
      </main>
    </>
  );
}

export default App;
