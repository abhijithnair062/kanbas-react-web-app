import ModuleList from "../Modules/List";
import Status from "./Course Status";
import "../Modules/index.css"
function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="course-status flex-grow-0 me-2 d-none d-lg-block m-10">
      <Status />
      </div>
    </div>
  );
}
export default Home;