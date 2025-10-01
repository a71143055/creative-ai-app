from flask import Blueprint, request, jsonify

music_bp = Blueprint("music", __name__)

@music_bp.route("/generate", methods=["POST"])
def generate_music():
    mood = request.json.get("mood")
    # MusicGen 호출 로직은 추후 구현
    return jsonify({"music_url": f"/assets/music/{mood.replace(' ', '_')}.mp3"})