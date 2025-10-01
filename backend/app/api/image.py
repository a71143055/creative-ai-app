from fastapi import APIRouter
router = APIRouter()

@router.post("/generate-image")
def generate_image(prompt: str):
    # Stable Diffusion 호출 로직
    return {"image_url": "generated_image.png"}