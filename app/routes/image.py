from flask import Blueprint, request, jsonify

image_bp = Blueprint("image", __name__)

@image_bp.route("/generate", methods=["POST"])
def generate_image():
    prompt = request.json.get("prompt")
    # 예시 응답
    return jsonify({"image_url": "/static/images/test.png"})