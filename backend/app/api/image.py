from flask import Blueprint, request, jsonify

image_bp = Blueprint("image", __name__)

@image_bp.route("/generate", methods=["POST"])
def generate_image():
    prompt = request.json.get("prompt")
    # Stable Diffusion 호출 로직은 추후 구현
    return jsonify({"image_url": f"/assets/images/{prompt.replace(' ', '_')}.png"})