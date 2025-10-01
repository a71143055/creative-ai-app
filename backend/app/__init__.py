from flask import Flask
from flask_cors import CORS

from app.routes.image import image_bp
from app.routes.music import music_bp
from app.routes.feedback import feedback_bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # ← 여기!

    app.register_blueprint(image_bp, url_prefix="/image")
    app.register_blueprint(music_bp, url_prefix="/music")
    app.register_blueprint(feedback_bp, url_prefix="/feedback")
    return app