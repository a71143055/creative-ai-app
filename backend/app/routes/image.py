from flask import Blueprint, request, jsonify

image_bp = Blueprint("image", __name__)

@image_bp.route("/generate", methods=["POST"])
def generate_image():
    prompt = request.json.get("prompt")
    # 예시: static/images/ 폴더에 이미지가 있다고 가정
    image_filename = f"{prompt.replace(' ', '_')}.png"
    return jsonify({"image_url": f"/static/images/{image_filename}"})