import { Commet } from "react-loading-indicators";

function Loading() {
  return (
    <div className="w-full absolute left-0 top-0 h-screen flex items-center justify-center bg-white">
      <Commet color="#5ca5a5" size="medium" text="" textColor="" />
    </div>
  );
}

export default Loading;
