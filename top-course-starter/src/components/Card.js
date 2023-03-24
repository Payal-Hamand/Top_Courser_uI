import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses,setLikedCourses }) => {
  const clickHandler = () =>{
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
      toast.warning("Like Removed");
    }
    else{
      if(likedCourses.length ===0){
        setLikedCourses([course.id])
      }
      else{
        setLikedCourses((prev)=>[...prev],course.id)
      }
      toast.success("Liked Succesfully");
    }

  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 ">
      <div className="relative">
        <img src={course.image.url} alt="Like" />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center ">
        <button onClick={clickHandler}>
          {
            !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />):(<FcLike fontSize="1.75rem" />)
          }
          
        </button>
      </div>
      </div>
      
      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6 ">{course.title}</p>
        <p className="mt-2 text-white">
        {
          course.description.length > 100 ? (course.description.substr(0,100))+"...":(course.description)
          }</p>

      </div>
    </div>
  );
};

export default Card;
