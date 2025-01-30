import React, { useState } from "react";
import her from "../../assets/her.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  // State to manage user input and chatbot response
  // const [userInput, setUserInput] = useState("");
  // const [chatbotResponse, setChatbotResponse] = useState("");

  // // Function to get chatbot response
  // const getChatbotResponse = async () => {
  //   if (!userInput) {
  //     setChatbotResponse("Please enter a query.");
  //     return;
  //   }

  //   try {
  //     // Send POST request to FastAPI backend
  //     const response = await fetch("http://127.0.0.1:8005/generate_remedy/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user_input: userInput }), // Send user input as JSON
  //     });

  //     const data = await response.json();
  //     setChatbotResponse(`Remedy: ${data.remedy}`);
  //   } catch (error) {
  //     setChatbotResponse("There was an error fetching the response.");
  //   }
  // };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full min-h-[80vh] pt-[6rem] lg:px-20 px-10 flex justify-start items-center"
      style={{ backgroundImage: `url(${her})` }}
    >
      <div className="flex flex-col justify-center items-start gap-10 lg:w-[60%]">
        <div className="flex flex-col justify-center items-start">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold">
            Holistic Healthcare
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold">
            Experience
          </h1>
        </div>
        <button
          onClick={() => navigate("/labs")}
          className="px-16 ml-4 bg-black text-white py-4 lg:text-xl text-lg font-semibold rounded-[20px] italic shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out"
        >
          Book now
        </button>

        {/* Chatbot Section */}
        {/* <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg w-full max-w-lg"> */}
          {/* <h2 className="text-xl font-semibold mb-2">Ask the Chatbot</h2> */}
          {/* <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your query..."
            className="w-full px-4 py-2 border rounded-md mb-4"
          />
          <button
            onClick={getChatbotResponse}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Get Remedy
          </button>
          <div
            className="mt-4 text-gray-800 font-medium"
          >
            {chatbotResponse}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
