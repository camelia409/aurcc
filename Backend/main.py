from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from collections import defaultdict
from dotenv import load_dotenv
import os

load_dotenv()



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))



# Store contexts for each session
user_contexts = defaultdict(list)

SYSTEM_PROMPT = (
    "You are a helpful chatbot for Anna University Regional Campus Coimbatore (AURCC). "
    "Answer only the questions asked. "
    "About Anna University Regional Campus Coimbatore: "
    "AURCC was established in 2012 and offers higher education in Engineering and Technology.as well as Management Studies "
    "The campus is located at Maruthamalai Main Road, Navavoor, Coimbatore - 641046, Tamil Nadu, India. "
    "The campus is situated in an Arcadian environment, away from the hustle and bustle of the city. "
    "AURCC is equipped with excellent infrastructure and highly qualified faculty members who provide "
    "hands-on experience to students across various engineering disciplines. "
    "The campus offers undergraduate Engineering and both UG and PG in  Management Studies"
    "Mechanical Engineering, Electrical and Electronics and Electronics Engineering, Electronics and Communication Engineering, "
    "Artificial Intelligence and Data Science, and other engineering branches. "
    "For more information, visit the official website: http://aurcc.ac.in/ "
    "Contact: Email - deancoimbatore@annauniv.edu, Phone - 7200016282. "

    "Developer Information: "
    "This chatbot was developed by Janarthanan Gnanamurthy, an Artificial Intelligence and Data Science student From "
    "from the 2026 batch at Anna University Regional Campus Coimbatore."
)

class ChatRequest(BaseModel):
    message: str
    session_id: str


@app.post("/chat")
async def chat_with_gemini(request: ChatRequest):
    session_id = request.session_id
    user_contexts[session_id].append(f"User: {request.message}")
    print(f"{session_id} : {request.message}")
    # Generate response using the context
    model = genai.GenerativeModel("gemini-2.0-flash")
    conversation = f"{SYSTEM_PROMPT} {' '.join(user_contexts[session_id])}"
    response = model.generate_content(conversation).text

    # Append the bot's response to the context
    user_contexts[session_id].append(f"Assistant: {response}")

    return {"response": response}


@app.get("/dummy")
def dummy():
    return {"message": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
