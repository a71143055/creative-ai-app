from fastapi import FastAPI
from app.api import image, music, feedback

app = FastAPI()
app.include_router(image.router)
app.include_router(music.router)
app.include_router(feedback.router)