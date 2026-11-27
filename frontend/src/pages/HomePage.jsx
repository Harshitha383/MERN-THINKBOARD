import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const HomePage = () => {
  const [isRateLimited, setISRateLimited] = useState(false);
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
      
        console.log(res.data);
        setNotes(res.data)
        setISRateLimited(false)
      } catch (error) {
        console.log("error");
        if (error.response?.status === 429){
          setISRateLimited(true)
      } else {
        toast.error("Failed to fetch notes");
      }
    } finally {
      setLoading(false)
    }
    };

    fetchNotes();
    }, []);

  return (
    <div className="min-h-screen">
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6 ">
        {true && <div className="text-center text-primary py-10">Loading notes...</div>}

      </div>
    </div>
  )
}

export default HomePage