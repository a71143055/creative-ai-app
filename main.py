from flask import Flask
from flask_cors import CORS
from app.routes.image import image_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(image_bp, url_prefix="/image")  # ✅ 이 줄이 중요!
    return app