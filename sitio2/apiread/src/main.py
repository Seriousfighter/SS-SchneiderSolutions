from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import database
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:9000"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/users")
def read_users(db: Session = Depends(database.get_db)):
    users = db.query(database.User).all()  # Fetch all users
    return [{"name": user.name, "lastname": user.lastname} for user in users]