from flask import Blueprint, request, jsonify

image_bp = Blueprint("image", __name__)

@image_bp.route("/generate", methods=["POST"])
def generate_image():
    prompt = request.json.get("prompt")
    
    # 예시: 이미지 파일 이름 생성
    filename = f"{prompt.replace(' ', '_')}.png"
    
    # 실제로는 이미지 생성 로직이 들어가야 함
    # 여기서는 static 폴더에 있다고 가정
    image_url = f"/static/images/{filename}"
    
    return jsonify({"image_url": image_url})