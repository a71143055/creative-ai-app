from flask import Blueprint, request, jsonify

feedback_bp = Blueprint("feedback", __name__)

@feedback_bp.route("/get", methods=["POST"])
def get_feedback():
    content = request.json.get("content")
    # GPT 기반 피드백 로직은 추후 구현
    return jsonify({"feedback": f"'{content}'에 대한 창의적인 피드백입니다!"})