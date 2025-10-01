from flask import Blueprint, request, jsonify

image_bp = Blueprint("image", __name__)

@image_bp.route("/generate", methods=["POST"])
def generate_image():
    prompt = request.json.get("prompt")
    filename = f"{prompt.replace(' ', '_')}.png"
    image_url = f"/static/images/{filename}"
    return jsonify({"image_url": image_url})