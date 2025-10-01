from flask import Blueprint, request, jsonify

feedback_bp = Blueprint("feedback", __name__)

@feedback_bp.route("/generate", methods=["POST"])
def generate_feedback():
    prompt = request.json.get("prompt")
    feedback = f"'{prompt}'에 대한 창의적인 피드백입니다!"
    return jsonify({"feedback": feedback})