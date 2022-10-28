import { JobDetails } from "../components/JobDetails";
import { JobLists } from "../components/JobLists";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<JobLists />} />
        <Route exact path="/jobs" element={<JobLists />} />
        <Route exact path="/jobs/:position" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}
