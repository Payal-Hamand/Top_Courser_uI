import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar />
      </div>
      <div >
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto min-w-[50vh] flex flex-wrap justify-center items-center ">
      {
        loading ? <Spinner /> : <Cards courses={courses} category={category} />}</div>

      </div>
      

      <FaThumbsUp> </FaThumbsUp>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
