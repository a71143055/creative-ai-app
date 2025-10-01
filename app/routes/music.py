from flask import Blueprint, request, jsonify

music_bp = Blueprint("music", __name__)

@music_bp.route("/generate", methods=["POST"])
def generate_music():
    prompt = request.json.get("prompt")
    filename = f"{prompt.replace(' ', '_')}.mp3"
    music_url = f"/static/music/{filename}"
    return jsonify({"music_url": music_url})